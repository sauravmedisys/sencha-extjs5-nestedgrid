/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('nstgrid.view.main.Main', {
	extend: 'Ext.panel.Panel',
    requires: [
        'nstgrid.view.main.MainController',
        'nstgrid.view.main.MainModel',
		'nstgrid.view.grid.RowExpander'
    ],
    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },
	title: 'Nested Grid',
    frame:true,
	border: true,
    bodyPadding: 10,

    items: [{
		xtype: 'row-expander-grid',
		width: 600,
		height: 300
    }]
});
