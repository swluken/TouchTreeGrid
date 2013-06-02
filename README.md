TouchTreeGrid
=============

TouchTreeGrid is an extremely versatile and easy to implement Sencha Touch 2.1x, 2.2+ custom 
component that supports Tree Grids, Standard Grids and traditional Accordion view layouts
(all by the same component).  Column sorting and custom data renderings such as comma
formatting, currency, percents and custom colors for negative vs. positive values are included.
TouchTreeGrid utilizes Sencha’s Ext.dataview.List component and Disclosure events are
supported for leafs and optionally for category rows. 

TouchTreeGrid was developed entirely within Sencha Architect designer product and
can also be used without Architect.  An Architect component is provided for import into
your toolbox (TouchTreeGrid.xdc - Sencha Architect Version: 2.2.2 Build: 971).
Using Sencha Architect you can implement this component
for new grid implementations very rapidly.  Both basic and advanced examples are included
in the download.   Scrolling and overall functionality was found to be very fast for a
larger data example containing +3000 rows and 3 category levels .  

This software can be downloaded at <a href="https://github.com/swluken/TouchTreeGrid">https://github.com/swluken/TouchTreeGrid</a>
  

<div>See working Touch 2.2 Demo at:</div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/TouchTreeGrid/app.html?deviceType=Phone">TouchTreeGrid (Phone)</a></div>
<div>(Test orientation changes by rotating phone from Portrait to Landscape ... or resizing browser window)   </div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/TouchTreeGrid/app.html?deviceType=Tablet">TouchTreeGrid (Tablet)</a></div>
<div>(Census tab configured unique for tablets ... rotate Portrait vs. Landscape for column changes ... or resize browser window)  </div> 

<div>See 2.2 Sample code run under 2.1 framework: (includes Example:  Lists => Grouper#2)</div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/TouchTreeGrid/app21.html?deviceType=Phone">TouchTreeGrid (Phone)</a></div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/TouchTreeGrid/app21.html?deviceType=Tablet">TouchTreeGrid (Tablet)</a></div>

Click on the <?> icon at top of each screen for further explanation.

Requires webkit-enabled browser:  Chrome, Safari, or actual mobile device.

<div><b>Feeback appreciated at:</b> </div> http://www.sencha.com/forum/showthread.php?259616-TouchTreeGrid-component

Planned Enhancements (pending feedback)
---------------
   - Support initially sorted shading feature    
   - Support optional column CLS references in lieu of Styles. Example:

     cls, sortedCls, categCls, categSortedCls, headerCls, headerSortedCls 
     instead of (or in addition to) existing style equivalents:
     style, styleSorted, categStyle, categStyleSorted, headerStyle, headerStyleSorted
            
   - Treestore filtering example
   - Column sorting within TreeGrid categories.
   - Multi-column sorting feature
   - Support for Row Renderer function that will specify different CSS selector based on data attribute
   - Example supporting check  boxes, icons/pix and other components within cells
   - Column show/hide/add example with accompaning methods
   - More renderer function examples
   - Easy config options to auto-add buttons to footer to "auto-display" different sets of columns 
    (or provide methods for custom buttons)
   - Possible support for locked columns   
   - Seeking interest on supporting config option to use Ext.dataview vs. Ext.dataview.List

Getting Started
---------------

Detailed documention included in the download:  "TouchTreeGrid - Documentation.pdf"


License
-------

Copyright (c) 2013 Steve Luken. 
This software is free to use (refer to associated MIT.LISCENSE) .

**Don't forget to STAR this repository in GITHUB to be notified for frequent changes !!
