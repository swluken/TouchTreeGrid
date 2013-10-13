Ext.define('CalendarPicker.controller.languageMixin', {
    languageCalendarOverrides: function(me, code, language) {
        /* Country translations below extracted from files located in EXTJS 4.2 GPL "locale" directory.
        Please review Sencha's Copyright notice before using translations provided below.

        Copyright (c) 2011-2013 Sencha Inc

        GNU General Public License Usage
        This file may be used under the terms of the GNU General Public License version 3.0 as
        published by the Free Software Foundation and appearing in the file LICENSE included in the
        packaging of this file.

        Please review the following information to ensure the GNU General Public License version 3.0
        requirements will be met: http://www.gnu.org/copyleft/gpl.html.

        If you are unsure which license is appropriate for your use, please contact the sales department
        at http://www.sencha.com/contact.        
        

        Overridable language-specific configs:  
           - startDay=0 defines day of week index within Ext.Date.dayNames to start the week.
             Countries below listed in http://en.wikipedia.org/wiki/Names_of_the_days_of_the_week start on Monday and were updated accordingly
           - weekendIndexArr=[0,6] represents 1st and last index positions of Ext.Date.dayNames that are defined as weekend.
           - monthYearFormat='F Y' used to define format of Month+Year in calendar header
           - longDayFormat='F d, Y' could be used for custom applications, but not currently used in standard calendar examples
           - todayText used in Day Planner examples
           - footerBtnTextOverrides require further language-specific updates for Clear, Expand and Collapse (suggest using useIconsForExpCollapse=true for arrows)
           - monthsToAppendText = 'Append more Months...'
           - monthsToInsertPullText = 'Pull to Insert Months...'
           - monthsToInsertRefreshText = 'Release to Insert Months...',
           - monthsToInsertLastUpdatedText = 'Last Updated:&nbsp;'
           - monthsToInsertLastUpdatedDateFormat = 'm/d/Y h:iA'
           - monthsToInsertLoadedText = 'Loaded.'  (display after pull to insert months)
           - monthsToInsertLoadingText = 'Loading...'  (display while pull to insert months)

        languageStore.js data array mapping to overrides defined below  (code, language):
        [
        	['en', 'English', 'ascii'],
          ['af', 'Afrikaans'],
        	['bg', 'Bulgarian'],
        	['ca', 'Catalonian'],
        	['zh_CN', 'Chinese Simplified'],
        	['zh_TW', 'Chinese Traditional'],
        	['hr', 'Croatian'],
        	['cs', 'Czech'],
        	['da', 'Danish'],
        	['nl', 'Dutch'],
        	['en_AU', 'English (AU)'],   
        	['en_GB', 'English (UK)'],
        	['fa', 'Farsi (Persian)'],
        	['fi', 'Finnish'],
        	['fr_CA', 'France (Canadian)'],
        	['fr', 'France (France)'],
        	['de', 'German'],
        	['el_GR', 'Greek'],
        	['he', 'Hebrew'],
        	['hu', 'Hungarian'],
        	['id', 'Indonesian'],
        	['it', 'Italian'],
        	['ja', 'Japanese'],
        	['ko', 'Korean'],
        	['lv', 'Latvian'],
        	['lt', 'Lithuanian'],
        	['mk', 'Macedonia'],
        	['no_NB', 'Norwegian Bokmål'],
        	['no_NN', 'Norwegian Nynorsk'],
        	['pl', 'Polish'],
        	['pt_BR', 'Portuguese/Brazil'],
        	['pt_PT', 'Portuguese/Portugal'],
        	['ro', 'Romanian'],
        	['ru', 'Russian'],
        	['sr_RS', 'Serbian Cyrillic'],
        	['sr', 'Serbian Latin'],
        	['sk', 'Slovak'],
        	['sl', 'Slovenian'],
        	['es', 'Spanish/Latin American'],
        	['sv_SE', 'Swedish'],
        	['th', 'Thailand'],
        	['tr', 'Turkish'],
        	['ukr', 'Ukrainian'],
        	['vn', 'Vietnamese']
        ]                      
        */

        var footerBtnTextOverrides = {}, 
            todayText = 'Today', 
            monthYearFormat='F Y', 
            longDayFormat='F d, Y', 
            startDay = 0, 
            weekendIndexArr=[0,6],
            monthsToAppendText = 'Append more Months...',
            monthsToInsertPullText = 'Pull to Insert Months...',
            monthsToInsertRefreshText = 'Release to Insert Months...',
            monthsToInsertLastUpdatedText = 'Last Updated:&nbsp;',
            monthsToInsertLastUpdatedDateFormat = 'm/d/Y h:iA',
            monthsToInsertLoadedText = 'Loaded.', 
            monthsToInsertLoadingText = 'Loading...';
        

        Ext.Date.getShortMonthName = function(month) {  // Initialize default function unless overridden below
            return Ext.Date.monthNames[month].substring(0, 3);
        };

        if (code === 'en') {  // English Translations

            Ext.Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";

            Ext.Date.defaultDateFormat = "m/d/Y";    

            footerBtnTextOverrides = {DONE: 'Done', Clear: 'Clear', Cancel: 'Cancel', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Loading...";
            monthsToAppendText = "Append More Months...";
            todayText = "Today";
        }

        if (code === 'af') {  //Afrikaans Translations
            Ext.Date.monthNames = ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"];

            Ext.Date.dayNames = ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };    

            Ext.Date.defaultDateFormat = "d-m-y";    

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Kanselleer', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Besig om te laai...";
            todayText = "Vandag";
        }  

        if (code === 'bg') {  // Bulgarian Translations
            Ext.Date.monthNames = ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"];

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.dayNames = ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 1);
            };    

            Ext.Date.defaultDateFormat = "d.m.y";    

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Отмени', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Зареждане...";
            todayText = "Днес";
            startDay = 1;
        }

        if (code === 'ca') {  // Catalonian Translations
            Ext.Date.monthNames = ["Gener", "Febrer", "Mar&#231;", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Gen: 0,
                Feb: 1,
                Mar: 2,
                Abr: 3,
                Mai: 4,
                Jun: 5,
                Jul: 6,
                Ago: 7,
                Set: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";

            Ext.Date.defaultDateFormat = "d/m/Y";    

            footerBtnTextOverrides = {DONE: 'Acceptar', Clear: 'Clear', Cancel: 'Cancel&#183;lar', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Carregant...";
            todayText = "Avui";
        }



        if (code === 'cs') {  // Czech Translations

            Ext.Date.monthNames = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];

            Ext.Date.shortMonthNames = {
                "Leden": "Led",
                "Únor": "Úno",
                "Březen": "Bře",
                "Duben": "Dub",
                "Květen": "Kvě",
                "Červen": "Čer",
                "Červenec": "Čvc",
                "Srpen": "Srp",
                "Září": "Zář",
                "Říjen": "Říj",
                "Listopad": "Lis",
                "Prosinec": "Pro"
            };

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.shortMonthNames[Ext.Date.monthNames[month]];
            };

            Ext.Date.monthNumbers = {
                "Leden": 0,
                "Únor": 1,
                "Březen": 2,
                "Duben": 3,
                "Květen": 4,
                "Červen": 5,
                "Červenec": 6,
                "Srpen": 7,
                "Září": 8,
                "Říjen": 9,
                "Listopad": 10,
                "Prosinec": 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase()];
            };

            Ext.Date.dayNames = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.defaultDateFormat = "d.m.Y";    

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Storno', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Prosím čekejte...";
            todayText = "Dnes";
            startDay = 1;
        }

        if (code === 'da') {  // Danish Translations
            Ext.Date.monthNames = ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                jan: 0,
                feb: 1,
                mar: 2,
                apr: 3,
                maj: 4,
                jun: 5,
                jul: 6,
                aug: 7,
                sep: 8,
                okt: 9,
                nov: 10,
                dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.defaultDateFormat = "d/m/Y";    

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Fortryd', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Henter...";
            todayText = "I dag";
        }

        if (code === 'de') {  // German Translations

            Ext.Date.monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

            Ext.Date.defaultFormat = 'd.m.Y';

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                "M\u00e4r": 2,
                Apr: 3,
                Mai: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Okt: 9,
                Nov: 10,
                Dez: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Abbrechen', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Lade Daten...";
            todayText = "Heute";
        }

        if (code === 'el_GR') {  // Greek Translations
            Ext.Date.monthNames = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"];

            Ext.Date.shortMonthNames = ["Ιαν", "Φεβ", "Μάρ", "Απρ", "Μάι", "Ιού", "Ιού", "Αύγ", "Σεπ", "Οκτ", "Νοέ", "Δεκ"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.defaultDateFormat = "d/m/Y";    

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Άκυρο', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Μεταφόρτωση δεδομένων...";
            todayText = "Σήμερα";
        }

        if (code === 'en_AU') {  // English (AU) Translations
            Ext.Date.defaultDateFormat = "d/m/Y";
            Ext.Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Cancel', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Loading...";
            todayText = "Today";
        }

        if (code === 'en_GB') {  // English (UK) Translations
            Ext.Date.defaultDateFormat = "d/m/Y";
            Ext.Date.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Cancel', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Loading...";
            todayText = "Today";
        }

        if (code === 'es') {  // Spanish/Latin American Translations
            Ext.Date.monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Ene: 0,
                Feb: 1,
                Mar: 2,
                Abr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Ago: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dic: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

            Ext.Date.getShortDayName = function(day) {
                if (day == 3) return "Mié";
                if (day == 6) return "Sáb";
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.parseCodes.S.s = "(?:st|nd|rd|th)";

            footerBtnTextOverrides = {DONE: 'Aceptar', Clear: 'Clear', Cancel: 'Cancelar', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Cargando...";
            todayText = "Hoy";
            Ext.Date.defaultDateFormat = "d/m/Y";    
        }

        if (code === 'et') {  // Estonian Translations
            Ext.Date.monthNames = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

            // Month names aren't shortened to strictly three letters
            var shortMonthNames = ["Jaan", "Veeb", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"];
            Ext.Date.getShortMonthName = function(month) {
                return shortMonthNames[month];
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];

            // Weekday names are abbreviated to single letter
            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 1);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Katkesta', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Laen...";
            todayText = "Täna";
            Ext.Date.defaultDateFormat = "d.m.Y";    
            startDay = 1;
        }

        if (code === 'fa') {  // Farsi (Persian) Translations
            Ext.Date.monthNames = ["ژانویه", "فوریه", "مارس", "آپریل", "می", "ژوئن", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"];

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.dayNames = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"];

            footerBtnTextOverrides = {DONE: 'تایید', Clear: 'Clear', Cancel: 'بازگشت', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "در حال بارگذاری ...";
            todayText = "امروز";
            Ext.Date.defaultDateFormat = "Y/m/d";
            monthYearFormat='Y F';
        }

        if (code === 'fi') {  // Finnish Translations
            Ext.Date.monthNames = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];

            Ext.Date.getShortMonthName = function(month) {
                //return Ext.Date.monthNames[month].substring(0, 3);
                return (month + 1) + ".";
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                if (name.match(/^(1?\d)\./)) {
                    return -1 + RegExp.$1;
                } else {
                    return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
                }
            };

            Ext.Date.dayNames = ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 2);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Peruuta', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Ladataan...";
            todayText = "Tänään";
            Ext.Date.defaultDateFormat = "j.n.Y";    
        }

        if (code === 'fr') {  // France Translations
            Ext.Date.shortMonthNames = ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.shortMonthNames[month];
            };

            Ext.Date.monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

            Ext.Date.monthNumbers = {
                "Janvier": 0,
                "Janv": 0,
                "Février": 1,
                "Févr": 1,
                "Mars": 2,
                "Avril": 3,
                "Avr": 3,
                "Mai": 4,
                "Juin": 5,
                "Juillet": 6,
                "Juil": 6, 
                "Août": 7,
                "Septembre": 8,
                "Sept": 8,
                "Octobre": 9,
                "Oct": 9,
                "Novembre": 10,
                "Nov": 10,
                "Décembre": 11,
                "Déc": 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[Ext.util.Format.capitalize(name)];
            };

            Ext.Date.dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.parseCodes.S.s = "(?:er)";

            Ext.Date.getSuffix = function() {
                return (this.getDate() == 1) ? "er" : "";
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Annuler', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "En cours de chargement...";
            todayText = "Aujourd'hui";
            Ext.Date.defaultDateFormat = "d/m/Y";    
        }

        if (code === 'fr_CA') {  // France (Canadian) Translations
            Ext.Date.shortMonthNames = ["Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.shortMonthNames[month];
            };

            Ext.Date.monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

            Ext.Date.monthNumbers = {
                "Janvier": 0,
                "Janv": 0,
                "Février": 1,
                "Févr": 1,
                "Mars": 2,
                "Avril": 3,
                "Avr": 3,
                "Mai": 4,
                "Juin": 5,
                "Juillet": 6,
                "Juil": 6, 
                "Août": 7,
                "Septembre": 8,
                "Sept": 8,
                "Octobre": 9,
                "Oct": 9,
                "Novembre": 10,
                "Nov": 10,
                "Décembre": 11,
                "Déc": 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[Ext.util.Format.capitalize(name)];
            };

            Ext.Date.dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Annuler', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "En cours de chargement...";
            todayText = "Aujourd'hui";
            Ext.Date.defaultDateFormat = "d/m/Y";    
        }

        if (code === 'he') {  // Hebrew Translations
            Ext.Date.monthNames = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["א", "ב", "ג", "ד", "ה", "ו", "ש"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'ביטול', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "...טוען";
            todayText = "היום";
            Ext.Date.defaultDateFormat = "d/m/Y";    
        }

        if (code === 'hr') {  // Croatian Translations
            Ext.Date.monthNames = ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'U redu', Clear: 'Clear', Cancel: 'Odustani', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Učitavanje...";
            todayText = "Danas";
            Ext.Date.defaultDateFormat = "d.m.Y";    
            startDay = 1;
        }

        if (code === 'hu') {  // Hungarian Translations
            Ext.Date.monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                'Jan': 0,
                'Feb': 1,
                'Már': 2,
                'Ápr': 3,
                'Máj': 4,
                'Jún': 5,
                'Júl': 6,
                'Aug': 7,
                'Sze': 8,
                'Okt': 9,
                'Nov': 10,
                'Dec': 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Mégsem', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Betöltés...";
            todayText = "Mai nap";
            Ext.Date.defaultDateFormat = "Y m d";  
            monthYearFormat='Y F';
            startDay = 1;
        }

        if (code === 'id') {  // Indonesian Translations
            Ext.Date.monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                Mei: 4,
                Jun: 5,
                Jul: 6,
                Agu: 7,
                Sep: 8,
                Okt: 9,
                Nov: 10,
                Des: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Batal', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Pemuatan...";
            todayText = "Hari ini";
            Ext.Date.defaultDateFormat = "d/m/Y";    
        }

        if (code === 'it') {  // Italian Translations
            Ext.Date.monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Gen: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                Mag: 4,
                Giu: 5,
                Lug: 6,
                Ago: 7,
                Set: 8,
                Ott: 9,
                Nov: 10,
                Dic: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Annulla', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Caricamento...";
            todayText = "Oggi";
            Ext.Date.defaultDateFormat = "d/m/Y";    
        }

        if (code === 'ja') {  // Japanese Translations
            Ext.Date.monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

            Ext.Date.getShortMonthName = function(month) {
                return "" + (month + 1);
            };

            Ext.Date.monthNumbers = {
                "1": 0,
                "2": 1,
                "3": 2,
                "4": 3,
                "5": 4,
                "6": 5,
                "7": 6,
                "8": 7,
                "9": 8,
                "10": 9,
                "11": 10,
                "12": 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, name.length - 1)];
                // or simply parseInt(name.substring(0, name.length - 1)) - 1
            };

            Ext.Date.dayNames = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 1); // just remove "曜日" suffix
            };

            Ext.Date.formatCodes.a = "(this.getHours() < 12 ? '午前' : '午後')";
            Ext.Date.formatCodes.A = "(this.getHours() < 12 ? '午前' : '午後')"; // no case difference

            parseCodes = {
                g: 1,
                c: "if (/(午前)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
            + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
                s: "(午前|午後)",
                calcAtEnd: true
            };

            Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'キャンセル', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "読み込み中...";
            todayText = "今日";
            Ext.Date.defaultDateFormat = "Y/m/d";  

            longDayFormat = 'Y\u5e74m\u6708d\u65e5';
            monthYearFormat = 'Y\u5e74m\u6708';
        }

        if (code === 'ko') {  // Korean Translations
            Ext.Date.monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

            Ext.Date.dayNames = ["일", "월", "화", "수", "목", "금", "토"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day];
            };

            footerBtnTextOverrides = {DONE: '확인', Clear: 'Clear', Cancel: '취소', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "로딩중...";
            todayText = "오늘";
            Ext.Date.defaultDateFormat = "m/d/Y";    
        }

        if (code === 'lt') {  // Lithuanian Translations
            Ext.Date.monthNames = ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"];

            Ext.Date.getShortMonthName = function(month) {
                // Uncommons
                if (month == 7) return "Rgp";
                if (month == 8) return "Rgs";
                if (month == 11) return "Grd";
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Sau: 0,
                Vas: 1,
                Kov: 2,
                Bal: 3,
                Geg: 4,
                Bir: 5,
                Lie: 6,
                Rgp: 7,
                Rgs: 8,
                Spa: 9,
                Lap: 10,
                Grd: 11
            };

            Ext.Date.getMonthNumber = function(name) {

                // Some uncommons
                if (name == "Rugpjūtis") return 7;
                if (name == "Rugsėjis") return 8;
                if (name == "Gruodis") return 11;
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"];

            Ext.Date.parseCodes.S.s = "(?:as|as|as|as)";

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'Gerai', Clear: 'Clear', Cancel: 'Atsisakyti', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Kraunasi...";
            todayText = "Šiandien";
            Ext.Date.defaultDateFormat = "Y-m-d";    
            monthYearFormat='Y F';
            startDay = 1;

        }

        if (code === 'lv') {  // Latvian Translations
            Ext.Date.monthNames = ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"];

            Ext.Date.dayNames = ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'Labi', Clear: 'Clear', Cancel: 'Atcelt', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Ielādē...";
            todayText = "Šodiena";
            Ext.Date.defaultDateFormat = "d.m.Y";    
            startDay = 1;
        }

        if (code === 'mk') {  // Macedonia Translations
            Ext.Date.monthNames = ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"];

            Ext.Date.dayNames = ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'Потврди', Clear: 'Clear', Cancel: 'Поништи', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Вчитувам...";
            todayText = "Денеска";
            Ext.Date.defaultDateFormat = "d.m.Y";    
            startDay = 1;
        }

        if (code === 'nl') {  // Dutch Translations
            Ext.Date.monthNames = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];

            Ext.Date.getShortMonthName = function(month) {
                if (month == 2) {
                    return 'mrt';
                }
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                jan: 0,
                feb: 1,
                mrt: 2,
                apr: 3,
                mei: 4,
                jun: 5,
                jul: 6,
                aug: 7,
                sep: 8,
                okt: 9,
                nov: 10,
                dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                var sname = name.substring(0, 3).toLowerCase();
                if (sname == 'maa') {
                    return 2;
                }
                return Ext.Date.monthNumbers[sname];
            };

            Ext.Date.dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            Ext.Date.parseCodes.S.s = "(?:ste|e)";

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Annuleren', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Bezig met laden...";
            todayText = "Vandaag";
            Ext.Date.defaultDateFormat = "j-m-Y";    
        }

        if (code === 'no_NB') {  // Norwegian Translations (Bokmål: no-NB)
            Ext.Date.monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                Mai: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Okt: 9,
                Nov: 10,
                Des: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Avbryt', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Laster...";
            todayText = "I dag";
            Ext.Date.defaultDateFormat = "d.m.Y";    
        }

        if (code === 'no-NN') {  // Norwegian translation (Nynorsk: no-NN)
            Ext.Date.monthNames = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                Mai: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Okt: 9,
                Nov: 10,
                Des: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Søndag", "Måndag", "Tysdag", "Onsdag", "Torsdag", "Fredag", "Laurdag"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Avbryt', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Lastar...";
            todayText = "I dag";
            Ext.Date.defaultDateFormat = "d.m.Y";    
        }

        if (code === 'pl') {  // Polish Translations
            Ext.Date.monthNames = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Sty: 0,
                Lut: 1,
                Mar: 2,
                Kwi: 3,
                Maj: 4,
                Cze: 5,
                Lip: 6,
                Sie: 7,
                Wrz: 8,
                Paź: 9,
                Lis: 10,
                Gru: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

            Ext.Date.getShortDayName = function(day) {
                switch (day) {
                    case 0:
                    return 'ndz';
                    case 1:
                    return 'pon';
                    case 2:
                    return 'wt';
                    case 3:
                    return 'śr';
                    case 4:
                    return 'czw';
                    case 5:
                    return 'pt';
                    case 6:
                    return 'sob';
                    default:
                    return '';
                }
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Anuluj', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Wczytywanie danych...";
            todayText = "Dzisiaj";
            Ext.Date.defaultDateFormat = "Y-m-d";    
            monthYearFormat='Y F';
            startDay = 1;

        }

        if (code === 'pt_BR') {  // Portuguese/Brazil Translations
            Ext.Date.monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Fev: 1,
                Mar: 2,
                Abr: 3,
                Mai: 4,
                Jun: 5,
                Jul: 6,
                Ago: 7,
                Set: 8,
                Out: 9,
                Nov: 10,
                Dez: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Cancelar', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Carregando...";
            todayText = "Hoje";
            Ext.Date.defaultDateFormat = "d/m/Y";    
        }

        if (code === 'pt_PT') {  // Portuguese/Portugal (pt_PT) Translations
            Ext.Date.monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Jan: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                May: 4,
                Jun: 5,
                Jul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Nov: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Cancelar', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "A carregar...";
            todayText = "Hoje";
            Ext.Date.defaultDateFormat = "Y/m/d";   
            monthYearFormat='Y F';

        }

        if (code === 'ro') {  // Romanian Translations
            Ext.Date.monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                Ian: 0,
                Feb: 1,
                Mar: 2,
                Apr: 3,
                Mai: 4,
                Iun: 5,
                Iul: 6,
                Aug: 7,
                Sep: 8,
                Oct: 9,
                Noi: 10,
                Dec: 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Renunță', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Încărcare...";
            todayText = "Astăzi";
            Ext.Date.defaultDateFormat = "d.m.Y";    
        }

        if (code === 'ru') {  // Russian Translations
            Ext.Date.monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

            Ext.Date.shortMonthNames = ["Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.shortMonthNames[month];
            };

            Ext.Date.monthNumbers = {
                'Янв': 0,
                'Фев': 1,
                'Мар': 2,
                'Апр': 3,
                'Май': 4,
                'Июн': 5,
                'Июл': 6,
                'Авг': 7,
                'Сен': 8,
                'Окт': 9,
                'Ноя': 10,
                'Дек': 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Отмена', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Загрузка...";
            todayText = "Сегодня";
            Ext.Date.defaultDateFormat = "d.m.Y";    
            startDay = 1;
        }

        if (code === 'sk') {  // Slovak Translations
            Ext.Date.monthNames = ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"];

            Ext.Date.dayNames = ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Zrušiť', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Nahrávam...";
            todayText = "Dnes";
            Ext.Date.defaultDateFormat = "d.m.Y";    
            startDay = 1;
        }

        if (code === 'sl') {  // Slovenian Translations
            Ext.Date.monthNames = ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"];

            Ext.Date.dayNames = ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'V redu', Clear: 'Clear', Cancel: 'Prekliči', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Nalagam...";
            todayText = "Danes";
            Ext.Date.defaultDateFormat = "d.m.Y";    
            startDay = 1;
        }

        if (code === 'sr') {  // Serbian Latin Translations
            Ext.Date.monthNames = ["Januar", "Februar", "Mart", "April", "Мај", "Jun", "Јul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"];

            Ext.Date.dayNames = ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'U redu', Clear: 'Clear', Cancel: 'Odustani', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Učitavam...";
            todayText = "Danas";
            Ext.Date.defaultDateFormat = "d.m.Y";    
            startDay = 1;
        }

        if (code === 'sr_RS') {  // Serbian Cyrillic Translations
            Ext.Date.monthNames = ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"];

            Ext.Date.dayNames = ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'У реду', Clear: 'Clear', Cancel: 'Одустани', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Учитавам...";
            todayText = "Данас";
            Ext.Date.defaultDateFormat = "d.m.Y";    
        }

        if (code === 'sv_SE') {  // Swedish Translations
            Ext.Date.monthNames = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];

            Ext.Date.dayNames = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Avbryt', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Laddar...";
            todayText = "Idag";
            Ext.Date.defaultDateFormat = "Y-m-d";    
            monthYearFormat='Y F';

        }

        if (code === 'th') {  // Thailand Translations
            Ext.Date.monthNames = ["รยกรร’โฌร", "ยกรรลธร’ร“ลธร‘ยนลพรฌ", "รร•ยนร’โฌร", "ร รรร’รยน", "ลธรรร€ร’โฌร", "รร”ยถรยนร’รยน", "ยกรยกยฏร’โฌร", "รร”ยงรร’โฌร", "ยกร‘ยนรร’รยน", "ยตรร…ร’โฌร", "ลธรรลกร”ยกร’รยน", "ลพร‘ยนรร’โฌร"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                "รโฌ": 0,
                "ยกลธ": 1,
                "รร•โฌ": 2,
                "ร รร": 3,
                "ลธโฌ": 4,
                "รร”ร": 5,
                "ยกโฌ": 6,
                "รโฌ": 7,
                "ยกร": 8,
                "ยตโฌ": 9,
                "ลธร": 10,
                "ลพโฌ": 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["รร’ยทร”ยตรรฌ", "ลกร‘ยนยทรรฌ", "รร‘ยงโฌร’ร", "ลธรร—ลพ", "ลธรรร‘รยบลฝร•", "รรยกรรฌ", "ร รร’รรฌ"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'ยตยกร…ยง', Clear: 'Clear', Cancel: 'รยกร ร…ร”ยก', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "ยกร“ร…ร‘ยงรขรร…ลฝ...";
            todayText = "รร‘ยนยนร•รฉ";
            Ext.Date.defaultDateFormat = "m/d/Y";    
        }

        if (code === 'tr') {  // Turkish Translations
            Ext.Date.monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

            Ext.Date.getShortMonthName = function(month) {
                return Ext.Date.monthNames[month].substring(0, 3);
            };

            Ext.Date.monthNumbers = {
                "Ocak": 0,
                "Şubat": 1,
                "Mart": 2,
                "Nisan": 3,
                "Mayıs": 4,
                "Haziran": 5,
                "Temmuz": 6,
                "Ağustos": 7,
                "Eylül": 8,
                "Ekim": 9,
                "Kasım": 10,
                "Aralık": 11
            };

            Ext.Date.getMonthNumber = function(name) {
                return Ext.Date.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
            };

            Ext.Date.dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

            Ext.Date.shortDayNames = ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cmt"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.shortDayNames[day];
            };

            footerBtnTextOverrides = {DONE: 'Tamam', Clear: 'Clear', Cancel: 'İptal', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Yükleniyor...";
            todayText = "Bugün";
            Ext.Date.defaultDateFormat = "d/m/Y";    
            startDay = 1;

        }

        if (code === 'ukr') {  // Ukrainian Translations
            Ext.Date.monthNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

            Ext.Date.dayNames = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(0, 3);
            };

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Відміна', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Завантаження...";
            todayText = "Сьогодні";
            Ext.Date.defaultDateFormat = "d.m.Y";        
        }

        if (code === 'vn') {  // Vietnamese Translations
            Ext.Date.monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];

            Ext.Date.dayNames = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];

            Ext.Date.monthNumbers = {
                "Tháng 1": 0,
                "Tháng 2": 1,
                "Tháng 3": 2,
                "Tháng 4": 3,
                "Tháng 5": 4,
                "Tháng 6": 5,
                "Tháng 7": 6,
                "Tháng 8": 7,
                "Tháng 9": 8,
                "Tháng 10": 9,
                "Tháng 11": 10,
                "Tháng 12": 11,
            };

            Ext.Date.getShortMonthName = function(month){
                return Ext.Date.monthNames[month];
            };

            Ext.Date.getMonthNumber = function(name){
                return Ext.Date.monthNumbers[name];    
            };

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day];
            }

            footerBtnTextOverrides = {DONE: 'Đồng ý', Clear: 'Clear', Cancel: 'Hủy bỏ', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Đang tải...";
            todayText = "Hôm nay";
            Ext.Date.defaultDateFormat = "d/m/Y";        
        }

        if (code === 'zh_CN') {  // Simplified Chinese Translations
            Ext.Date.monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

            Ext.Date.dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(Ext.Date.dayNames[day].length-1, Ext.Date.dayNames[day].length);
            };

            Ext.Date.formatCodes.a = "(this.getHours() < 12 ? '上午' : '下午')";
            Ext.Date.formatCodes.A = "(this.getHours() < 12 ? '上午' : '下午')";

            parseCodes = {
                g: 1,
                c: "if (/(上午)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
            + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
                s: "(上午|下午)",
                calcAtEnd: true
            };

            Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;

            footerBtnTextOverrides = {DONE: '确定', Clear: 'Clear', Cancel: '取消', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "讀取中...";
            todayText = "今天";
            Ext.Date.defaultDateFormat = "y年m月d日";    
            longDayFormat = 'Y\u5e74m\u6708d\u65e5';
            monthYearFormat ='Y\u5e74m\u6708';  
            startDay = 1;

        }

        if (code === 'zh_TW') {  // Traditional Chinese Translations
            Ext.Date.monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

            Ext.Date.dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

            Ext.Date.getShortDayName = function(day) {
                return Ext.Date.dayNames[day].substring(Ext.Date.dayNames[day].length-1, Ext.Date.dayNames[day].length);
            };

            Ext.Date.formatCodes.a = "(this.getHours() < 12 ? '上午' : '下午')";
            Ext.Date.formatCodes.A = "(this.getHours() < 12 ? '上午' : '下午')";

            parseCodes = {
                g: 1,
                c: "if (/(上午)/i.test(results[{0}])) {\n"
                + "if (!h || h == 12) { h = 0; }\n"
            + "} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
                s: "(上午|下午)",
                calcAtEnd: true
            };

            Ext.Date.parseCodes.a = Ext.Date.parseCodes.A = parseCodes;

            footerBtnTextOverrides = {DONE: '确定', Clear: 'Clear', Cancel: '取消', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "讀取中...";
            todayText = "今天";
            Ext.Date.defaultDateFormat = "Y/m/d";    

            longDayFormat = 'Y\u5e74m\u6708d\u65e5';
            monthYearFormat = 'Y\u5e74m\u6708';   
            startDay = 1;

        }

        if (code === 'XX') {  // XXXX Translations

            footerBtnTextOverrides = {DONE: 'OK', Clear: 'Clear', Cancel: 'Cancel', Expand: 'Expand', Collapse: 'Collapse'};
            monthsToInsertLoadingText = "Loading...";
            todayText = "Today";
            Ext.Date.defaultDateFormat = "d/m/Y";        
        }
        // Update CalendarPicker specific configs to Language Selector component for access by each implementation
        var languageSelect = this.getLanguageSelect();
        languageSelect.footerBtnTextOverrides = footerBtnTextOverrides;
        languageSelect.todayText = todayText;
        languageSelect.monthYearFormat = monthYearFormat;
        languageSelect.longDayFormat = longDayFormat;
        languageSelect.startDay = startDay;
        languageSelect.weekendIndexArr = weekendIndexArr;
        
        languageSelect.monthsToInsertPullText              = monthsToInsertPullText;
        languageSelect.monthsToInsertRefreshText           = monthsToInsertRefreshText;
        languageSelect.monthsToInsertLastUpdatedText       = monthsToInsertLastUpdatedText;
        languageSelect.monthsToInsertLastUpdatedDateFormat = monthsToInsertLastUpdatedDateFormat;
        languageSelect.monthsToInsertLoadedText            = monthsToInsertLoadedText;
        languageSelect.monthsToInsertLoadingText           = monthsToInsertLoadingText;
        languageSelect.monthsToAppendText                  = monthsToAppendText;
}
});