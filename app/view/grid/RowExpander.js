Ext.define('nstgrid.view.grid.RowExpander', {
    extend: 'Ext.grid.Panel',

    xtype: 'row-expander-grid',
    //store: 'Companies',

    columns: [
        { text: "registerUser", flex: 1, dataIndex: 'registerUser'},
        { text: "configurationType",  dataIndex: 'configurationType'},
        { text: "company", dataIndex: 'company'},
        { text: "actor", dataIndex: 'actor'}
    ],
    width: 600,
    height: 600

});