/*
 * @version   : 2.5.2 - Ext.NET Pro License
 * @author    : Ext.NET, Inc. http://www.ext.net/
 * @date      : 2014-05-22
 * @copyright : Copyright (c) 2008-2014, Ext.NET, Inc. (http://www.ext.net/). All rights reserved.
 * @license   : See license.txt and http://www.ext.net/license/.
 */


//Ext.define('Test.Control.MISATagLabel', {
//    extend: 'Ext.net.TagLabel',
//    maxLength: 18,
//    initComponent: function () {
//        this.addEvents("quickSearch");
//        this.callParent(arguments);
//    }
//});

//Ext.define('Test.Control.MISATagLabelDirectEvents', {
//    extend: 'Ext.net.TagLabelDirectEvents',   
//});

Ext.override(Ext.net.TagLabel, {
    add: function () {
        this.callParent(arguments);
    },
    addWithObject: function (tag, obj) {
        tag.refObject = obj;
        var t = this.add(tag);
        return t;
    }
});

Ext.override(Ext.net.TagField, {   
    addWithObject: function (tag, obj) {
        tag.refObject = obj;
        var t = this.insertTag(0,tag);
        return t;
    }
});