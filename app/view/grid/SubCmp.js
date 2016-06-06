	Ext.define('Ext.ux.grid.SubCmp', {
        extend: 'Ext.grid.plugin.RowExpander',
    
        alias: 'plugin.subcmprow',
    
        rowBodyTpl: ['{%this.owner.renderComponent(out, values);%}'],
    
        // override this method and return component config
        componentConfigFn: function(record) { return {}; },
        
        init: function(grid) {
            var me = this,
                store = grid.getStore(),
                view = grid.getView();
            
            me.components = {};
            me.callParent(arguments);
            
            // when grid is reloaded or destroyed  we should destroy all created components
            grid.on('beforedestroy', me.destroyComponents, me);
            store.on('beforeload', me.destroyComponents, me);
            
            // renders component
            view.on('expandbody', me.onExpandBody, me);
            
            grid.getRefItems = (function() {
                var originalFn = grid.getRefItems;
                return function(deep) {
                    var result = originalFn.call(grid, deep);
                                        
                    if (deep) {
                        for (var i in me.components) {
                            result.push(me.components[i]);
                            result.push.apply(result, me.components[i].getRefItems(true));
                        }
                    }
                    
                    return result;
                }
            }());
        },
        
        destroyComponents: function() {
            var me = this,
                components = me.components;
            
            for (var i in components) {
                components[i].destroy();
            }
            me.components = {};
        },
        
        onExpandBody: function(rowNode, record, expandRow, eOpts) {
            var me = this,
                grid = me.grid,
                recordId = record.id,
                componentWrapId = grid.id + '-component-wrap-' + recordId,
                component = me.components[recordId];
            
            if (component && !component.rendered) {
                component.render(componentWrapId);
            }
        },
        
        renderComponent: function (out, rowValues) {
            var me = this,
                grid = me.grid,
                store = grid.getStore(),
                recordId = rowValues.id,
                record = store.getById(recordId),
                componentWrapId = grid.id + '-component-wrap-' + recordId,
                componentId = grid.id + '-component-' + recordId,
                component,
                config;
            
            if (me.components[recordId]) {
                return; // already rendered
            }
            
            config = Ext.apply({}, { id: componentId }, me.componentConfigFn(record));
            me.components[recordId] = component = Ext.create(config);
            
            out.push('<div id="' + componentWrapId + '"></div>');
        }
    });