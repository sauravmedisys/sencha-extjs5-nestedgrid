Ext.define('nstgrid.view.forms.FormValidate' , {
    extend        : 'Ext.form.Panel',
    alias         : 'widget.formvalidate',
    xtype         : 'formvalidate',
    reference     : 'formvalidate',
    header        : false,
    height        : 60,
	
    initComponent : function () {
        var me         = this; 
        
        me.items       = me.renderPanelItems(me);
        
        me.callParent(arguments);
    },
    
    renderPanelItems : function(me){
        var items = [{
            xtype       : 'fieldcontainer',
            title       : 'Pateint Info',
            defaultType : 'textfield',
            layout      : {
                type         : 'hbox'
            },
            defaults: {
                labelAlign   : 'top',
                padding      : '4 4 0 4'
            },
			items            : [{
				fieldLabel    : 'Request No', 
				labelSeparator: '&nbsp',
				name          : 'requestNo',
				reference     : 'requestNo',
				regex         : /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
				width         : 90
			},{
				fieldLabel    : 'Patient ID',
				labelSeparator: '&nbsp',
				name          : 'patientNo', 
				reference     : 'patientNo',
				action        : 'patientNo', 
				regex         : /^[0-9]*$/,
				regexText     : 'Numeric Only',
				width         : 90
			}]
		}];
        return items;
    }
});
