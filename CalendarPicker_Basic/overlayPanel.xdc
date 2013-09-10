{
    "xdsVersion": "2.2.2",
    "frameworkVersion": "touch22",
    "internals": {
        "type": "Ext.Panel",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "height": "95%",
            "html": null,
            "maxWidth": "17em",
            "width": "100%",
            "designer|userClassName": "overlayPanel",
            "designer|userAlias": "overlayPanel",
            "hideOnMaskTap": false,
            "layout": "fit",
            "modal": true,
            "scrollable": null
        },
        "cn": [
            {
                "type": "fixedfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "initialize",
                    "implHandler": [
                        "this.callParent();\r",
                        "\r",
                        "this.setHeight((Ext.os.is.Phone) ? '95%' : '85%');\r",
                        "this.setWidth((Ext.os.is.Phone) ? '95%' : '85%');\r",
                        "this.setMaxWidth((Ext.os.is.Phone) ? '' : '17em');\r",
                        ""
                    ]
                }
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}