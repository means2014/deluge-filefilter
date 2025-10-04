/**
 * Script: filefilter.js
 *     The client-side javascript code for the FileFilter plugin.
 *
 * Copyright:
 *     (C) Chris Means 2025 <chris-means@proton.me>
 *
 *     This file is part of FileFilter and is licensed under GNU GPL 3.0, or
 *     later, with the additional special exception to link portions of this
 *     program with the OpenSSL library. See LICENSE for more details.
 */

FileFilterPlugin = Ext.extend(Deluge.Plugin, {
    constructor: function(config) {
        config = Ext.apply({
            name: 'FileFilter'
        }, config);
        FileFilterPlugin.superclass.constructor.call(this, config);
    },

    onDisable: function() {
        deluge.preferences.removePage(this.prefsPage);
    },

    onEnable: function() {
        this.prefsPage = deluge.preferences.addPage(
            new Deluge.ux.preferences.FileFilterPage());
    }
});
new FileFilterPlugin();
