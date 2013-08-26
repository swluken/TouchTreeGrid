Ext.define('MyApp.controller.TouchTreeGridControllerMixin', {

// Prototype Dynamic Data Load (refer to loadDynamicStoreMP() method for production version)
    loadDynamicStore: function(me, gridcont, gridurl, loadmask, loadStoreInPostProcess, columnsObj, colArrName,
      rootVal, hasTopRoot, fldListArr, fldArr, timeout) {
    //
    // me							- current controller scope
    // gridcont				- object for linked TouchTreeGrid instance
    // gridurl				- relative reference to JSON file containing following arrays:
    //                  > "datalist"                - data for grid.  Treated as TreeGrid if fields 'ID' and 'PARENT_ID' exist.  (required)
    //                  > "purpose"                 - list of different PURPOSEs as updated to GRIDLISTCOLS_LOCAL table (only required if 'columnnsObj' empty)
    //                                                Standard conventions:  PHONE (default), PHONE_LS, TABLET, TABLET_LS
    //                                                (where '_LS' suffix is for landscape orientation and others are for Portrait)
    //                                                Custom PURPOSEs can be defined (example to support display of different sets of columns based on button push or user-specific configs)
    //                  > "fields"                  - list of fields used to create dynamic store (only required if 'fldArr' empty)
    //                Note:  following only required if 'columnsObj' is empty
    //                  > "columnsPHONE"            - (phone portrait) default columns array that applies to all devices and orientation if no others defined
    //                  > "columnsPHONE_LS"         - (phone landscape) ... if defined in GRIDLISTCOLS_LOCAL  (optional)
    //                  > "columnsTABLET"           - (tablet portrait) ... if defined in GRIDLISTCOLS_LOCAL  (optional)
    //                  > "columnsTABLET_LD"        - (tablet landscape) ... if defined in GRIDLISTCOLS_LOCAL  (optional)
    //                  > "columns{CUSTOM PURPOSE}" - any user-defined column array can be defined in GRIDLISTCOLS_LOCAL, stored to JSON file and loaded to component for custom use
    // loadmask				- message to display when loading data
    // loadStoreInPostProcess - If true then do not load data to store within this function ... me.postLoadProcess() function should exist to process each gridListItemId
    // columnsObj     - object containing each of above columnsXXXX arrays.  Can be passed to this function instead of loading from JSON file
    // colArrName     - user specified columnsXXXX array to load to linked TouchTreeGrid component columns[] array
    // rootVal				- Value stored to ulitmate parents (PARENT_ID) for TreeStore... null value recommended when building data  (ignored for Simple Lists)
    // hasTopRoot			- true if a single row represents the ultimate parent
    // fldListArr			- optional array applicable to TreeGrids only used to blank out columns for higher category rows
    //                  (2nd parameter updated with category level above which will be blank for that column)
    //                  Example:  = [['CATEG', 0], ['HOLDINGS', 0], ['NAV_PCT', 2], ['NAV_AMT', 1], ['CREATE_TIME', 0], ['EXEC_YLD', 3], ['ID', 0], ['PARENT_ID', 0]];
    // fldArr					- Array defining fields to auto-generate Store (only required if not provided in gridurl)
    //                  Example:  [{name: "CATEG"}, {name: "HOLDINGS", type: "float"}, {name: "NAV_PCT", type: "float"}, {name: "NAV_AMT", type: "float"}, 
    //                             {name: "CREATE_TIME"}, {name: "EXEC_YLD", type: "float"}, {name: "ID"}, {name: "PARENT_ID"}]; 
    // timout					- Provides user option to override default timeout of 10000 (10 seconds) when loading data

    	
    	  var strOrient = ((Ext.Viewport.getWindowWidth() > Ext.Viewport.getWindowHeight()) ? 'LS' : 'Port');
        var devType = ((Ext.os.is.Phone) ? 'Phone' : 'Tablet');    
        var orientColName = 'columns' + devType.toUpperCase() + (strOrient === 'LS' ? '_LS' : '');  
        timeout = (!timeout ? 10000 : timeout);


        if (loadmask) {
            Ext.Viewport.setMasked({
                xtype: 'loadmask',
                message: loadmask
            });
        }

        var myRequest = Ext.Ajax.request({
            url: gridurl,
            method: 'GET',
            timeout: timeout,
            cache: false,
            dataType: 'json',
            reader:{
                type: 'json'
            },

            success: function(response) {
                var alldata              = Ext.JSON.decode(response.responseText);
                var griddata             = alldata.datalist;
                var fields               = Ext.isEmpty(fldArr) ? alldata.fields : fldArr;

                var gridListItemId       = gridcont.getListItemId();
                var gridlist             = gridcont.down('#'+gridListItemId);
                
                var i, colName, gridstore, isTreeStore=false;         
                if (gridcont.isObjectEmpty(columnsObj)) {  // uses isObjectEmpty() method from TouchTreeGrid
                   var purpose              = alldata.purpose;  // not required if columnsObj pre-defined
                   for (i=0; i< purpose.length; i++) {
                   	 columnsObj['columns'+purpose[i]] = alldata['columns'+purpose[i]];
                   }
                }
                
                // Store columnsObj to linked instance of component for orientation changes and other custom purposes
                gridcont.config.columnsObj = columnsObj;
                
                if (!Ext.isEmpty(colArrName)) {
                    gridcont.setColumns(columnsObj[colArrName]);                	  
                } else if (!Ext.isEmpty(columnsObj[orientColName]))  {  
                	  // If no request for specific column array, then apply columns based on specific device+orientation (if array defined))
                    gridcont.setColumns(columnsObj[orientColName]);                	  
                } else if (devType === 'Tablet' && !Ext.isEmpty(columnsObj['columnsTABLET']))  {  
                	  // else apply basic TABLET column config if defined and device = Tablet
                    gridcont.setColumns(columnsObj['columnsTABLET']);                	                 	  
                } else {
                    gridcont.setColumns(columnsObj['columnsPHONE']); // apply basic phone config        	  
                }

                // Note: we are defining fields directly within Store instead of creating Model
                if (griddata[0].ID !== undefined && griddata[0].PARENT_ID !== undefined) {
                	 // Create TreeStore if ID and PARENT_ID columns are found in data
                   gridstore = Ext.create('Ext.data.TreeStore', {root: {children: []}, fields: fields});  
                   isTreeStore = true;              	 
                } else {
                   gridstore = Ext.create('Ext.data.Store', {fields: fields});
                }

                gridlist.setStore(gridstore);

                if (!loadStoreInPostProcess && !isTreeStore) {
                    gridstore.suspendEvents();      
                    var gridloaded = gridstore.add(griddata);  
                    gridstore.resumeEvents();
                    
                    if (loadmask) {Ext.Viewport.setMasked(false);}
                }
                else if (!loadStoreInPostProcess && isTreeStore) {
                	  me.loadTree(null, griddata, fldListArr, gridcont, rootVal, hasTopRoot, {}, true);
                    if (loadmask) {Ext.Viewport.setMasked(false);}
                }            

                if (typeof me.postLoadProcess == 'function') {  // Call postLoadProcess method if it exists
                    me.postLoadProcess(gridListItemId, gridcont, alldata); 
                } else {
                	gridcont.doRefreshList(); // Be sure to include this in postLoadProcess otherwise !!!
                }

            },

            failure: function(response, opts) {
                if (loadmask) {Ext.Viewport.setMasked(false);}

                Ext.Msg.alert('Data not loaded: '+gridurl);     
            }
        });
    },
    
    loadColumnsOrientChange: function(gridcont) {
    	
    	  var strOrient = ((Ext.Viewport.getWindowWidth() > Ext.Viewport.getWindowHeight()) ? 'LS' : 'Port');
        var devType = ((Ext.os.is.Phone) ? 'Phone' : 'Tablet');    
        var orientColName = 'columns' + devType.toUpperCase() + (strOrient === 'LS' ? '_LS' : '');  
        
        var columnsObj = gridcont.config.columnsObj;
        
    	  if (!Ext.isEmpty(columnsObj[orientColName]))  {  
        	  // Apply columns based on specific device+orientation (if array defined))
            gridcont.setColumns(columnsObj[orientColName]);  
           	gridcont.doRefreshList();                     	  
        } 
    },

// PROPOSED GENERIC LOAD SCRIPT FOR PRODUCTION DATA LOAD  (TBD)
    loadDynamicStoreMP: function(me, gridcont, gridurl, loadmask, loadStoreInPostProcess, columnsObj, colArrName,
      rootVal, hasTopRoot, fldListArr, fldArr, timeout,
      params, jsonData) {
    // Refer to loadDynamicStore() method for documentation of all other common parameters.
    //
    // gridurl      - XFI Example:  MP.Access.URL_BASE+"/PrimeServlet"
    // params				- XFI Example:  {"function" : "/rs/mm/autoswprepo"}
    // jsonData			- XFI Example: {"accountGrp" : acctgrp_filt, 
    //                              "missingAccountsOnly" : missingAccountsOnly,
    //                              "primeResponseFormat" : {"displayInThousands" : displayInThousands}}   
  	
    	  var strOrient = ((Ext.Viewport.getWindowWidth() > Ext.Viewport.getWindowHeight()) ? 'LS' : 'Port');
        var devType = ((Ext.os.is.Phone) ? 'Phone' : 'Tablet');    
        var orientColName = 'columns' + devType.toUpperCase() + (strOrient === 'LS' ? '_LS' : '');  
        timeout = (!timeout ? 10000 : timeout);

        if (!loadmask) {loadmask = 'Loading...';}
        MP.maskByCmp(gridcont, loadmask);

        var myRequest = MP.Ajax.request({
            url : gridurl,
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            params : params, 
            jsonData : jsonData,      	
            timeout: timeout,

            success: function(response, options) {
                var alldata              = MP.decode(response.responseText);
                var griddata             = alldata.datalist;
                var fields               = Ext.isEmpty(fldArr) ? alldata.fields : fldArr;

                var gridListItemId       = gridcont.getListItemId();
                var gridlist             = gridcont.down('#'+gridListItemId);
                
                var i, colName, gridstore, isTreeStore=false;         
                if (gridcont.isObjectEmpty(columnsObj)) {  // uses isObjectEmpty() method from TouchTreeGrid
                   var purpose              = alldata.purpose;  // not required if columnsObj pre-defined
                   for (i=0; i< purpose.length; i++) {
                   	 columnsObj['columns'+purpose[i]] = alldata['columns'+purpose[i]];
                   }
                }
                
                // Store columnsObj to linked instance of component for orientation changes and other custom purposes
                gridcont.config.columnsObj = columnsObj;
                                
                if (!Ext.isEmpty(colArrName)) {
                    gridcont.setColumns(columnsObj[colArrName]);                	  
                } else if (!Ext.isEmpty(columnsObj[orientColName]))  {  
                	  // If no request for specific column array, then apply columns based on specific device+orientation (if array defined))
                    gridcont.setColumns(columnsObj[orientColName]);                	  
                } else if (devType === 'Tablet' && !Ext.isEmpty(columnsObj['columnsTABLET']))  {  
                	  // else apply basic TABLET column config if defined and device = Tablet
                    gridcont.setColumns(columnsObj['columnsTABLET']);                	                 	  
                } else {
                    gridcont.setColumns(columnsObj['columnsPHONE']); // apply basic phone config        	  
                }

                // Note: we are defining fields directly within Store instead of creating Model
                if (griddata[0].ID !== undefined && griddata[0].PARENT_ID !== undefined) {
                	 // Create TreeStore if ID and PARENT_ID columns are found in data
                   gridstore = Ext.create('Ext.data.TreeStore', {root: {children: []}, fields: fields});  
                   isTreeStore = true;              	 
                } else {
                   gridstore = Ext.create('Ext.data.Store', {fields: fields});
                }

                gridlist.setStore(gridstore);

                if (!loadStoreInPostProcess && !isTreeStore) {
                    gridstore.suspendEvents();      
                    var gridloaded = gridstore.add(griddata);  
                    gridstore.resumeEvents();
                    
                    if (loadmask) {MP.unmaskByCmp(gridcont);}
                }
                else if (!loadStoreInPostProcess && isTreeStore) {
                	  me.loadTree(null, griddata, fldListArr, gridcont, rootVal, hasTopRoot, {}, true);
                    if (loadmask) {MP.unmaskByCmp(gridcont);}
                }            

                if (typeof me.postLoadProcess == 'function') {  // Call postLoadProcess method if it exists
                    me.postLoadProcess(gridListItemId, gridcont, alldata); 
                }
            },

            failure: function(response, opts) {
                MP.Util.handleAjaxFailure(_this, response, 'Error: ' +  loadmask + '<br>Please Retry!!', [gridcont]);  
            }
        });
    },


/**********BEGIN TREESTORE GENERATION CODE***************************************************************************************/
// Required Fields:  'ID', 'PARENT_ID'    
    loadTree: function(collapseLevel, ArrRef, fldListArr, gridcont, rootVal, hasTopRoot, filterOpts, skipApplyDefaultCollapseLevel) {
        var me = this;

        var gridlistname = gridcont.getListItemId();
        var gridlist = gridcont.down('#'+gridlistname);

        if (!Ext.isEmpty(ArrRef) && Ext.isEmpty(gridlist.ArrRef)) {gridlist.ArrRef = ArrRef;}  // Store ArrRef to Grid component for faster collapse/expand
        else if (Ext.isEmpty(ArrRef)){ArrRef = gridlist.ArrRef;} // Get from Grid Component if empty
        else {} // Use what is passed

        // Obtain collaseLevel from linked instance if not passed as a parameter
        collapseLevel = (Ext.isEmpty(collapseLevel) ? gridcont.getDefaultCollapseLevel() : collapseLevel);

        var treejson = this.getTree(ArrRef, rootVal, collapseLevel, fldListArr, hasTopRoot, filterOpts);
        
        // Update current level for next time
        gridcont.collapseLevel = collapseLevel;

        var gridstore = gridlist.getStore();

        gridstore.suspendEvents();
        gridstore.removeAll();
        gridstore.resumeEvents(true); // "discard queued events" improves performance when filtering and/or expanding all

        var gridloaded = gridstore.setData(treejson);  // setRoot() not working => http://www.sencha.com/forum/showthread.php?242257
        var refreshed = gridcont.doRefreshList(skipApplyDefaultCollapseLevel);  

        // workaround to get Touch 2.2 pullrefresh plugin to auto-snapBack  ... or when collapsing rows after scrolling down     
        var scroller = gridlist.getScrollable().getScroller();
        scroller.minPosition.y = 1;
        scroller.scrollTo(0,1);
    //    gridlist.refresh();        

    },

    getTree: function(list, rootId, expLevel, fldListArr, hasTopRoot, filterOpts) {
        // Required Fields:  'ID', 'PARENT_ID'   
        // list       - data array to convert to treestore format
        // rootId     - value of ultimate PARENT_ID (can be null)
        // expLevel   - level to expand treestore to while generating
        // fldListArr - defines columns to include in treestore from ArrRef for specific levels (if empty array then all fields are included at all levels as provided in list[])
        //              2nd parameter defines levels including and higher where data element will be blanked out when generating the treestore
        //              (particularly used for totalled numerics that don't apply to root levels, but the generating SQL can't update as NULL due to SQL UNION constraints 
        //              Note:  Exclude ID, PARENT_ID columns as these will be auto-added
        //              For each field define level "up to which" values will be included on category rows.
        //               '0' means highest root row will include non-nullable values (or as defined in flat file) for this field.
        //               '1' means level 1 categories will include data (if defined)
        //               '2' means data will only be included for up to level 2.  Level 1 and root will not show data for this column.
        //                etc...
        //              Example:   fldListArr = [['YearMonth', 0], ['grouper', 0], ['CloseDate', 1], ['Open', 1], ... ]
        // hasTopRoot - true if a single root row exists
        // filterOpts - Object defining filter options with members as follows:
        //               - enabled : true or false (default)
        //               - displayNodesWithAllMembersFilteredAsLeafs : true (default) or false 
        //                   (if, as result of filter a node has no displayable children, then set to true so that it appears
        //                    as a leaf, or false to dispaly as expandable node ... regardless would not be expandable)
        //               - filterFn : function that returns true if row is to be included in results
        //
        //               Example:
        //               filterOpts = {
        //                  enabled: true,
        //                  displayNodesWithAllMembersFilteredAsLeafs: true,
        //                  filterFn: function (rowObj) {return (parseInt(rowObj.Female) < parseInt(rowObj.Male));}
        //               };
        //
        //               Notes about filtering:
        //               - Node is included if any of it's children are included (whether node passes filter test or not!)
        //               - 
        //
        expLevel = (Ext.isEmpty(expLevel) ? 99 : expLevel);  // Level for initial expansion ...Defaults to fully expanded if not provided

        if (fldListArr.length===0) {
            // Initialize fldListArr with default values from all data fields in first row of list[]
            for (fld in list[0]) {
                if (fld !== 'ID' && fld !== 'PARENT_ID') {  // These are auto-added in createTreeStructure()
                    fldListArr.push([fld, 0]);
                }
            }
        }
        var tree, root = {}, result = []; // fetch list from database
        root.ID = rootId;
        tree = {text : "."};
        result.push(this.createTreeStructure(tree, root, list, 1, expLevel, fldListArr, hasTopRoot, filterOpts).result);
        return result[0][0];
    },

    createTreeStructure: function(tree, root, list, level, expLevel, fldListArr, hasTopRoot, filterOpts) {
        var i=0, result = [], child, childList = [], children = [], temptree = {}, thisExp,
            has_nonfiltered_child = false;

        // Initialize Filter option variables
        filterOpts = (Ext.isEmpty(filterOpts) ? {} : filterOpts);
        var filtEnabled = (Ext.isEmpty(filterOpts.enabled) ? false : filterOpts.enabled);
        var filtNodesAsLeafs = (Ext.isEmpty(filterOpts.displayNodesWithAllMembersFilteredAsLeafs) ? true : filterOpts.displayNodesWithAllMembersFilteredAsLeafs);
        var filtFn = (Ext.isEmpty(filterOpts.filterFn) ? undefined : filterOpts.filterFn);

        if (level === 1 && hasTopRoot) {children = [list[0]];}  // Initial root
        else {children = this.getChildren(root, list, false);} //Fetch children

        var ln = children.length;

        for(i=0; i<ln;i++)
        {
            child = children[i];
            // Blank out categorized data above specified level as pre-specified in fldListArr
            // Example:  we may have 3 levels of cateogries.  Details sum to to the 3rd and perhaps 2nd level, 
            //           but the 1st level should leave this column empty as not desired or applicable.
            for (var j=0; j< fldListArr.length; j++) {
                if (fldListArr[j][1] > 0 && fldListArr[j][1]>=level) {child[fldListArr[j][0]] = '';}
            }

            if(this.getChildren(child, list, true).length===0) 
            {
                temptree = {LEVEL : level, ID : child.ID, PARENT_ID : child.PARENT_ID, leaf : true};
                this.assignMembers(fldListArr, temptree, child);

                // Push child to tree if filter not enabled or if passes filter condition
                if (!filtEnabled || filtFn(temptree)) { 
                    childList.push(temptree);
                    tree["children"] = childList; // Add leaf to child array of the passed parent (also links arrays)
                    has_nonfiltered_child = true;
                }
            }
            else
            {
                thisExp = (level < expLevel ? true : false);
                temptree = {LEVEL : level, ID : child.ID, PARENT_ID : child.PARENT_ID, expanded : thisExp, leaf : false}; 
                this.assignMembers(fldListArr, temptree, child);

                // Push to children array now, but we will Pop it back later if this record and all children fail the filter condition
                childList.push(temptree);
                tree["children"] = childList;  // Add node to child array of passed parent (also links arrays)

                // Recursively create tree structure for the child since children exist.
                if (!this.createTreeStructure(temptree, child, list, level+1, expLevel, fldListArr, hasTopRoot, filterOpts).has_nonfiltered_child) {
                    // If child items are all fitlered, but node passes filter test then  load this node as leaf instead of node (unless specified otherwise)
                    if (!filtEnabled || filtFn(temptree)) {
                        tree.children[tree.children.length-1].leaf = filtNodesAsLeafs;
                        tree.children[tree.children.length-1].expanded = false;
                        tree.children[tree.children.length-1].expandable = false;  // disallow expand all children are filtered 
                        has_nonfiltered_child = true;

                    } else {
                        tree.children.pop();    // If HAS_NONFILTERED_CHILD = false, then pop() per above
                    }
                } else {
                    has_nonfiltered_child = true;
                }

            }
        }

        result.push(tree);   // DON'T NEED TO DO THIS UNTIL DONE WITH FINAL ITERATION
        return {result: result, has_nonfiltered_child: has_nonfiltered_child};

    },

    assignMembers: function(fldListArr, treeObj, child) {
        for (var i=0; i< fldListArr.length; i++) {
        	  if (fldListArr[i][0]  !== 'ID' && fldListArr[i][0] !== 'PARENT_ID') {
               treeObj[fldListArr[i][0]] = child[fldListArr[i][0]];
            }
        }
    },

    getChildren: function(root, list, firstOnly) {
        var i=0, ln = list.length, result = [];
        for(i=0; i<ln;i++)
        {
            if(root.ID===list[i].PARENT_ID)
            {
                result.push(list[i]);
                if (firstOnly) {return result;} // Only checking if single child exists so abort upon first detection
            }
        }
        return result;
    }

/**********END TREESTORE GENERATION CODE****************************************************************************************/

   , getGridCompByItemId: function(myItemId) {
    	// Using this function to search entire project for provided itemID should only be used for Prototyping purposes
    	// For production always create controller reference to the itemId and use getter.  Example:  me.getMmsumm2();
    	var i, myItem, grids;
      grids = Ext.ComponentQuery.query('touchtreegrid');  // Get all TouchTreeGrid instancds for this project and loop until found
      for (i=0; i<grids.length; i++) {
         if (grids[i].getItemId() === myItemId) {
            myItem = grids[i];
            break;
         }
      }

      if (Ext.isEmpty(myItem)) {
         Ext.Msg.alert('ItemId: ' + myItemId + ' not defined!');
         console.log('ItemId: ' + myItemId + ' not defined for any touchtreegrid instance!');
      }

      return myItem;
    }
});
