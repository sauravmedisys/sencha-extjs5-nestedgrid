Ext.define('nstgrid.view.grid.RowExpander', {
    extend		: 'Ext.grid.Panel',
	xtype		: 'row-expander-grid',
	requires	: [
      
    ],
	frame		: true,
	border		: true,
	width		: 800,
	height		: 500,
	store   	: 'nstgrid.store.Companies',
	viewConfig  : {
        stripeRows    : true,
        forceFit      : true,
        emptyText     : 'No data to display',
		listeners     : {
            viewready   	: function(grid, opts){
                var store    = Ext.data.StoreManager.get('nstgrid.store.Companies');
				
            },
			expandbody		: function(rowNode, record, eNode) {
				var element = Ext.get(eNode).down('.ux-row-expander-box');
				var grid = Ext.create('Ext.grid.Panel', {
						hideHeaders	: false,
						frame		: false,
						border		: false,
						store		: this.store,
						columns		: [
							{ text: "company",flex: 1, dataIndex: 'company'},
							{ text: "configurationType",  dataIndex: 'configurationType'},
							{ text: "actor", dataIndex: 'actor'}
						]
					});
				element.swallowEvent(['click', 'mousedown', 'mouseup', 'dblclick'], true);
				grid.render(element);
			},
			collapsebody	: function(node, record, eNode) {
				Ext.get(eNode).down('.ux-row-expander-box').down('div').destroy();
			}
        }
    },
	plugins		: [{
        ptype	: 'rowexpander',
		rowBodyTpl: new Ext.XTemplate('<div class="ux-row-expander-box"></div>'),
        expandOnRender: true,
        expandOnDblClick: false
    }],
	columns		: [
		{ text: "company",flex: 1, dataIndex: 'company'},
		{ text: "configurationType",  dataIndex: 'configurationType'},
		{ text: "actor", dataIndex: 'actor'}
	]
	
});