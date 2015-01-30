//Ext.define('MISA.Control.MISADateRange', {
//    extend: 'Ext.Component',
//    xtype: 'MISADateRange',
//    //instanceof: 'MISA.Control.MISADateRange',
//    renderTo: Ext.getBody(),
//    renderTpl: [
//        '<h1 id="{id}-title">{title}</h1>',
//       '<p>{msg}</p>',
//    ],
//    renderData: {
//        title: "Error",
//        msg: "Something went wrong"
//    },
//    childEls: ["title"],
//    listeners: {
//        afterrender: function (cmp) {
//            // After rendering the component will have a title property
//            cmp.title.setStyle({ color: "red" });
//        }
//    }
//});



Ext.define('MISA.Control.MISAReferenceLink', {
    extend: 'Ext.Component',
    alias: 'widget.mreferencelink',
    xtype: 'MISAReferenceLink',
    mixins: {
        mixedcollection: Ext.util.MixedCollection
    },
    links: [
        { text: "test1", url: 'http://www.dantri.com.vn', target: '_blank' },
        { text: "test2", url: 'http://www.vnexpress.net', target: '_blank' }
    ],
    renderTpl: [
        '<tpl for="links">',
        '<a id="{[getDynamicID(i1)]}" style="vertical-align:middle;"',
        '<tpl if="!Ext.isEmpty(url)"> href="{url}"</tpl>',
        '<tpl if="!Ext.isEmpty(target)"> target="{target}"</tpl>',
        '>',

        '{text}',
        '</a>',
        '</tpl>'
    ],
    initRenderData: function () {
        var me = this;
        return Ext.apply(me.callParent(), {
            links: me.links
        });
    },
    //getElConfig: function () {
    //    var me = this;
    //    return Ext.apply(me.callParent(), {
    //        tag: 'span',
    //        id: me.id
    //    });
    //},
});


Ext.define('MISA.Control.MISADateRange', {
    extend: 'Ext.Component',
    xtype: 'MISADateRange',
    initComponent: function () {
        var me = this;

        me.callParent(arguments);
    }

});
