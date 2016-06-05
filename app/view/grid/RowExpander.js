Ext.define('nstgrid.view.grid.RowExpander', {
    extend: 'Ext.grid.Panel',

    xtype: 'row-expander-grid',
    //store: 'Companies',
	viewConfig    : {
        stripeRows    : true,
        forceFit      : true,
        emptyText     : 'No data to display'
    },
	frame	: true,
	border	: true,
    columns: [
        { text: "registerUser", dataIndex: 'registerUser'},
        { text: "configurationType",  dataIndex: 'configurationType', flex: 1},
        { text: "company", dataIndex: 'company'},
        { text: "actor", dataIndex: 'actor'}
    ],
    width: 600,
    height: 300

});