(window.webpackJsonp=window.webpackJsonp||[]).push([[1,10,16,17],{450:function(e,t,r){"use strict";r.r(t);r(14),r(37);var n={data:function(){return{zoom:1.2,center:[45,0],mapControls:{zoomControl:!1,attributionControl:!1,scrollWheelZoom:!1,dragging:!1}}},props:["region-colours","region","region-name","geojson","iso2","selected-region","region-data","currency"],components:{},computed:{options:function(){return{onEachFeature:this.onEachFeatureFunction}},filterRegion:{get:function(){return this.selectedRegion},set:function(e){this.$emit("update:selectedRegion",e)}},onEachFeatureFunction:function(){var e=this;return function(t,r){r.on("mouseover",(function(e){e.target.setStyle({fillOpacity:1})})),r.on("mouseout",(function(t){t.target.setStyle({fillOpacity:e.fillOpacity})})),r.on("click",(function(){e.clickRegion()})),r.bindTooltip("<b>".concat(e.regionName,"</b><br />").concat(e.$t("dataDashboards.amount")," (").concat(e.currency.toUpperCase(),"): ").concat(e.value),{permanent:!1,sticky:!0})}},value:function(){return this.regionData[this.iso2]?this.regionData[this.iso2].value:0},fillOpacity:function(){return this.regionData[this.iso2]?this.regionData[this.iso2].opacity:0},optionsStyle:function(){return{fillColor:this.regionColours||"#ffffff",weight:1,opacity:.5,color:"#bbbbbb",fillOpacity:this.fillOpacity}}},methods:{clickRegion:function(){this.filterRegion=this.iso2}},mounted:function(){}},o=r(38),component=Object(o.a)(n,(function(){var e=this;return(0,e._self._c)("l-geo-json",{ref:"geoJson",attrs:{geojson:e.geojson,options:e.options,"options-style":e.optionsStyle}})}),[],!1,null,null,null);t.default=component.exports},451:function(e,t,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("df2a5d2c",content,!0,{sourceMap:!1})},452:function(e,t,r){var content=r(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("de8d5d8c",content,!0,{sourceMap:!1})},453:function(e,t,r){"use strict";r.r(t);r(5),r(51),r(70),r(6),r(7);var n=r(18),o=r(0),l=(r(2),r(1),r(4),r(60),r(22),r(71),r(102),r(14),r(20),r(16),r(12),r(28),r(3),r(37),r(69)),c=(r(461),r(463)),d=(r(462),r(469));function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={props:{setFields:{default:function(){return{reporting_organisation:[],aid_type:[],finance_type:[],flow_type:[],transaction_type:["3","4"],sector_category:[],sector:[],recipient_country_or_region:["AF"],year:["2020"],calendar_year_and_quarter:[]}}},summary:{default:"sector_category"},currency:{default:"usd"},excludeFilters:{default:function(){return[]}},hideFilters:{default:function(){return["year","calendar_year_and_quarter"]}},horizontal:{default:!0},pageName:{default:"data-recipient-country-or-region-code"},drilldowns:{default:function(){return["sector_category"]}},displayAs:{default:null},pageSize:{default:null},advancedSearchFn:{default:function(){return this.advancedSearch}}},data:function(){return{simpleTransactionTypes:!0,budgetsSpendingOptions:[{value:["budget"],text:this.$t("dataDashboards.budgetsSpending.budgets"),class:"budgets"},{value:["3","4"],text:this.$t("dataDashboards.budgetsSpending.spending"),class:"spending"},{value:["3","4","budget"],text:this.$t("dataDashboards.budgetsSpending.both"),class:"secondary"}],showFilters:!1,isBusy:!0,advancedSearchField:null,advancedSearchFieldLabel:null,advancedSearchItems:[],advancedSearchMembers:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({lang:function(){return this.$i18n.locale},currencyOptions:function(){var e=[{value:"usd",text:"USD"},{value:"eur",text:"EUR"}];return this.setFields_.recipient_country_or_region&&1==this.setFields_.recipient_country_or_region.length?e.push({value:"local_currrency",text:this.$t("dataDashboards.currencies.local_currrency")}):e.push({value:"local_currrency",text:this.$t("dataDashboards.currencies.local_currrency"),disabled:!0}),e},advancedSearchFields:function(){return this.advancedSearchItems.filter((function(e){return e.description})).length>0?["code","name","description"]:["code","name"]},customPage:function(){return this.pageName.includes("data-custom")},specificPage:function(){return this.pageName.includes("-code")},drilldownsForQuery:function(){return this.drilldowns.join(";")},fieldsForQuery:function(){var e=this;return Object.entries(this.setFields_).reduce((function(summary,t){return e.specificPage&&t[0]==e.excludeFilters[0]||t[1].length>0&&summary.push("".concat(t[0],":").concat(t[1].join(","))),summary}),[]).sort().join(";")},fieldsObj:function(){return Object.entries(this.fields).reduce((function(summary,e){return summary[e[0]]=e[1].reduce((function(e,t){return e[t.code]=t.name,e}),{}),summary}),{})},selectedFiltersText:function(){var e=this;return Object.entries(this.setFields_).reduce((function(summary,t){return e.specificPage&&t[0]==e.excludeFilters[0]||t[1].length>0&&(["year","quarter","calendar_year_and_quarter"].includes(t[0])?summary.push({filter:e.getDrilldownName(t[0],t[1].length),values:t[1]}):summary.push({filter:e.getDrilldownName(t[0],t[1].length),values:t[1].map((function(r){return t[0]in e.fieldsObj?e.fieldsObj[t[0]][r]:r}))})),summary}),[]).sort((function(a,b){return a.filter-b.filter}))},setFields_:{get:function(){return this.setFields},set:function(e){this.$emit("update:setFields",e)}},displayAs_:{get:function(){return this.displayAs},set:function(e){this.$emit("update:displayAs",e)}},pageSize_:{get:function(){return this.pageSize},set:function(e){this.$emit("update:pageSize",e)}},_currency:{get:function(){return this.currency},set:function(e){this.$emit("update:currency",e)}}},Object(l.b)(["codelistLookups","fields","availableDrilldowns"])),components:{DataBrowserFilterItem:c.default,AdvancedSearch:d.default},methods:{getDrilldownName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e in this.$t("dataDashboards.availableDrilldowns")?"dataDashboards.availableDrilldowns":"dataDashboards.unavailableDrilldowns";return null===t?this.$t("".concat(r,".").concat(e)):this.$tc("".concat(r,".").concat(e),t)},updateField:function(e,t){this.$set(this.setFields,e,t.sort()),this.$emit("update:setFields",this.setFields)},updateDrilldowns:function(e){this.$emit("update:drilldowns",e)},setCustomPageQuery:function(){var e={drilldowns:this.drilldownsForQuery,filters:this.fieldsForQuery,displayAs:this.displayAs_};"usd"!=this._currency&&(e.currency=this._currency),10!=this.pageSize&&(e.pageSize=this.pageSize),this.$router.push(this.localePath({name:this.pageName,query:e}))},setSpecificPageQuery:function(){var e={};e.filters=this.fieldsForQuery,"usd"!=this._currency&&(e.currency=this._currency),this.$router.push(this.localePath({name:this.pageName,params:{code:this.$route.params.code},query:e}))},setNonSpecificPageQuery:function(){var e={};e.filters=this.fieldsForQuery,"usd"!=this._currency&&(e.currency=this._currency),this.$router.push(this.localePath({name:this.pageName,query:e}))},customiseFromQuery:function(){var e=this;if(Object.keys(this.$route.query).length>0){if(this.$route.query.currency&&(this._currency=this.$route.query.currency),this.customPage&&this.$route.query.drilldowns){var t=this.$route.query.drilldowns.split(";");JSON.stringify(t)!=JSON.stringify(this.drilldowns)&&this.updateDrilldowns(t),this.$route.query.displayAs&&(this.displayAs_=this.$route.query.displayAs),this.$route.query.pageSize&&(this.pageSize_=this.$route.query.pageSize)}if(this.$route.query.filters){var r=this.$route.query.filters.split(";").reduce((function(summary,t){var r=t.split(":"),o=Object(n.a)(r,2),l=o[0],c=o[1];return JSON.stringify(e.setFields[l])!=JSON.stringify(c.split(","))&&e.$set(e.setFields,l,c.split(",")),summary.push(l),summary}),[]);Object.keys(this.setFields).forEach((function(t){r.includes(t)||e.excludeFilters.includes(t)||0!=e.setFields[t].length&&e.$set(e.setFields,t,[])}))}}},advancedSearch:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.$bvModal.show("advanced-search"),this.advancedSearchField=e,this.advancedSearchFieldLabel=t,this.advancedSearchMembers=r}},watch:{"setFields_.recipient_country_or_region":{handler:function(e){1!=e.length&&(this._currency="usd")}},"setFields_.year":{handler:function(e){e.length>0&&this.$set(this.setFields,"calendar_year_and_quarter",[])}},"setFields_.calendar_year_and_quarter":{handler:function(e){e.length>0&&this.$set(this.setFields_,"year",[])}},"$route.query":function(){this.customiseFromQuery()},_currency:{handler:function(){this.customPage?this.setCustomPageQuery():this.specificPage?this.setSpecificPageQuery():this.setNonSpecificPageQuery()}},displayAs_:{handler:function(){this.customPage&&this.setCustomPageQuery()}},pageSize_:{handler:function(){this.customPage&&this.setCustomPageQuery()}},drilldowns:{handler:function(){this.customPage&&this.setCustomPageQuery()}},setFields:{handler:function(){this.customPage?this.setCustomPageQuery():this.specificPage?this.setSpecificPageQuery():this.setNonSpecificPageQuery()},deep:!0}},mounted:function(){this.customiseFromQuery(),['["3","4"]','["budget"]','["3","4","budget"]'].includes(JSON.stringify(this.setFields.transaction_type.sort()))||(this.simpleTransactionTypes=!1),this.$store.dispatch("getCodelists"),this.$emit("update:advancedSearchFn",this.advancedSearch)}},m=h,v=(r(477),r(38)),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",[e.horizontal?t("b-row",[t("b-col",[t("p",{staticClass:"lead"},[e._v(e._s(e.$t("dataDashboards.filtersText")))])])],1):e._e(),e._v(" "),t("b-row",[t("b-col",{attrs:{md:e.horizontal?10:12}},[t("b-form",{attrs:{inline:e.horizontal}},[t("b-form-group",{class:e.horizontal?"mr-4 mt-2":"mt-2",attrs:{label:e.$t("dataDashboards.currency")}},[t("b-form-radio-group",{class:e.horizontal?null:"w-100",attrs:{id:"btn-currency",options:e.currencyOptions,"button-variant":"outline-secondary",name:"radio-btn-outline",stacked:!e.horizontal,buttons:""},model:{value:e._currency,callback:function(t){e._currency=t},expression:"_currency"}})],1),e._v(" "),e.simpleTransactionTypes?[t("b-form-group",{class:e.horizontal?"mr-4 mt-2":"mt-2 mb-0",attrs:{label:e.$t("dataDashboards.budgetsSpending.budgetsOrSpending")}},[t("b-form-radio-group",{class:e.horizontal?null:"w-100",attrs:{size:"md","button-variant":"outline-secondary",stacked:!e.horizontal,buttons:""},model:{value:e.setFields_.transaction_type,callback:function(t){e.$set(e.setFields_,"transaction_type",t)},expression:"setFields_.transaction_type"}},e._l(e.budgetsSpendingOptions,(function(option){return t("b-form-radio",{key:option.text,class:option.class,attrs:{value:option.value}},[e._v("\n                "+e._s(option.text)+"\n              ")])})),1)],1),e._v(" "),e.customPage?t("b-btn",{staticClass:"mt-0 w-100",attrs:{variant:"link",size:"sm"},on:{click:function(t){e.simpleTransactionTypes=!1}}},[e._v(e._s(e.$t("dataDashboards.switchTransactionTypes.toAdvanced")))]):e._e()]:[t("DataBrowserFilterItem",{attrs:{field:"transaction_type",fieldOptions:e.fields.transaction_type,fieldLabel:e.$t("dataDashboards.transactionTypes"),value:e.setFields_.transaction_type,updateField:e.updateField,advancedSearch:e.advancedSearchFn}}),e._v(" "),t("b-btn",{staticClass:"mt-0 w-100",attrs:{variant:"link",size:"sm"},on:{click:function(t){e.simpleTransactionTypes=!0}}},[e._v(e._s(e.$t("dataDashboards.switchTransactionTypes.toSimple")))])],e._v(" "),t("DataBrowserFilterItem",{class:e.horizontal?"mr-4 mt-2":"mt-2",staticStyle:{"min-width":"200px"},attrs:{field:"year",fieldOptions:e.fields.year,fieldLabel:e.$t("dataDashboards.calendarYear"),value:e.setFields_.year,updateField:e.updateField,advancedSearch:e.advancedSearchFn}}),e._v(" "),t("DataBrowserFilterItem",{attrs:{field:"calendar_year_and_quarter",fieldOptions:e.fields.calendar_year_and_quarter,fieldLabel:e.$t("dataDashboards.calendarYearAndQuarter"),value:e.setFields_.calendar_year_and_quarter,updateField:e.updateField,advancedSearch:e.advancedSearchFn,formGroupStyle:"min-width: 200px;",formGroupClass:e.horizontal?"mr-4 mt-2":"mt-2"}})],2)],1),e._v(" "),t("b-col",{class:e.horizontal?"text-right d-flex align-items-end":null,attrs:{md:e.horizontal?2:12}},[t("b-button",{staticClass:"ml-md-auto",attrs:{variant:"secondary",block:!e.horizontal},on:{click:function(t){e.showFilters=!e.showFilters}}},[e._v(e._s(e.$t("dataDashboards.moreFilters"))+" "),t("font-awesome-icon",{attrs:{icon:["fa","gear"]}})],1)],1)],1),e._v(" "),e.selectedFiltersText&&e.horizontal?t("b-row",[t("b-col",[t("hr"),e._v(" "),t("DataBrowserFiltersText",{attrs:{setFields:e.setFields_,excludeFilters:e.excludeFilters}})],1)],1):e._e(),e._v(" "),e.horizontal?t("b-row",[t("b-col",[t("hr")])],1):e._e(),e._v(" "),t("b-modal",{attrs:{title:e.$t("dataDashboards.filters"),"ok-only":"","ok-title":e.$t("dataDashboards.close"),size:"xl"},model:{value:e.showFilters,callback:function(t){e.showFilters=t},expression:"showFilters"}},[t("b-card",{staticClass:"mb-3",attrs:{title:e.$t("dataDashboards.filtersModal.standardTitle")}},[t("b-card-text",[e._v(e._s(e.$t("dataDashboards.filtersModal.standardText")))]),e._v(" "),t("b-row",{staticClass:"p-3"},e._l(Object.keys(e.fields),(function(r){return e.excludeFilters.includes(r)||e.hideFilters.includes(r)?e._e():t("b-col",{key:r,staticClass:"p-2",attrs:{lg:"4"}},[t("DataBrowserFilterItem",{attrs:{field:r,fieldOptions:e.fields[r],fieldLabel:e.$tc("dataDashboards.availableDrilldowns.".concat(r)),updateField:e.updateField,value:e.setFields_[r],advancedSearch:e.advancedSearch}})],1)})),1)],1),e._v(" "),t("b-card",{attrs:{title:e.$t("dataDashboards.filtersModal.specificTitle")}},[t("b-card-text",[e._v(e._s(e.$t("dataDashboards.filtersModal.specificText")))]),e._v(" "),t("b-row",{staticClass:"p-3"},[t("b-col",{staticClass:"p-2",attrs:{lg:"4"}},[t("DataBrowserFilterItem",{attrs:{field:"activity.iati_identifier",fieldLabel:e.availableDrilldowns["activity.iati_identifier"],updateField:e.updateField,value:e.setFields_["activity.iati_identifier"],searchMembers:!0,advancedSearch:e.advancedSearch}})],1),e._v(" "),t("b-col",{staticClass:"p-2",attrs:{lg:"4"}},[t("DataBrowserFilterItem",{attrs:{field:"activity.title_".concat(e.lang),fieldLabel:e.availableDrilldowns["activity.title"],updateField:e.updateField,value:e.setFields_["activity.title_".concat(e.lang)],searchMembers:!0,advancedSearch:e.advancedSearch}})],1),e._v(" "),t("b-col",{staticClass:"p-2",attrs:{lg:"4"}},[t("DataBrowserFilterItem",{attrs:{field:"provider_organisation.name_".concat(e.lang),fieldLabel:e.availableDrilldowns.provider_organisation,updateField:e.updateField,value:e.setFields_["provider_organisation.name_".concat(e.lang)],searchMembers:!0,advancedSearch:e.advancedSearch}})],1),e._v(" "),t("b-col",{staticClass:"p-2",attrs:{lg:"4"}},[t("DataBrowserFilterItem",{attrs:{field:"receiver_organisation.name_".concat(e.lang),fieldLabel:e.availableDrilldowns.receiver_organisation,updateField:e.updateField,value:e.setFields_["receiver_organisation.name_".concat(e.lang)],filterFromOptions:!0,searchMembers:!0,advancedSearch:e.advancedSearch}})],1)],1)],1)],1),e._v(" "),t("AdvancedSearch",{attrs:{field:e.advancedSearchField,fieldLabel:e.advancedSearchFieldLabel,setFields:e.setFields_,searchMembers:e.advancedSearchMembers},on:{"update:setFields":function(t){e.setFields_=t},"update:set-fields":function(t){e.setFields_=t}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DataBrowserFilterItem:r(463).default,DataBrowserFiltersText:r(470).default,AdvancedSearch:r(469).default})},454:function(e,t,r){"use strict";r(451)},455:function(e,t,r){var n=r(58)(!1);n.push([e.i,".bar-chart[data-v-10a72cdf]{width:100%;height:400px}",""]),e.exports=n},456:function(e,t,r){"use strict";r(452)},457:function(e,t,r){var n=r(58)(!1);n.push([e.i,".region-map{height:350px!important;width:100%;background:none}",""]),e.exports=n},460:function(e,t,r){var content=r(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("e649ef00",content,!0,{sourceMap:!1})},461:function(e,t,r){"use strict";r.r(t);r(14),r(42),r(21),r(16);var n=r(449),o=r(445);o.e.register(o.p,o.q,o.i,o.b,o.d,o.k);var l={data:function(){return{isBusy:!0}},props:{cells:{default:function(){return[]}},drilldown:{default:null},currency:{default:"usd"},datasets:{default:function(){return[]}},clickable:{default:!1},height:{default:"400px"},selectedDrilldown:{default:function(){return function(){}}}},components:{Bar:n.a},methods:{handleClick:function(e,t){if(0!=this.clickable&&0!=t.length){t[0]._index;var r=this.cells[t[0]._index];this.selectedDrilldown(r["".concat(this.drilldown,".code")])}}},computed:{valueLabel:function(){return"".concat(this.$t("dataDashboards.amount")," (").concat(this.selectedCurrencyLabel,")")},selectedCurrencyLabel:function(){return this.$t("dataDashboards.currencies")[this.currency]},barChartHeight:function(){return"height: ".concat(this.height,";")},barChartOptions:function(){var e=this;return{onClick:this.handleClick,onHover:function(t,r){0!=e.clickable&&(t.native.target.style.cursor=r[0]?"pointer":"default")},maintainAspectRatio:!1,tooltips:{callbacks:{title:function(t,data){return e.chartData.labels[t[0].index]},label:function(t,data){var r=data.datasets[t.datasetIndex].label,label="".concat(r," (").concat(e.selectedCurrencyLabel,")")||!1;return label&&(label+=": "),label+=t.yLabel.toLocaleString(void 0,{maximumFractionDigits:1,minimumFractionDigits:1}),label}}},scales:{yAxis:{ticks:{beginAtZero:!0,callback:function(e){return e.toLocaleString(void 0,{maximumFractionDigits:0,minimumFractionDigits:0})}},title:{display:!0,text:this.valueLabel}},xAxis:{ticks:{callback:function(e,t,r){var n=this.getLabelForValue(e);return(null==n?void 0:n.length)>=20?n.slice(0,n.length).substring(0,19).trim()+"...":n}}}}}},chartData:function(){var e=this;return{datasets:this.datasets.map((function(t){return{label:t.label,fill:!0,data:e.cells.map((function(e){return e[t.field]})),backgroundColor:t.backgroundColor}})),labels:this.cells.map((function(t){return t[e.drilldown]}))}}}},c=(r(454),r(38)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("Bar",{ref:"barChart",staticClass:"bar-chart",style:e.barChartHeight,attrs:{"chart-data":e.chartData,"chart-options":e.barChartOptions}})],1)}),[],!1,null,"10a72cdf",null);t.default=component.exports},462:function(e,t,r){"use strict";r.r(t);r(16),r(1);var n=r(37),o=r.n(n),l={data:function(){return{zoom:1.5,center:[10,0],regions:[],mapAttribution:'<a href="https://datacatalog.worldbank.org/search/dataset/0038272/World-Bank-Official-Boundaries">Map data</a> &copy; World Bank Group | <a href="https://leafletjs.com/">Leaflet</a>',mapControls:{scrollWheelZoom:!1,touchZoom:!1,attributionControl:!1}}},props:{data:{default:function(){return[]}},total:{default:0},selectedRegion:{default:function(){return[]}},datasets:{default:function(){return[]}},currency:{default:"usd"}},components:{MapFeature:r(450).default},computed:{filterRegion:{get:function(){return this.selectedRegion},set:function(e){this.$emit("update:selectedRegion",e)}},regionData:function(){var e=this;return this.datasets.map((function(t){var r=e.data.reduce((function(e,r){return e+=r[t.field]?r[t.field]:0}),0);return e.data.reduce((function(summary,e){return summary[e["recipient_country_or_region.code"]]={opacity:e[t.field]/r*100,value:null==e[t.field]?"0.00":e[t.field].toLocaleString(void 0,{maximumFractionDigits:2,minimumFractionDigits:2})},summary}),{})}))}},methods:{getGeoJSON:function(){var e=this;o.a.get("/worldbank.geo.json").then((function(t){e.regions=t.data.features.map((function(t){var r=t.properties["NAME_".concat(e.$i18n.locale.toUpperCase())];return{type:"FeatureCollection",name:r,region:r,regionName:r,iso2:"FR"==t.properties.WB_A2?t.properties.WB_A2:t.properties.ISO_A2,features:{type:"Feature",properties:{Region:r},geometry:t.geometry}}}))}))}},mounted:function(){this.getGeoJSON()}},c=(r(456),r(38)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("client-only",[t("l-map",{staticClass:"region-map",attrs:{zoom:e.zoom,center:e.center,options:e.mapControls}},[t("l-control-attribution",{attrs:{position:"bottomright",prefix:e.mapAttribution}}),e._v(" "),t("l-control-layers",{attrs:{position:"topright",collapsed:!1}}),e._v(" "),e._l(e.datasets,(function(r,i){return t("l-layer-group",{key:r.label,ref:r.label,refInFor:!0,attrs:{name:r.label,pane:"overlayPane",dataset:r,layerType:"base",visible:0==i}},e._l(e.regions,(function(n,o){return"-99"!=n.iso2?t("MapFeature",{key:o,attrs:{"region-colours":r.backgroundColor,geojson:n.features,region:n.region,iso2:n.iso2,regionName:n.regionName,selectedRegion:e.filterRegion,regionData:e.regionData[i],currency:e.currency},on:{"update:selectedRegion":function(t){e.filterRegion=t},"update:selected-region":function(t){e.filterRegion=t}}}):e._e()})),1)}))],2)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{MapFeature:r(450).default})},463:function(e,t,r){"use strict";r.r(t);r(12),r(158),r(5),r(4),r(2),r(6),r(3),r(7);var n=r(13),o=r(0),l=(r(39),r(16),r(1),r(51),r(70),r(25),r(446),r(14),r(103),r(37)),c=r.n(l),d=r(459),f=r.n(d),h=r(69);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var v={props:{field:{default:null},fieldLabel:{default:null},fieldOptions:{default:function(){return[]}},updateField:{default:function(){return""}},value:{default:null},advancedSearch:{default:function(){}},searchMembers:{default:!1}},data:function(){return{selectedReportingOrganisationGroup:null,retrievedOptions:[]}},created:function(){var e=this;this.fetchOptionsDebounce=f()((function(t,r){e.fetchOptions(t,r)}),500)},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({noMatchingOptions:function(){return this.searchMembers?this.$t("dataDashboards.exactSearchTerm"):this.$t("dataDashboards.noMatchingOptions")},_fieldOptions:{get:function(){if(this.searchMembers){var e=this.retrievedOptions.map((function(e){return e.code}));return(this.value?this.value.reduce((function(summary,t){if(!e.includes(t)){var r={code:t,name:t.replaceAll("__SEMICOLON__",";"),label:t.replaceAll("__SEMICOLON__",";")};summary.push(r)}return summary}),[]):[]).concat(this.retrievedOptions)}return this.fieldOptions},set:function(e){this.searchMembers&&(this.retrievedOptions=e)}},_value:{get:function(){return this.value},set:function(e){this.updateField(this.field,e)}}},Object(h.b)(["reportingOrganisationGroup"])),methods:{handleReportingOrganisationGroups:function(){this._value=this.selectedReportingOrganisationGroup.items},fetchOptions:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.searchMembers){n.next=2;break}return n.abrupt("return");case 2:if(!["",null].includes(e)){n.next=4;break}return n.abrupt("return");case 4:return t(!0),o=function(){return r.field.startsWith("activity")?"iatiline":r.field.startsWith("provider_organisation")?"provider_organisation":r.field.startsWith("receiver_organisation")?"receiver_organisation":void 0}(),l="".concat(r.$config.baseURL,"/babbage/cubes/").concat(o,"/members/").concat(r.field,"/?order=").concat(r.field,"&cut=").concat(r.field,'~"').concat(e,'"&pagesize=1000'),n.next=10,c.a.get(l).then((function(e){r._fieldOptions=e.data.data.map((function(e){return{code:e[r.field].replaceAll(";","__SEMICOLON__"),name:e[r.field],label:e[r.field]}}))}));case 10:t(!1);case 11:case"end":return n.stop()}}),n)})))()}}},y=v,_=(r(466),r(38)),component=Object(_.a)(y,(function(){var e=this,t=e._self._c;return t("div",[t("b-form-group",{attrs:{label:e.fieldLabel}},[t("b-input-group",{staticClass:"nowrap no-margin"},[t("div",{staticClass:"w-100"},[t("b-form-group",[t("v-select",{staticStyle:{"min-width":"200px"},attrs:{multiple:"",options:e._fieldOptions,reduce:function(e){return e.code}},on:{search:e.fetchOptionsDebounce},scopedSlots:e._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[e._v("\n              "+e._s(e.noMatchingOptions)+"\n            ")]}}]),model:{value:e._value,callback:function(t){e._value=t},expression:"_value"}})],1)],1),e._v(" "),e._value&&e._value.length>0?t("b-input-group-append",[t("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",variant:"outline-secondary",title:e.$t("dataDashboards.clearField")},on:{click:function(t){return e.updateField(e.field,[])}}},[t("font-awesome-icon",{attrs:{icon:["fas","xmark"]}})],1)],1):e._e(),e._v(" "),t("b-input-group-append",[t("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",variant:"outline-secondary",title:e.$t("dataDashboards.advancedSearch")},on:{click:function(t){return e.advancedSearch(e.field,e.fieldLabel,e.searchMembers)}}},[t("font-awesome-icon",{attrs:{icon:["fas","magnifying-glass"]}})],1)],1)],1),e._v(" "),"reporting_organisation"==e.field?[t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.reporting-organisation-group",modifiers:{"reporting-organisation-group":!0}}],attrs:{variant:"link",size:"sm"}},[e._v(e._s(e.$t("dataDashboards.reportingOrganisationGroup.select")))]),e._v(" "),t("b-modal",{attrs:{title:e.$t("dataDashboards.reportingOrganisationGroup.select"),id:"reporting-organisation-group",okTitle:e.$t("dataDashboards.reportingOrganisationGroup.apply"),okDisabled:null==e.selectedReportingOrganisationGroup},on:{ok:e.handleReportingOrganisationGroups}},[t("b-form-group",{attrs:{label:e.$t("dataDashboards.reportingOrganisationGroup.label")}},[t("v-select",{attrs:{placeholder:e.$t("dataDashboards.reportingOrganisationGroup.selectOne"),options:e.reportingOrganisationGroup},model:{value:e.selectedReportingOrganisationGroup,callback:function(t){e.selectedReportingOrganisationGroup=t},expression:"selectedReportingOrganisationGroup"}})],1)],1)]:e._e()],2)],1)}),[],!1,null,"7ffee764",null);t.default=component.exports},466:function(e,t,r){"use strict";r(460)},467:function(e,t,r){var n=r(58)(!1);n.push([e.i,"div.input-group.nowrap[data-v-7ffee764]{flex-wrap:nowrap;width:100%}.no-margin .form-group[data-v-7ffee764]{margin-bottom:0}.btn-outline-secondary[data-v-7ffee764]{border-color:rgba(60,60,60,.26)}",""]),e.exports=n},469:function(e,t,r){"use strict";r.r(t);r(14),r(2),r(1),r(50),r(5),r(6),r(3),r(7);var n=r(13),o=r(0),l=(r(39),r(4),r(60),r(103),r(51),r(16),r(12),r(25),r(446),r(37)),c=r.n(l),d=r(69);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={props:{field:{default:null},fieldLabel:{default:null},searchMembers:{default:!1},setFields:{default:function(){return{}}}},data:function(){return{items:[],perPage:20,currentPage:1,totalRows:0,filter:null,isBusy:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({_setFields:{get:function(){return this.setFields},set:function(e){this.$emit("update:setFields",e)}},values:{get:function(){return this._setFields[this.field]},set:function(e){Array.isArray(e)?this.$set(this._setFields,this.field,e):this.$set(this._setFields,this.field,[e])}},tableFields:function(){return this.items.filter((function(e){return e.description})).length>0?[{key:"code",label:this.$t("dataDashboards.advancedSearchFields.code"),sortable:!0},{key:"name",label:this.$t("dataDashboards.advancedSearchFields.name"),sortable:!0},{key:"description",label:this.$t("dataDashboards.advancedSearchFields.description"),sortable:!0},{key:"select",label:this.$t("dataDashboards.advancedSearchFields.select")}]:this.field&&(this.field.startsWith("provider_organisation")||this.field.startsWith("receiver_organisation")||this.field.startsWith("activity"))?[{key:"name",label:this.$t("dataDashboards.advancedSearchFields.name"),sortable:!0},{key:"select",label:this.$t("dataDashboards.advancedSearchFields.select")}]:[{key:"code",label:this.$t("dataDashboards.advancedSearchFields.code"),sortable:!0},{key:"name",label:this.$t("dataDashboards.advancedSearchFields.name"),sortable:!0},{key:"select",label:this.$t("dataDashboards.advancedSearchFields.select")}]}},Object(d.b)(["fields"])),components:{},methods:{onFiltered:function(e){this.totalRows=e.length},fetchOptions:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!["",null].includes(e)){r.next=3;break}return t._fieldOptions=[],r.abrupt("return");case 3:return t.isBusy=!0,n=function(){return t.field.startsWith("activity")?"iatiline":t.field.startsWith("provider_organisation")?"provider_organisation":t.field.startsWith("receiver_organisation")?"receiver_organisation":void 0}(),o="".concat(t.$config.baseURL,"/babbage/cubes/").concat(n,"/members/").concat(t.field,"/?order=").concat(t.field,"&cut=").concat(t.field,'~"').concat(e,'"&pagesize=1000'),r.next=9,c.a.get(o).then((function(e){t.items=e.data.data.map((function(e){return{code:e[t.field].replaceAll(";","__SEMICOLON__"),name:e[t.field],label:e[t.field]}})),t.totalRows=t.items.length,t.isBusy=!1}));case 9:case"end":return r.stop()}}),r)})))()}},watch:{filter:function(e){this.currentPage=1,this.searchMembers&&(this.fetchOptions(this.filter),this.currentPage=1)},field:function(e){this.items=this.fields[e]?this.fields[e]:[],this.totalRows=this.items.length,this.currentPage=1,this.filter=null}},mounted:function(){}},m=h,v=r(38),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("b-modal",{attrs:{title:e.field?"".concat(e.$t("dataDashboards.advancedSearch")," - ").concat(e.fieldLabel):null,id:"advanced-search","ok-only":"","ok-title":e.$t("dataDashboards.close"),size:"xl"}},[e.items?t("b-row",{staticClass:"mb-3"},[t("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[t("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-cols-sm":!1,"label-cols-md":"3","label-cols-lg":"2","label-align-lg":"right","label-size":"sm","label-for":"filterInput"}},[t("b-input-group",{attrs:{size:"sm"}},[t("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:e.$t("dataDashboards.advancedSearchFilter"),debounce:e.searchMembers?500:null},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),e._v(" "),t("b-input-group-append",[t("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v(e._s(e.$t("dataDashboards.clearField")))])],1)],1)],1)],1),e._v(" "),e.totalRows>e.perPage?t("b-col",{staticClass:"my-1",attrs:{lg:"6"}},[t("b-form-group",{staticClass:"mb-0",attrs:{label:"Page","label-cols-sm":!1,"label-cols-md":"3","label-cols-lg":"2","label-align-lg":"right","label-size":"sm"}},[t("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1):e._e()],1):e._e(),e._v(" "),t("b-table",{attrs:{items:e.items,fields:e.tableFields,"current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,busy:e.isBusy,"show-empty":""},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(select)",fn:function(data){return[t("b-form-checkbox",{attrs:{value:data.item.code,name:"advanced-checkboxes"},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}})]}},{key:"table-busy",fn:function(){return[t("div",{staticClass:"text-center text-secondary my-2"},[t("b-spinner",{staticClass:"align-middle"}),e._v(" "),t("strong",[e._v(e._s(e.$t("dataDashboards.loading")))])],1)]},proxy:!0},{key:"empty",fn:function(r){return[t("p",{staticClass:"text-center text-secondary"},[e._v(e._s(e.$t("dataDashboards.advancedSearchEmptyText")))])]}},{key:"emptyFiltered",fn:function(r){return[t("p",{staticClass:"text-center text-secondary"},[e._v(e._s(e.$t("dataDashboards.advancedSearchEmptyFilteredText")))])]}}])}),e._v(" "),e.totalRows>e.perPage?t("b-form-group",{staticClass:"mb-0",attrs:{label:"Page","label-cols-sm":"1","label-align-lg":"right","label-size":"sm"}},[t("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},470:function(e,t,r){"use strict";r.r(t);r(2),r(1),r(22),r(50),r(5),r(4),r(6),r(3),r(7);var n=r(0),o=(r(102),r(20),r(71),r(51),r(16),r(12),r(25),r(446),r(14),r(69));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={props:{setFields:{default:function(){return{reporting_organisation:[],aid_type:[],finance_type:[],flow_type:[],transaction_type:["3","4"],sector_category:[],sector:[],recipient_country_or_region:["AF"],year:["2020"],calendar_year_and_quarter:[]}}},excludeFilters:{default:function(){return[]}},horizontal:{default:!0},drilldowns:{default:function(){return["sector_category"]}}},data:function(){return{}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({fieldsObj:function(){return Object.entries(this.fields).reduce((function(summary,e){return summary[e[0]]=e[1].reduce((function(e,t){return e[t.code]=t.name,e}),{}),summary}),{})},selectedFiltersText:function(){var e=this;return Object.entries(this.setFields).reduce((function(summary,t){return e.specificPage&&t[0]==e.excludeFilters[0]||t[1].length>0&&(["year","quarter","calendar_year_and_quarter"].includes(t[0])?summary.push({filter:e.getDrilldownName(t[0],t[1].length),values:t[1]}):summary.push({filter:e.getDrilldownName(t[0]),values:t[1].map((function(r){return t[0]in e.fieldsObj?e.fieldsObj[t[0]][r.replaceAll("__SEMICOLON__",";")]:r.replaceAll("__SEMICOLON__",";")}))})),summary}),[]).sort((function(a,b){return a.filter-b.filter}))}},Object(o.b)(["codelistLookups","fields","availableDrilldowns","years","calendar_years_and_quarters"])),components:{},methods:{getDrilldownName:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e in this.$t("dataDashboards.availableDrilldowns")?"dataDashboards.availableDrilldowns":"dataDashboards.unavailableDrilldowns";return null==t?this.$t(r)[e]:this.$tc("".concat(r,".").concat(e),t)}},mounted:function(){}},d=c,f=r(38),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("p",[t("b",[e._v(e._s(e.$t("dataDashboards.selectedFilters")))]),e._v(":\n  "),e._l(e.selectedFiltersText,(function(r,n){return t("span",[n>0?[e._v("; ")]:e._e(),e._v(e._s(r.filter)+": "),t("i",[e._v(e._s(r.values.join(", ")))])],2)}))],2)}),[],!1,null,null,null);t.default=component.exports},473:function(e,t,r){var content=r(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(59).default)("43e4edf6",content,!0,{sourceMap:!1})},477:function(e,t,r){"use strict";r(473)},478:function(e,t,r){var n=r(58)(!1);n.push([e.i,".active.budgets,.budgets:hover{background-color:#155366!important;border-color:#155366!important}.active.spending,.spending:hover{background-color:#06dbe4!important;border-color:#06dbe4!important}",""]),e.exports=n}}]);