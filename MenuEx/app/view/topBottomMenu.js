/*
 * File: app/view/topBottomMenu.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.topBottomMenu', {
    extend: 'Ext.Container',
    alias: 'widget.topBottomMenu',

    config: {
        height: '6em',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        flex: 1,
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'menuBtn',
                                text: 'Button 1'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'menuBtn',
                                text: 'Button 2'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        flex: 1,
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'menuBtn',
                                text: 'Button 3'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        layout: {
                            type: 'fit'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'menuBtn',
                                text: 'Button 4'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});