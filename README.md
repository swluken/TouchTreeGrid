TouchTreeGrid and CalendarPicker
================================

TouchTreeGrid is an extremely versatile and easy to implement Sencha Touch custom 
component that supports Tree Grids, Standard Grids and traditional Accordion view layouts
(all by the same component).  Column sorting and custom data renderings such as comma
formatting, currency, percents and custom colors for negative vs. positive values are included.
TouchTreeGrid utilizes Sencha’s Ext.dataview.List component and Disclosure events are
supported for leafs and optionally for category rows.   

CalendarPicker component utilizes TouchTreeGrid to provide incredible flexibility for date 
selection and calendar display on Phones and Tablets.  Calendars can be implemented with
just a few configurations in overlay panels or traditional containers.  Calendar is 
constructed using #months backward to #months forward configurations.  Many features
exist including:  collapsible months for rapid single select, range select in single
calendar popup, or multi-select random dates in single popup.  Specific dates can be
disabled from selection.  Customizable styling exists for holidays, weekends, selected
days, disabled days and custom days.  Custom filters can be
easily applied to only display specific months highlighting important upcoming dates.  
Day planner support is partially implemented and will be forthcoming.  
Provided examples work for Touch 2.2, 2.3-beta and for IE10/Windows phones.

TouchTreeGrid and CalendarPicker were developed entirely within Sencha Architect designer product and
can also be used without Architect.  Architect components are provided for import into
your toolbox (TouchTreeGrid.xdc, CalendarPicker.xdc - Sencha Architect Version: 2.2.2 Build: 991).
Basic 2.2, Advanced TabPanel 2.2 and Advanced Slide Navigation 2.2 examples are included in the download.

This software can be downloaded at <a href="https://github.com/swluken/TouchTreeGrid">https://github.com/swluken/TouchTreeGrid</a>
  

<div>See working Touch 2.2 Calendar Picker Demo at:</div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/CalenderPicker/appChrome29fix.html?deviceType=Phone">CalenderPicker (Chrome 29 Fix - Phone simulation)</a>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/CalenderPicker/appChrome29fix.html?deviceType=Tablet">CalenderPicker (Chrome 29 Fix - Tablet simulation)</a>
<div>Actual Mobile device and non-Chrome Browser link: www.lincolnwaterfrontrentals.com/Sencha/CalenderPicker/app.html


<div>See working Touch 2.2 Slider Demo at:</div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/TTG_Slider/appChrome29fix.html?deviceType=Phone">CalenderPicker (Chrome 29 Fix - Phone simulation)</a></div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/TTG_Slider/appChrome29fix.html?deviceType=Tablet">CalenderPicker (Chrome 29 Fix - Tablet simulation)</a></div>
<div>Actual Mobile device and non-Chrome Browser: www.lincolnwaterfrontrentals.com/Sencha/TTG_Slider/app.html</div>
<div>(Note: Slide navigation not fixed yet for IE10)</div>


<div>Test TouchTreeGrid_Advanced_22:</div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/TouchTreeGrid/appChrome29fix.html?deviceType=Phone">CalenderPicker (Chrome 29 Fix - Phone simulation)</a></div>
<div><a href="http://www.lincolnwaterfrontrentals.com/Sencha/TouchTreeGrid/appChrome29fix.html?deviceType=Tablet">CalenderPicker (Chrome 29 Fix - Tablet simulation)</a></div>
<div>Actual Mobile device and non-Chrome Browser: www.lincolnwaterfrontrentals.com/Sencha/TouchTreeGrid/app.html</div>
<div>(Note:  some styling corrections required for IE10)</div>


Requires webkit-enabled browser:  Chrome, Safari, or actual mobile device.

<div><b>Feeback appreciated at:</b> </div> http://www.sencha.com/forum/showthread.php?259616-TouchTreeGrid-component

PLANNED ENHANCEMENTS TO TouchTreeGrid:      
    
   - Column sorting within TreeGrid categories.
   - Multi-column sorting feature
   - Support initially sorted shading feature     
   - Option for single-Accordion select mode to sort currently selected category to top.  
   - Column show/hide/add/update example with accompaning methods
   - More renderer function examples
   - Animated expand/collapse
   - Possible support for editable cells  
   - Possible support for locked columns   
   - Possible support for drag/drop
   - Seeking interest on supporting config option to use Ext.dataview.DataView vs. Ext.dataview.List
   
PLANNED ENHANCEMENTS TO CalendarPicker:      

   - More examples including IPhone-style calendar layout    
   - Method+button to allow user to add more months to displayed calendar
   - Auto-generation of re-occuring custom dates with descriptions (i.e. anniverseries, birthdates, meetings, etc)
   - Day Planner support
   - Feature to expand/collapse months using user-defined Function 
   - Horizontal scrolling calendars
   - Speed up Expand All/ Collapse All for large calendars.
   - Optional categorize by Year feature.
   - Soliciting other good ideas to integrate with this component



Getting Started
---------------

Detailed documention included in the download:  "TouchTreeGrid - Documentation.pdf" and "CalenderPicker.pdf"


License
-------

Copyright (c) 2013 Steve Luken. 
This software is free to use (refer to associated MIT.LISCENSE) .

**Don't forget to STAR this repository in GITHUB to be notified for frequent changes !!
