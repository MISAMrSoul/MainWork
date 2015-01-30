Ext.define('MISA.Control.MISADateRange', {
    extend: 'Ext.Component',
    xtype: 'MISADateRange',
    //instanceof: 'MISA.Control.MISADateRange',
    renderTo: Ext.getBody(),
    renderTpl: [
        '<h1 id="{id}-title">{title}</h1>',
       '<p>{msg}</p>',
    ],
    renderData: {
        title: "Error",
        msg: "Something went wrong"
    },
    childEls: ["title"],
    listeners: {
        afterrender: function (cmp) {
            // After rendering the component will have a title property
            cmp.title.setStyle({ color: "red" });
        }
    }
});