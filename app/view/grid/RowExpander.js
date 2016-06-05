Ext.define('nstgrid.view.grid.RowExpander', {
    extend: 'Ext.grid.Panel',

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
	width: 600,
    height: 300,
	store   : 'nstgrid.store.Companies',
    columns: [
        { text: "configurationType",  dataIndex: 'configurationType', flex: 1},
        { text: "company", dataIndex: 'company'},
        { text: "actor", dataIndex: 'actor'}
    ]

});