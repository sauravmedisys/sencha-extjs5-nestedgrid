Ext.define('nstgrid.view.grid.RowExpander', {
    extend: 'Ext.grid.Panel',
	requires: [
      
    ],
    xtype: 'row-expander-grid',
	viewConfig    : {
        stripeRows    : true,
        forceFit      : true,
        emptyText     : 'No data to display',
		listeners     : {
            viewready   : function(grid, opts){
                var store    = Ext.data.StoreManager.get('nstgrid.store.Companies');
				
            },
			expandbody: function(rowNode, record, expandNode) {
				console.log('expanded row '+ record);
			}
        }
    },
	frame	: true,
	border	: true,
	width	: 600,
    height	: 300,
	width	: '100%',
	store   : 'nstgrid.store.Companies',
	
	
	plugins	: [{
        ptype	: 'rowexpander',
        /* rowBodyTpl : new Ext.XTemplate(
            '<p><b>Company:</b> {name}</p>',
            '<p>{change:this.expanded}</p>'
        ), */
		rowBodyTpl: new Ext.XTemplate('<p>&nbsp;</p>')
    }],
	columns	: [
		{ text: "company",flex: 1, dataIndex: 'company'},
		{ text: "configurationType",  dataIndex: 'configurationType'},
		{ text: "actor", dataIndex: 'actor'}
	]/* ,
	listeners	: {
		expandbody: function(rowNode, record, expandRowNode) {
			console.log('hello ');
		},
		collapsebody: function(rowNode, record, expandRowNode) {
			console.log('hello ');
		}
	} */

});