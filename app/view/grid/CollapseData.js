/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('collapseGrid.view.main.CollapseData', {
    extend        : 'Ext.grid.Panel',
    alias         : 'widget.collapseData',
    xtype         : 'collapseData',
    reference     : 'collapseData',
	title		  :'Summary',
	frame 	      : true,
	border 		  : true,
	width		  : 600,
	height        : 300,
    requires      : ([
         'Ext.grid.Panel',
         'Ext.PagingToolbar',
         'Ext.grid.column.Action'
    ]),
    
    viewConfig    : {
        stripeRows    : true,
        forceFit      : true,
		getRowClass: function(record, rowIndex, rowParams, store) {
            return (record.get('dep') =='Fri' || record.get('dep') =='Sat' ) 
                   ? 'y-grid3-different-row' 
                   : 'y-grid3-not-so-different-row';
         },
        emptyText     : 'No data to display'
		
    },
	
	initField   : function (me) {
        
        var dockedItems = [];
        
        return dockedItems;    
    },
    initComponent : function () {
        var me         = this;    

		me.store       =  {
			storeId:'employeeStore',
			groupField: 'day',
			fields:['day', 'task', 'time', 'dep', 'hired',{
			name: 'total',
			type: 'int'
		}],
			data:[
				{day:"1st Weak",  task:"1st Task Name",   time:7, dep:"Sun",   total            : 84,  hired:"01/10/2004"},
				{day:"1st Weak",  task:"1st Task Name",   time:7, dep:"Mon",   total            : 20,  hired:"01/10/2004"},
				{day:"1st Weak",  task:"1st Task Name",   time:7, dep:"Tue",   total            : 89,  hired:"01/10/2004"},
				{day:"1st Weak",  task:"1st Task Name",   time:7, dep:"Wed",   total            : 90,  hired:"01/10/2004"},
				{day:"1st Weak",  task:"1st Task Name",   time:7, dep:"Thir",  total            : 84,  hired:"01/10/2004"},
				{day:"1st Weak",  task:"1st Task Name",   time:7, dep:"Fri",   total             : 84,  hired:"01/10/2004"},
				{day:"1st Weak",  task:"1st Task Name",   time:7, dep:"Sat",   total             : 84,  hired:"01/10/2004"},
				{day:"2nd Weak",  task:"2nd Task Name",   time:2, dep:"Sun",   total            : 84,  hired:"04/01/2004"},
				{day:"2nd Weak",  task:"2nd Task Name",   time:2, dep:"Mon",   total            : 84,  hired:"04/01/2004"},
				{day:"2nd Weak",  task:"2nd Task Name",   time:2, dep:"Tue",   total            : 45,  hired:"04/01/2004"},
				{day:"3rd Weak",  task:"3rd Task Name",   time:3, dep:"Wed",   total            : 84,  hired:"02/22/2006"},
				{day:"3rd Weak",  task:"3rd Task Name",   time:3, dep:"Thir",  total            : 84,  hired:"02/22/2006"},
			    {day:"3rd Weak",  task:"3rd Task Name",   time:3, dep:"Sun",   total            : 76,  hired:"02/22/2006"},
				{day:"3rd Weak",  task:"3rd Task Name",   time:3, dep:"Mon",   total            : 84,  hired:"02/22/2006"},
				{day:"4th Weak",  task:"4th Task Name",   time:4, dep:"Tue",   total            : 23,  hired:"06/10/2007"}
			]
		},
		me.dockedItems = me.initDockedItems(me);
        me.columns     = me.initColumns(me);
		me.features    = me.initFeatures(me);
		me.tbar        = me.initTbar(me);
        
        me.callParent(arguments);
    },
    
    initDockedItems   : function (me) {
        
        var dockedItems = [];
        
        return dockedItems;    
    },
    
    initColumns     : function(me){
        var columns = [];
        
       
        columns.push({ text     : 'Day',     dataIndex : 'day',  width : 100  });
        columns.push({ text     : 'Task',    dataIndex : 'task', width : 100  });
		columns.push({ 
			dataIndex	: 'dep',
			text		: 'Name',
			summaryType	: 'count',
			summaryRenderer		: function(value){
				return Ext.String.format('{0} Day{1}', value, value !== 1 ? 's' : '');
			}  
		});
        columns.push({  text     	: 'Time',    
						dataIndex 	: 'time',      	   
						width 		: 90,
						summaryType: 'sum',
						summaryRenderer: function(value){
				return Ext.String.format('{0} Hour{1}', value, value !== 1 ? 's' : '');
			} 						
						});
	
			columns.push({ 
			dataIndex: 'total',
			text: 'Average Time',
			width : 200, 
			summaryType: 'average',
			summaryRenderer: function(value){
				return Ext.String.format('{0} Average Hour{1}', value, value !== 1 ? 's' : '');
			}
		});
  
        return columns;
    },
	    initFeatures : function(me){
        var features=[];
        
        features.push({
            id                 : 'group',
            ftype              : 'groupingsummary',
            groupHeaderTpl     : '{name}',
            hideGroupedHeader  : true,
            enableGroupingMenu : true
        });
        return features;
    },
    initTbar        : function(me){
        var tbar    =[];
        
        tbar.push({
            tooltip      : 'Toggle status',
            glyph        : 0xE041,
            enableToggle : true,
            pressed      : true,
            handler      : function(btn){
                var view = btn.up('grid').getView();
                me.showSummary = !me.showSummary;
                view.getFeature('group').toggleSummaryRow(me.showSummary);
                view.refresh();
            }
        });
        
        return tbar;
    }

    
});
