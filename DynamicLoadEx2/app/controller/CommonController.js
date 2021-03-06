/*
 * File: app/controller/CommonController.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
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

Ext.define('TouchTreeGrid.controller.CommonController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "container#categ": {
                nodeItemTap: 'onContainerNodeItemTap'
            }
        }
    },

    onContainerNodeItemTap: function(container, list, index, target, record, e) {
        var store = list.getStore(),
            node = store.getAt(index),
            i, newNode;


        if (node.isExpanded()) {return;}  // skip if collapsing node

        if (node.hasChildNodes()) {return;}  // child nodes already loaded so skip


        // CAN REPLACE THIS WITH AJAX REQUEST FOR CHILD NODES
        for (i=0; i<5; i++) {
            newNode =
                {
                "leaf" : true,
                "CATEG" : record.get('CATEG') + ' - ' + "Dynamic Leaf "+(i+1).toString()
            };

            //    node.appendChild(newNode);   // APPEARS TO BE BUG WITH THIS METHOD
            node.insertChild(i-1, newNode);
        }


        // NOTE:  to get child nodes to sort under expanded node correctly, you need to maintain
        //        a sort string on the store that would apply to all rows of the store

    }

});