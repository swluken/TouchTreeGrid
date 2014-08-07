Ext.define('TouchTreeGrid.overrides.NodeStore', {
    override: 'Ext.data.NodeStore',

    // Original treeSortFn fails after about 5 levels deep so modified here
    
    treeSortFn: function(node1, node2) {
      
        // If store has unique sort criteria for all rows then this will work with no limitations
        // Note that I utilize custom 'sortFldName' config for each TreeStore which references unique sort column for that treestore
        // This is required in addition to sorter for store which is used to sort each level.
        var sortFldName = node1.stores[0].config.sortFldName;
        if (sortFldName) {
            return (node1.data[sortFldName] < node2.data[sortFldName]) ? -1 : 1;
        }

        
        // Otherwise, modify below logic (taken from Touch source code) based on expected depths and max children per depth
        
        // A shortcut for siblings
        if (node1.parentNode === node2.parentNode) {
            return (node1.data.index < node2.data.index) ? -1 : 1;
        }

        // @NOTE: with the following algorithm we can only go 80 levels deep in the tree   (OVERRIDE: fails after 8 levels with 100 max per level)
        // and each node can contain 10000 direct children max  (OVERRIDE:  modified to 100 max)
        var weight1 = 0,
            weight2 = 0,
            parent1 = node1,
            parent2 = node2;

        while (parent1) {
            weight1 += (Math.pow(10, (parent1.data.depth+0) * -2) * (parent1.data.index+1));   // OVERRIDE: was -4 (10000 per depth)
            parent1 = parent1.parentNode;
        }
        while (parent2) {
            weight2 += (Math.pow(10, (parent2.data.depth+0) * -2) * (parent2.data.index+1));  // OVERRIDE: was -4 (10000 per depth)
            parent2 = parent2.parentNode;
        }

        if (weight1 > weight2) {
            return 1;
        } else if (weight1 < weight2) {
            return -1;
        }
        return (node1.data.index > node2.data.index) ? 1 : -1;
    }
    
});