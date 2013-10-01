{
    "xdsVersion": "2.2.2",
    "frameworkVersion": "touch22",
    "internals": {
        "type": "Ext.Container",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "cls": [
                "matrix-view"
            ],
            "itemId": "matrixViewPhone",
            "style": "background-color: white;",
            "ui": "light",
            "designer|userClassName": "matrixViewPhone",
            "designer|userAlias": "matrixViewPhone",
            "layout": "card"
        },
        "cn": [
            {
                "type": "Ext.Toolbar",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "docked": "top",
                    "ui": "light"
                },
                "cn": [
                    {
                        "type": "Ext.Button",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "itemId": "matrixViewBackBtn",
                            "ui": "back",
                            "text": "Back"
                        }
                    },
                    {
                        "type": "Ext.SegmentedButton",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "itemId": "matrixViewSegBtn"
                        },
                        "cn": [
                            {
                                "type": "Ext.Button",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "pressed": true,
                                    "itemId": "matrixViewYearBtn",
                                    "text": "Year"
                                }
                            },
                            {
                                "type": "Ext.Button",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "itemId": "matrixViewListBtn",
                                    "text": "List"
                                }
                            },
                            {
                                "type": "Ext.Button",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "itemId": "matrixViewDayBtn",
                                    "text": "Day"
                                }
                            }
                        ]
                    },
                    {
                        "type": "Ext.Label",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "html": "",
                            "itemId": "matrixViewLabel",
                            "style": "margin-left: 1em;"
                        }
                    }
                ]
            },
            {
                "type": "Ext.Container",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "itemId": "yearView",
                    "margin": ".5em",
                    "style": "border: 1px solid blue;background-color: white;",
                    "layout": "fit"
                }
            },
            {
                "type": "Ext.Container",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "html": "More Later...",
                    "itemId": "listView",
                    "style": "border: 1px solid blue; background-color: white;",
                    "layout": "fit"
                }
            },
            {
                "type": "Ext.Container",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "html": null,
                    "itemId": "dayView",
                    "maxWidth": "40em",
                    "style": "background-color: white; border: 1px solid gray; margin: .5em;",
                    "layout": "vbox"
                },
                "cn": [
                    {
                        "type": "Ext.Container",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "height": "10em",
                            "html": null,
                            "style": "border-bottom: 1px solid gray; margin: 0 1em 0 1em;",
                            "layout": "hbox"
                        },
                        "cn": [
                            {
                                "type": "Ext.Container",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "layout|flex": 1,
                                    "html": null,
                                    "itemId": "dayViewMoCal",
                                    "margin": null,
                                    "style": null,
                                    "width": "17em",
                                    "layout": "fit"
                                }
                            }
                        ]
                    },
                    {
                        "type": "Ext.Container",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "listeners": [
                                "{\r",
                                "  swipe: {\r",
                                "      fn: function(e) {\r",
                                "          this.up('#dayView').fireEvent('dayViewSwipe', this.up('#dayView'), e);\r",
                                "      },\r",
                                "      element: 'element'\r",
                                "  }\r",
                                "}"
                            ],
                            "layout|flex": 1,
                            "html": "List detail for selected day...",
                            "itemId": "dayViewListDetail",
                            "style": "border: solid 1px gray; margin: 1em .5em 1em .5em; ",
                            "styleHtmlCls": "dayViewListDetail-html",
                            "styleHtmlContent": true
                        },
                        "configAlternates": {
                            "listeners": "object"
                        },
                        "customConfigs": [
                            {
                                "group": "(Custom Properties)",
                                "name": "listeners",
                                "type": "string"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}