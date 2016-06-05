Ext.define('nstgrid.model.Company', {
    extend      : 'Ext.data.Model',
    fields      : [        
        { name : 'company',             mapping : 'company',            type : 'string' },
        { name : 'configurationType',   mapping : 'configurationType',  type : 'string' },
        { name : 'system',              mapping : 'system',             type : 'string' },
        { name : 'receivingAplication', mapping : 'receivingAplication',type : 'string' },
        { name : 'receivingFacility',   mapping : 'receivingFacility',  type : 'string' },
        { name : 'host',                mapping : 'host',               type : 'string' },
        { name : 'port',                mapping : 'port',               type : 'string' },
        { name : 'isSecure',            mapping : 'isSecure',           type : 'string' },
        { name : 'isApprove',           mapping : 'isApprove',          type : 'string' },
        { name : 'active',              mapping : 'active',             type : 'string' },
        { name : 'actor',               mapping : 'actor',              type : 'string' },
        { name : 'comment',             mapping : 'comment',            type : 'string' },
        { name : 'assainingAuthority',  mapping : 'assainingAuthority', type : 'string' },
        { name : 'securePort',          mapping : 'securePort',         type : 'string' },
        { name : 'portProxy',           mapping : 'portProxy',          type : 'string' }
       ]

});