TouchTreeGrid and CalendarPicker
================================
(Touch 2.1, 2.2, 2.3, 2.4)

TouchTreeGrid is an extremely versatile and easy to implement Sencha Touch custom 
component that supports Tree Grids, Standard Grids and traditional Accordion view layouts
(all by the same component).  Column sorting and custom data renderings such as comma
formatting, currency, percents and custom colors for negative vs. positive values are included.
TouchTreeGrid utilizes Sencha’s Ext.dataview.List component and Disclosure events are
supported for leafs and optionally for category rows.   

CalendarPicker component utilizes TouchTreeGrid to provide incredible flexibility for date 
selection and calendar display on Phones and Tablets.  Calendars can be implemented with
just a few configurations in overlay panels or traditional containers.  International 
Calendars are supported with 44 different languages included in the download.  Calendar is 
constructed using #months backward to #months forward configurations.  Many features
exist including:  collapsible months for rapid single select, range select in single
calendar popup, or multi-select random dates in single popup.  Specific dates can be
disabled from selection.  Customizable styling exists for holidays, weekends, selected
days, disabled days and custom days.  Custom filters can be
easily applied to only display specific months highlighting important upcoming dates.  
Day planner support is partially implemented and will be forthcoming.  

TouchTreeGrid and CalendarPicker were developed entirely within Sencha Architect designer product and
can also be used without Architect.  Architect components are provided for import into
your toolbox (TouchTreeGrid.xdc, CalendarPicker.xdc).

This software can be downloaded at <a href="https://github.com/swluken/TouchTreeGrid">https://github.com/swluken/TouchTreeGrid</a>

Forum thread for TouchTreeGrid:  http://www.sencha.com/forum/showthread.php?259616-TouchTreeGrid-component
Forum thread for CalendarPicker:  http://www.sencha.com/forum/showthread.php?270677-Touch-CalendarPicker-Component

Refer to "TouchTreeGrid - Documentation.pdf" (page 1) for version details associated with each of the project directories included in the download:

 - <b>TTG_Slider_2.4</b> (slide navigation example that includes most updated version of TouchTreeGrid using Sencha Touch v2.4)
 <div style="color:red;">
   - Most current TouchTreeGrid Source Code:  ./TTG_Slider_2_4/app/view/TouchTreeGrid.js
   - Most current Architect component: ./ArchitectComponents/Architect 3.1.0 Build 1943/TouchTreeGrid.xdc
 </div>   
   
 - <b>MenuEx</b> (Simplified example of how to utilize new Menu component included in Touch 2.3 for various implementations and using TouchTreeGrid for left/right menu items)
 - <b>TouchTreeGrid_FreezeColumn</b> (Freeze Column with horizontal scrolling columns example simulates EXTJS 4.2 Kitchen Sink Big Data grid example...refer to TouchTreeGrid_FreezeColumn.pdf for additional documentation)
 - <b>CalendarPicker</b> (Full set of Calendar Picker examples)
 - <b>CalendarPicer_Basic</b> (Basic example of Calendar Pickers used for date selection)
 - <b>TouchTreeGrid_Advanced_22</b> (Original Tab Panel version of Examples implemented for Touch 2.2)
 - <b>TouchTreeGrid_Advanced_21</b> (Original Tab Panel version of Examples implemented for Touch 2.1)
 - <b>TouchTreeGrid_Basic_22</b> (Basic TreeGrid example for Touch 2.2)
 - <b>TouchTreeGrid_Basic_21</b> (Basic TreeGrid example for Touch 2.1)
 - <b>DynamicLoadEx2C</b> (Dynamically load Nodes when expanded for large TreeStores)
 

See latest Touch 2.4 examples at:
http://www.gomainerentals.com/Sencha/TTG_Slider_2.4/index.html
   - Test Phone version on your desktop via:
     http://www.gomainerentals.com/Sencha/TTG_Slider_2.4/index.html?deviceType=Phone

See working Touch Calendar Picker Demo at:
http://www.lincolnwaterfrontrentals.com/Sencha/CalendarPicker/app.html

See simplified example of how to utilize TouchTreeGrid for menu options with Touch 2.3 Menu component at:
http://www.lincolnwaterfrontrentals.com/Sencha/MenuEx/app.html

See working Touch 2.3 Freeze Coluumn (i.e. lock column) and Horizontal Scrolling Column examples at (both TreeGrid and Standard Grid examples included):
http://www.lincolnwaterfrontrentals.com/Sencha/TTG_Freeze/app.html

See working Touch 2.2 Tab Panel examples at:
http://www.lincolnwaterfrontrentals.com/Sencha/TouchTreeGrid/app.html

See Example of how to Dynamically load Nodes when expanded for large TreeStores at:
http://www.gomainerentals.com/Sencha/DynamicLoadEx2C/index.html
<br>(further discussion at: http://www.sencha.com/forum/showthread.php?259616-TouchTreeGrid-component&p=1058383&viewfull=1#post1058383)

PLANNED ENHANCEMENTS TO TouchTreeGrid:      
    
   - Column sorting within TreeGrid categories.
   - Multi-column sorting feature
   - Support initially sorted shading feature     
   - Option for single-Accordion select mode to sort currently selected category to top.  
   - Column show/hide/add/update example with accompaning methods
   - More renderer function examples
   - Animated expand/collapse
   - Possible support for editable cells  
   - Possible support for drag/drop
   
PLANNED ENHANCEMENTS TO CalendarPicker:      

   - Auto-generation of re-occuring custom dates with descriptions (i.e. anniverseries, birthdates, meetings, etc)
   - Continued Day Planner support
   - Feature to expand/collapse months using user-defined Function 
   - Horizontal scrolling calendars
   - Optional categorize by Year feature.
   - Soliciting other good ideas to integrate with this component



Getting Started
---------------

Detailed documention included in the download:  "TouchTreeGrid - Documentation.pdf" and "CalenderPicker.pdf"


License
-------

Copyright (c) 2014 Steve Luken. 
This software is free to use (refer to associated MIT.LISCENSE) .

**Don't forget to STAR this repository in GITHUB to be notified for frequent changes !!
