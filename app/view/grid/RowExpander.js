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
				
            }
        }
    },
	frame	: true,
	border	: true,
	width	: 600,
    height	: 300,
	width	: '100%',
	selectRowOnExpand : true,
	store   : 'nstgrid.store.Companies',
	
	plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Company:</b> {company}</p>',
            '<p><b>Actor:</b> {actor}</p>')
    }],
	columns: [
		{ text: "company",flex: 1, dataIndex: 'company'},
		{ text: "configurationType",  dataIndex: 'configurationType'},
		{ text: "actor", dataIndex: 'actor'}
	]

});