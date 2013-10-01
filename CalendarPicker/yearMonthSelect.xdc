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
            "yearMoSel": "",
            "yearInit": "",
            "numCols": 3,
            "backMonths": 0,
            "forwardMonths": 0,
            "backYears": 2,
            "forwardYears": 10,
            "firstSelDt": [
                "{}"
            ],
            "yearMoCurr": "",
            "height": "85%",
            "itemId": "yearMoSel",
            "maxHeight": "85%",
            "maxWidth": "8em",
            "width": "8em",
            "designer|userClassName": "yearMonthSelect",
            "designer|userAlias": "yearMonthSelect",
            "layout": "fit",
            "modal": true
        },
        "configAlternates": {
            "yearsBack": "number",
            "yearsForward": "number",
            "numCols": "number",
            "forwardMonths": "number",
            "backMonths": "number",
            "backYears": "number",
            "forwardYears": "number",
            "firstSelDt": "object"
        },
        "customConfigs": [
            {
                "group": "(Custom Properties)",
                "name": "yearMoSel",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "yearInit",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "numCols",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "backMonths",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "forwardMonths",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "backYears",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "forwardYears",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "firstSelDt",
                "type": "string"
            },
            {
                "group": "(Custom Properties)",
                "name": "yearMoCurr",
                "type": "string"
            }
        ],
        "cn": [
            {
                "type": "Ext.Container",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "store": null,
                    "displayField": null,
                    "listScrollable": null,
                    "headerItemTpl": null,
                    "contentItemTpl": null,
                    "useAnimation": null,
                    "list": null,
                    "headerItemOuter": null,
                    "headerItemData": null,
                    "disableSelection": null,
                    "listStyle": null,
                    "onItemDisclosure": null,
                    "columns": null,
                    "header": null,
                    "headerTpl": null,
                    "variableHeights": false,
                    "itemHeight": 32,
                    "disclosureProperty": null,
                    "listItemId": "yearMoList",
                    "categItemTpl": null,
                    "footer": null,
                    "includeFooter": false,
                    "plugins": null,
                    "listPlugins": null,
                    "categIndentPct": "0",
                    "colNumberToTruncateForIndents": null,
                    "includeFooterLevels": null,
                    "categDepthColors": null,
                    "categDepthColorsArr": null,
                    "customExpCollapseEvent": null,
                    "renderers": [
                        "{cls_renderer: function(col, values) {\r",
                        "    var isCurr = values['isCurr_'+col];\r",
                        "    return 'yearMoSel-months' + (isCurr ? ' yearMoSel-months-curr' : '');\r",
                        "}}"
                    ],
                    "categDepthColorButtons": null,
                    "pressedBtnCls": null,
                    "useCustomPressedBtnCls": null,
                    "categItemTplOverride": null,
                    "contentItemTplOverride": null,
                    "headerTplOverride": null,
                    "includeHeader": false,
                    "applyDefaultCollapseLevel": null,
                    "defaultCollapseLevel": 1,
                    "landscapeIcon": null,
                    "helpHtml": null,
                    "pressedCls": null,
                    "simpleList": null,
                    "columnSorting": null,
                    "styleContentRow": null,
                    "styleCategRow": null,
                    "styleHeaderRow": null,
                    "singleExpand": true,
                    "additionalListConfigs": null,
                    "selectedCls": null,
                    "mode": null,
                    "useSimpleItems": null,
                    "infinite": null,
                    "arrowPctWidth": "0",
                    "customColumnSortEvent": null,
                    "disableExpandCollapse": null,
                    "categColumns": null,
                    "categCssArr": null,
                    "cssContentRow": null,
                    "cssCategRow": null,
                    "cssHeaderRow": null,
                    "customFooterItems": null,
                    "includeCustomFooterItems": null,
                    "footerDock": null,
                    "hideExpandCollapseBtns": true,
                    "cls": [
                        "x-touchtreegrid-list",
                        "x-touchtreegrid-list-yearMoCont"
                    ],
                    "itemId": "yearMoCont",
                    "designer|createAlias": "touchtreegrid",
                    "layout": null,
                    "scrollable": null
                },
                "configAlternates": {
                    "listScrollable": "object",
                    "defaultExpanded": "boolean",
                    "useAnimation": "boolean",
                    "disableSelection": "boolean",
                    "listStyle": "object",
                    "onItemDisclosure": "boolean",
                    "headerItemData": "array",
                    "columns": "array",
                    "header": "object",
                    "variableHeights": "boolean",
                    "itemHeight": "number",
                    "footer": "object",
                    "includeFooter": "boolean",
                    "list": "object",
                    "plugins": "object",
                    "listPlugins": "object",
                    "colNumberToTruncateForIndents": "number",
                    "includeFooterLevels": "boolean",
                    "categDepthColors": "boolean",
                    "categDepthColorsArr": "array",
                    "renderers": "object",
                    "categDepthColorButtons": "boolean",
                    "useCustomPressedBtnCls": "boolean",
                    "includeHeader": "boolean",
                    "autoApplyCollapseConfig": "boolean",
                    "applyDefaultCollapseLevel": "boolean",
                    "defaultCollapseLevel": "number",
                    "simpleList": "boolean",
                    "headerSorting": "boolean",
                    "columnSorting": "boolean",
                    "singleExpand": "boolean",
                    "additionalListConfigs": "object",
                    "useSimpleItems": "boolean",
                    "infinite": "boolean",
                    "scrollable": "object",
                    "disableExpandCollapse": "boolean",
                    "categColumns": "array",
                    "categCssArr": "array",
                    "customFooterItems": "object",
                    "includeCustomFooterItems": "boolean",
                    "dockFooterAboveHeader": "boolean",
                    "hideExpandCollapseBtns": "boolean"
                },
                "customConfigs": [
                    {
                        "group": "(Custom Properties)",
                        "name": "store",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "displayField",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "listScrollable",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "headerItemTpl",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "contentItemTpl",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "useAnimation",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "list",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "headerItemOuter",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "headerItemInner",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "headerItemData",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "disableSelection",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "listStyle",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "onItemDisclosure",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "columns",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "header",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "headerTpl",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "variableHeights",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "itemHeight",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "disclosureProperty",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "listItemId",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "categItemTpl",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "footer",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "includeFooter",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "plugins",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "listPlugins",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "categIndentPct",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "colNumberToTruncateForIndents",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "includeFooterLevels",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "categDepthColors",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "categDepthColorsArr",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "customExpCollapseEvent",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "renderers",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "categDepthColorButtons",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "pressedBtnCls",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "useCustomPressedBtnCls",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "categItemTplOverride",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "contentItemTplOverride",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "headerTplOverride",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "includeHeader",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "applyDefaultCollapseLevel",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "defaultCollapseLevel",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "landscapeIcon",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "helpHtml",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "pressedCls",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "simpleList",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "columnSorting",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "styleContentRow",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "styleCategRow",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "styleHeaderRow",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "singleExpand",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "additionalListConfigs",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "selectedCls",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "mode",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "useSimpleItems",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "infinite",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "arrowPctWidth",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "customColumnSortEvent",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "disableExpandCollapse",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "categColumns",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "categCssArr",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "cssContentRow",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "cssCategRow",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "cssHeaderRow",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "customFooterItems",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "includeCustomFooterItems",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "footerDock",
                        "type": "string"
                    },
                    {
                        "group": "(Custom Properties)",
                        "name": "hideExpandCollapseBtns",
                        "type": "string"
                    }
                ]
            },
            {
                "type": "fixedfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "numCols": "3",
                    "fn": "initialize",
                    "implHandler": [
                        "var me = this;\r",
                        "me.callParent();\r",
                        "\r",
                        "me.setModal({ transparent: true });  // Keep background transaparent instead of gray since IOS calendar is already gray\r",
                        "\r",
                        "var gridcont = me.down('#yearMoCont');\r",
                        "var gridlist = me.down('#yearMoList');\r",
                        "var scroller = gridlist.getScrollable().getScroller();\r",
                        "\r",
                        "var i, j, thisRow, yearArr=[], tempDt, currYrIdx=0;\r",
                        "\r",
                        "var today    = Ext.Date.clearTime(new Date(Date(Ext.Date.now())), true);\r",
                        "var thisYear = Ext.Date.format(today, 'Y');\r",
                        "var thisMo   = Ext.Date.format(today, 'm');\r",
                        "\r",
                        "var yearInit     = (Ext.isEmpty(me.getYearInit()) ? thisYear : me.getYearInit());\r",
                        "var yearMoCurr   = me.getYearMoCurr();\r",
                        "var yearCurr     = (Ext.isEmpty(me.getYearMoCurr()) ? yearInit : yearMoCurr.substring(0,4));\r",
                        "var moCurr       =(Ext.isEmpty(me.getYearMoCurr()) ? thisMo : yearMoCurr.substring(4,7));\r",
                        "\r",
                        "var backYears    = me.getBackYears();\r",
                        "var forwardYears = me.getForwardYears();\r",
                        "\r",
                        "var startYr = (parseInt(yearInit) - backYears).toString();\r",
                        "var endYr   = (parseInt(yearInit) + forwardYears).toString();\r",
                        "\r",
                        "var numCols = me.getNumCols();\r",
                        "numCols = Math.max(Math.min(numCols, 4),1);  // Override if not between 1 and 4 columns\r",
                        "numRows = 12/numCols;\r",
                        "\r",
                        "var myWidth = (100/numCols).toString()+'%';\r",
                        "\r",
                        "var categColumns = [{\r",
                        "    dataIndex: 'year',\r",
                        "    width: '100%',\r",
                        "    css: 'yearMoSel-years'\r",
                        "}];\r",
                        "me.down('#yearMoCont').setCategColumns(categColumns);\r",
                        "\r",
                        "\r",
                        "var columns=[];\r",
                        "for (j=0; j<numCols; j++) {\r",
                        "    columns.push({\r",
                        "        dataIndex: 'col'+j.toString(),\r",
                        "        width: myWidth,\r",
                        "        addDataIndexToDiv: true,\r",
                        "        css: \"{[this.cls_renderer('col\" + j.toString() + \"', values)]}\"\r",
                        "    });\r",
                        "}\r",
                        "me.down('#yearMoCont').setColumns(columns);\r",
                        "\r",
                        "thisYear = startYr;\r",
                        "var k=0, yr=0;\r",
                        "do { // Loop for each year\r",
                        "    if (thisYear === yearCurr) {currYrIdx=yr;}\r",
                        "\r",
                        "    yearArr.push({           \r",
                        "        year: thisYear, \r",
                        "        ID: thisYear,\r",
                        "        PARENT_ID: null,\r",
                        "        row: null,\r",
                        "        col0: null, isCurr_col0: null,\r",
                        "        col1: null, isCurr_col1: null,\r",
                        "        col2: null, isCurr_col2: null,\r",
                        "        col3: null, isCurr_col3: null\r",
                        "    }); \r",
                        "    k++;\r",
                        "    yr++;\r",
                        "\r",
                        "    // Build month selection rows as array of objects\r",
                        "    for (i=0; i<numRows; i++) {\r",
                        "        thisRow = {year: thisYear,\r",
                        "            PARENT_ID: thisYear,\r",
                        "            ID: k.toString(),\r",
                        "        row: i};\r",
                        "\r",
                        "        for (j=0; j<numCols; j++) {\r",
                        "            tempDt = new Date(parseInt(thisYear), (i*numCols) + j, 1); // Create date as 1st day of current month and year\r",
                        "            thisRow['col'+j.toString()] = Ext.Date.format(tempDt, 'M');  // Jan, Feb, etc.. format\r",
                        "            thisRow['isCurr_col'+j.toString()] = ((thisYear === yearCurr) && (Ext.Date.format(tempDt, 'm') === moCurr));            \r",
                        "        } \r",
                        "        yearArr.push(thisRow);\r",
                        "        k++;       \r",
                        "    }\r",
                        "\r",
                        "    thisYear = (parseInt(thisYear)+1).toString();\r",
                        "} while (thisYear <= endYr);\r",
                        "\r",
                        "var fields = [{name: 'year',type: 'string'},  \r",
                        "{name: 'ID',type: 'string'},{name: 'PARENT_ID',type: 'string'},\r",
                        "{name: 'row',type: 'int'},\r",
                        "{name: 'col0'},{name: 'isCurr_col0', type: 'boolean'},\r",
                        "{name: 'col1'},{name: 'isCurr_col1', type: 'boolean'},\r",
                        "{name: 'col2'},{name: 'isCurr_col2', type: 'boolean'},\r",
                        "{name: 'col3'},{name: 'isCurr_col3', type: 'boolean'}\r",
                        "];\r",
                        "\r",
                        "var tempstore = gridlist.getStore(); // Created when TouchTreeGrid is instantiated\r",
                        "\r",
                        "var gridstore = Ext.create('Ext.data.TreeStore', {root: {children: []}, fields: fields});  \r",
                        "\r",
                        "gridlist.setStore(gridstore);\r",
                        "me.storeId = gridstore.getStoreId();  // Save so that we can destroy it in onDestroy() method when cleaning up\r",
                        "\r",
                        "if (!Ext.isEmpty(tempstore)) {\r",
                        "    Ext.data.StoreManager.unregister(tempstore);\r",
                        "}\r",
                        "\r",
                        "gridlist.yearArr = yearArr; // Store for resuse on expand/collapse all\r",
                        "\r",
                        "var treejson = me.getTree(yearArr, null, gridcont.getDefaultCollapseLevel(), [], false, {});\r",
                        "\r",
                        "gridstore.suspendEvents();\r",
                        "gridstore.removeAll();  // Mainly useful for expand/collapse all where we are rebuilding treestore\r",
                        "gridstore.resumeEvents(true); // \"discard queued events\" improves performance when filtering and/or expanding all\r",
                        "\r",
                        "var gridloaded = gridstore.setData(treejson);  // setRoot() not working => http://www.sencha.com/forum/showthread.php?242257\r",
                        "\r",
                        "\r",
                        "// Expand current month  (unless specifically collapsing all)\r",
                        "var currRec = gridstore.getAt(currYrIdx);\r",
                        "if (!Ext.isEmpty(currRec)) {currRec.set('expanded', true);}\r",
                        "\r",
                        "\r",
                        "var refreshed = gridcont.doRefreshList(true);  \r",
                        "\r",
                        "// Handle leafItemTap event from TouchTreeGrid for day selection processing\r",
                        "gridcont.on('leafItemTap', me.onLeafItemTap, me);\r",
                        "\r",
                        "\r",
                        "// Add listener when this component is destroyed to also destroy associated Store\r",
                        "me.on('destroy', me.onDestroy, me);"
                    ]
                },
                "customConfigs": [
                    {
                        "group": "(Custom Properties)",
                        "name": "numCols",
                        "type": "string"
                    }
                ]
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "onLeafItemTap",
                    "designer|params": [
                        "me, list, index, target, record, e"
                    ],
                    "implHandler": [
                        "\r",
                        "var i, innerText, tgt, dt, doRefresh=false;\r",
                        "\r",
                        "innerText = e.target.innerText;\r",
                        "var store = list.getStore();\r",
                        "var gridcont = me;\r",
                        "var dtPkr = list.parent.parent;\r",
                        "\r",
                        "tgt = e.getTarget(null,null,true);\r",
                        "\r",
                        "var myField = e.target.getAttribute('dataIndex');\r",
                        "if (Ext.isEmpty(myField)) {\r",
                        "    myField = e.target.parentElement.getAttribute('dataIndex');  // check parent element also\r",
                        "    if (Ext.isEmpty(myField)) {return;}\r",
                        "    tgt=tgt.getParent();\r",
                        "} \r",
                        "\r",
                        "\r",
                        "var myDate = record.get(myField);\r",
                        "if (Ext.isEmpty(myDate)) {return;}\r",
                        "\r",
                        "var myYear = record.get('year');\r",
                        "\r",
                        "var monArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];\r",
                        "var myMonth = monArr.indexOf(myDate);\r",
                        "\r",
                        "function pad(n, width, z) {\r",
                        "    z = z || '0';\r",
                        "    n = n + '';\r",
                        "    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;\r",
                        "}\r",
                        "\r",
                        "var yearMoSel = myYear+pad(myMonth.toString(), 2);\r",
                        "dtPkr.setYearMoSel(yearMoSel);\r",
                        "\r",
                        "// Compute backMonths from today for selection of new month in calling routine\r",
                        "var today= Ext.Date.clearTime(new Date(Date(Ext.Date.now())), true);\r",
                        "var firstdt = Ext.Date.clearTime(Ext.Date.getFirstDateOfMonth(today), true);\r",
                        "\r",
                        "var firstSelDt = new Date(parseInt(myYear), parseInt(myMonth), 1); // Create date as 1st day of current month and year\r",
                        "var backMonths = Ext.Date.diff(firstSelDt, firstdt, Ext.Date.MONTH);\r",
                        "\r",
                        "dtPkr.setBackMonths(backMonths);\r",
                        "dtPkr.setForwardMonths(-1*backMonths);\r",
                        "dtPkr.setFirstSelDt(firstSelDt);\r",
                        "\r",
                        "tgt.toggleCls('yearMoSel-selected');  // temporarily toggle selection appearance\r",
                        "\r",
                        "// Slight delay so user sees selection in calendar \r",
                        "setTimeout(function(){\r",
                        "    tgt.toggleCls('yearMoSel-selected');  // reset selection appearance\r",
                        "    dtPkr.fireEvent('yearMoSel', dtPkr, yearMoSel);\r",
                        "},100);\r",
                        "\r",
                        ""
                    ]
                }
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "onDestroy",
                    "implHandler": [
                        "// Up to Developer to destroy each instance of CalendarPicker component upon selection.\r",
                        "// This method does additional cleanup triggered off destroy event to clean up Stores, etc...\r",
                        "var me = this;\r",
                        "\r",
                        "var storeId = me.storeId; // saved in createStore() method\r",
                        "\r",
                        "var stores = Ext.data.StoreManager;\r",
                        "\r",
                        "var gridstore = stores.lookup(storeId);\r",
                        "if (!Ext.isEmpty(gridstore)) {\r",
                        "    stores.unregister(gridstore);\r",
                        "}\r",
                        ""
                    ]
                }
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "getTree",
                    "designer|params": [
                        "list, rootId, expLevel, fldListArr, hasTopRoot, filterOpts"
                    ],
                    "implHandler": [
                        "expLevel = (Ext.isEmpty(expLevel) ? 99 : expLevel);  // Level for initial expansion ...Defaults to fully expanded if not provided\r",
                        "\r",
                        "if (fldListArr.length===0) {\r",
                        "    // Initialize fldListArr with default values from all data fields in first row of list[]\r",
                        "    for (fld in list[0]) {\r",
                        "        if (fld !== 'ID' && fld !== 'PARENT_ID') {  // These are auto-added in createTreeStructure()\r",
                        "            fldListArr.push([fld, 0]);\r",
                        "        }\r",
                        "    }\r",
                        "}\r",
                        "var tree, root = {}, result = []; // fetch list from database\r",
                        "root.ID = rootId;\r",
                        "tree = {text : \".\"};\r",
                        "result.push(this.createTreeStructure(tree, root, list, 1, expLevel, fldListArr, hasTopRoot, filterOpts).result);\r",
                        "return result[0][0];"
                    ]
                }
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "createTreeStructure",
                    "designer|params": [
                        "tree",
                        "root",
                        "list",
                        "level",
                        "expLevel",
                        "fldListArr",
                        "hasTopRoot",
                        "filterOpts"
                    ],
                    "implHandler": [
                        "var i=0, result = [], child, childList = [], children = [], temptree = {}, thisExp,\r",
                        "    has_nonfiltered_child = false;\r",
                        "\r",
                        "// Initialize Filter option variables\r",
                        "filterOpts = (Ext.isEmpty(filterOpts) ? {} : filterOpts);\r",
                        "var filtEnabled = (Ext.isEmpty(filterOpts.enabled) ? false : filterOpts.enabled);\r",
                        "var filtNodesAsLeafs = (Ext.isEmpty(filterOpts.displayNodesWithAllMembersFilteredAsLeafs) ? true : filterOpts.displayNodesWithAllMembersFilteredAsLeafs);\r",
                        "var filtFn = (Ext.isEmpty(filterOpts.filterFn) ? undefined : filterOpts.filterFn);\r",
                        "\r",
                        "if (level === 1 && hasTopRoot) {children = [list[0]];}  // Initial root\r",
                        "else {children = this.getChildren(root, list, false);} //Fetch children\r",
                        "\r",
                        "var ln = children.length;\r",
                        "\r",
                        "for(i=0; i<ln;i++)\r",
                        "{\r",
                        "    child = children[i];\r",
                        "    // Blank out categorized data above specified level as pre-specified in fldListArr\r",
                        "    // Example:  we may have 3 levels of cateogries.  Details sum to to the 3rd and perhaps 2nd level, \r",
                        "    //           but the 1st level should leave this column empty as not desired or applicable.\r",
                        "    for (var j=0; j< fldListArr.length; j++) {\r",
                        "        if (fldListArr[j][1] > 0 && fldListArr[j][1]>=level) {child[fldListArr[j][0]] = '';}\r",
                        "    }\r",
                        "\r",
                        "    if(this.getChildren(child, list, true).length===0) \r",
                        "    {\r",
                        "        temptree = {LEVEL : level, ID : child.ID, PARENT_ID : child.PARENT_ID, leaf : true};\r",
                        "        this.assignMembers(fldListArr, temptree, child);\r",
                        "\r",
                        "        // Push child to tree if filter not enabled or if passes filter condition\r",
                        "        if (!filtEnabled || filtFn(temptree)) { \r",
                        "            childList.push(temptree);\r",
                        "            tree[\"children\"] = childList; // Add leaf to child array of the passed parent (also links arrays)\r",
                        "            has_nonfiltered_child = true;\r",
                        "        }\r",
                        "    }\r",
                        "    else\r",
                        "    {\r",
                        "        thisExp = (level < expLevel ? true : false);\r",
                        "        temptree = {LEVEL : level, ID : child.ID, PARENT_ID : child.PARENT_ID, expanded : thisExp, leaf : false}; \r",
                        "        this.assignMembers(fldListArr, temptree, child);\r",
                        "\r",
                        "        // Push to children array now, but we will Pop it back later if this record and all children fail the filter condition\r",
                        "        childList.push(temptree);\r",
                        "        tree[\"children\"] = childList;  // Add node to child array of passed parent (also links arrays)\r",
                        "\r",
                        "        // Recursively create tree structure for the child since children exist.\r",
                        "        if (!this.createTreeStructure(temptree, child, list, level+1, expLevel, fldListArr, hasTopRoot, filterOpts).has_nonfiltered_child) {\r",
                        "            // If child items are all fitlered, but node passes filter test then  load this node as leaf instead of node (unless specified otherwise)\r",
                        "            if (!filtEnabled || filtFn(temptree)) {\r",
                        "                tree.children[tree.children.length-1].leaf = filtNodesAsLeafs;\r",
                        "                tree.children[tree.children.length-1].expanded = false;\r",
                        "                tree.children[tree.children.length-1].expandable = false;  // disallow expand all children are filtered \r",
                        "                has_nonfiltered_child = true;\r",
                        "\r",
                        "            } else {\r",
                        "                tree.children.pop();    // If HAS_NONFILTERED_CHILD = false, then pop() per above\r",
                        "            }\r",
                        "        } else {\r",
                        "            has_nonfiltered_child = true;\r",
                        "        }\r",
                        "\r",
                        "    }\r",
                        "}\r",
                        "\r",
                        "result.push(tree);   // DON'T NEED TO DO THIS UNTIL DONE WITH FINAL ITERATION\r",
                        "return {result: result, has_nonfiltered_child: has_nonfiltered_child};\r",
                        ""
                    ]
                }
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "assignMembers",
                    "designer|params": [
                        "fldListArr",
                        "treeObj",
                        "child"
                    ],
                    "implHandler": [
                        "for (var i=0; i< fldListArr.length; i++) {\r",
                        "    if (fldListArr[i][0]  !== 'ID' && fldListArr[i][0] !== 'PARENT_ID') {\r",
                        "        treeObj[fldListArr[i][0]] = child[fldListArr[i][0]];\r",
                        "    }\r",
                        "}"
                    ]
                }
            },
            {
                "type": "basicfunction",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "getChildren",
                    "designer|params": [
                        "root",
                        "list",
                        "firstOnly"
                    ],
                    "implHandler": [
                        "var i=0, ln = list.length, result = [];\r",
                        "for(i=0; i<ln;i++)\r",
                        "{\r",
                        "    if(root.ID===list[i].PARENT_ID)\r",
                        "    {\r",
                        "        result.push(list[i]);\r",
                        "        if (firstOnly) {return result;} // Only checking if single child exists so abort upon first detection\r",
                        "    }\r",
                        "}\r",
                        "return result;"
                    ]
                }
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}