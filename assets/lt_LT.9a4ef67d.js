import{iV as p,N as l}from"./vendor.c414a8c9.js";function m(t,a){for(var r=0;r<a.length;r++){const e=a[r];if(typeof e!="string"&&!Array.isArray(e)){for(const i in e)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(e,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>e[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var n,u,d,k,o={exports:{}};n=o,u=o.exports,d=function(t,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default={_decimalSeparator:",",_thousandSeparator:" ",_date_millisecond:"mm::ss SSS",_date_second:"HH:mm:ss",_date_minute:"HH:mm",_date_hour:"HH:mm",_date_day:"yyyy-MM-dd",_date_week:"ww",_date_month:"MMM",_date_year:"yyyy",_duration_millisecond:"SSS",_duration_second:"ss",_duration_minute:"mm",_duration_hour:"hh",_duration_day:"dd",_duration_week:"ww",_duration_month:"MM",_duration_year:"yyyy",_era_ad:"m.e.",_era_bc:"p.m.e.",A:"R",P:"V",AM:"ryto",PM:"vakaro","A.M.":"ryto","P.M.":"vakaro",January:"sausio",February:"vasario",March:"kovo",April:"baland\u017Eio",May:"gegu\u017E\u0117s",June:"bir\u017Eelio",July:"liepos",August:"rugpj\u016B\u010Dio",September:"rugs\u0117jo",October:"spalio",November:"lapkri\u010Dio",December:"gruod\u017Eio",Jan:"sau.",Feb:"vas.",Mar:"kov.",Apr:"bal.","May(short)":"geg.",Jun:"bir.",Jul:"lie.",Aug:"rgp.",Sep:"rgs.",Oct:"spa.",Nov:"lap.",Dec:"gruo.",Sunday:"sekmadienis",Monday:"pirmadienis",Tuesday:"antradienis",Wednesday:"tre\u010Diadienis",Thursday:"ketvirtadienis",Friday:"penktadienis",Saturday:"\u0161e\u0161tadienis",Sun:"sekm.",Mon:"pirm.",Tue:"antr.",Wed:"tre\u010D.",Thu:"ketv.",Fri:"penk.",Sat:"\u0161e\u0161t.",_dateOrd:function(r){return"-a(s)"},"Zoom Out":"Rodyti visk\u0105",Play:"Paleisti",Stop:"Sustabdyti",Legend:"Legenda","Click, tap or press ENTER to toggle":"Spragtelkite, palieskite arba spauskite ENTER, kad perjungtum\u0117te",Loading:"Kraunama",Home:"Prad\u017Eia",Chart:"Grafikas","Serial chart":"Serijinis grafikas","X/Y chart":"X/Y grafikas","Pie chart":"Pyrago tipo grafikas","Gauge chart":"Daviklio tipo grafikas","Radar chart":"Radaro tipo grafikas","Sankey diagram":"Sankey diagrama","Chord diagram":"Chord diagrama","Flow diagram":"Flow diagrama","TreeMap chart":"TreeMap grafikas",Series:"Serija","Candlestick Series":'"Candlestick" tipo grafiko serija',"Column Series":"Stulpelinio grafiko serija","Line Series":"Linijinio grafiko serija","Pie Slice Series":"Pyrago tipo serija","X/Y Series":"X/Y serija",Map:"\u017Dem\u0117lapis","Press ENTER to zoom in":"Spauskite ENTER, kad pritrauktum\u0117te vaizd\u0105","Press ENTER to zoom out":"Spauskite ENTER, kad atitolintum\u0117te vaizd\u0105","Use arrow keys to zoom in and out":"Naudokit\u0117s roykl\u0117mis vaizdo pritraukimui ar atitolinimui","Use plus and minus keys on your keyboard to zoom in and out":"Spauskite pliuso arba minuso klavi\u0161us ant klaviat\u016Bros, kad pritrautum\u0117te arba atitolintum\u0117te vaizd\u0105",Export:"Eksportuoti",Image:"Paveiksliukas",Data:"Duomenys",Print:"Spausdinti","Click, tap or press ENTER to open":"Spragtelkite arba spauskite ENTER, kad atidarytum\u0117te","Click, tap or press ENTER to print.":"Spragtelkite arba spauskite ENTER, kad spausdintum\u0117te.","Click, tap or press ENTER to export as %1.":"Spragtelkite arba spauskite ENTER, kad eksportuotum\u0117te kaip %1.",'To save the image, right-click this link and choose "Save picture as..."':'Kad i\u0161saugotum\u0117te paveiksliuk\u0105, spauskite de\u0161in\u012F pel\u0117s klavi\u0161\u0105 ir pasirinkite "I\u0161saugoti, kaip paveiksliuk\u0105..."',"(Press ESC to close this message)":"(Spauskite ESC, kad u\u017Edarytum\u0117te \u0161\u012F prane\u0161im\u0105)","Image Export Complete":"Paveiksliuko eksportas baigtas","Export operation took longer than expected. Something might have gone wrong.":"Eksportas u\u017Etruko ilgiau negu tur\u0117t\u0173. Grei\u010Diausiai \u012Fvyko klaida.","Saved from":"I\u0161saugota i\u0161",PNG:"",JPG:"",GIF:"",SVG:"",PDF:"",JSON:"",CSV:"",XLSX:"","Use TAB to select grip buttons or left and right arrows to change selection":"Spauskite TAB klavi\u0161\u0105, kad pasirinktum\u0117te \u017Eymeklius, arba kair\u0117/de\u0161in\u0117 klavi\u0161us, kad pakeistum\u0117te pasirinkim\u0105","Use left and right arrows to move selection":"Naudokit\u0117s klavi\u0161ais kair\u0117/de\u0161in\u0117, kad pajudintum\u0117te pasirinkim\u0105","Use left and right arrows to move left selection":"Naudokit\u0117s klavi\u0161ais kair\u0117/de\u0161in\u0117, kad pajudintum\u0117te kair\u012F \u017Eymekl\u012F","Use left and right arrows to move right selection":"Naudokit\u0117s klavi\u0161ais kair\u0117/de\u0161in\u0117, kad pajudintum\u0117te de\u0161in\u012F \u017Eymekl\u012F","Use TAB select grip buttons or up and down arrows to change selection":"Spauskite TAB klavi\u0161\u0105, kad pasirinktum\u0117te \u017Eymeklius, arba auk\u0161tyn/\u017Eemyn klavi\u0161us, kad pakeistum\u0117te pasirinkim\u0105","Use up and down arrows to move selection":"Naudokit\u0117s klavi\u0161ais auk\u0161tyn/\u017Eemyn, kad pajudintum\u0117te pasirinkim\u0105","Use up and down arrows to move lower selection":"Naudokit\u0117s klavi\u0161ais auk\u0161tyn/\u017Eemyn, kad pajudintum\u0117te apatin\u012F \u017Eymekl\u012F","Use up and down arrows to move upper selection":"Naudokit\u0117s klavi\u0161ais auk\u0161tyn/\u017Eemyn, kad pajudintum\u0117te vir\u0161utin\u012F \u017Eymekl\u012F","From %1 to %2":"Nuo %1 iki %2","From %1":"Nuo %1","To %1":"Iki %1","No parser available for file: %1":"Failui %1 neturime tinkamo de\u0161ifruotojo","Error parsing file: %1":"Skaitant fail\u0105 %1 \u012Fvyko klaida","Unable to load file: %1":"Nepavyko u\u017Ekrauti failo %1","Invalid date":"Klaidinga data"}},(k=d(p,u))!==void 0&&(n.exports=k);const y=m({__proto__:null,default:l(o.exports)},[o.exports]);export{y as l};
