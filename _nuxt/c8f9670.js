(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{447:function(t,e,n){"use strict";n.r(e);n(14),n(5),n(4),n(2),n(6),n(7);var r=n(0),o=(n(1),n(102),n(20),n(51),n(22),n(71),n(16),n(70),n(12),n(25),n(446),n(28),n(3),n(37)),l=n.n(o),c=n(69),d=n(461),f=n(299),h=n(462),y=n(468),m=n(459),_=n.n(m);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w={props:{drilldowns:{default:function(){return["recipient_country_or_region"]}},setFields:{default:function(){return{reporting_organisation:[],aid_type:[],finance_type:[],flow_type:[],transaction_type:["2"],sector_category:[],sector:[],recipient_country_or_region:["AF"],year:[(new Date).getFullYear()-1]}}},summary:{default:"sector_category"},displayAs:{default:"barChart"},currency:{default:"usd"},pageSize:{default:10},clickable:{default:!1},autoReload:{default:!0},barChartHeight:{default:"400px"},showNumberResults:{default:!0},orderBy:{default:null},customise:{default:!0},pageName:{default:null}},data:function(){return{privateDisplayAs:this.displayAs,privatePageSize:this.pageSize,request:null,showFilters:!1,cells:[],total:0,isBusy:!0,selectedRegion:null,startedLoading:!1,maxPageSize:1048576,rollupBy:null,rollupValues:[],pageSizeOptions:[{value:10,text:10},{value:20,text:20},{value:50,text:50},{value:100,text:100},{value:500,text:500},{value:1e3,text:1e3},{value:null,text:"All"}],currentPage:1,totalRows:0,sortBy:null,sortDesc:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({customQuery:function(){var t={drilldowns:this.drilldownsForQuery,filters:this.fieldsForQuery,displayAs:this.displayAs_};return"usd"!=this.currency&&(t.currency=this.currency),10!=this.pageSize&&(t.pageSize=this.pageSize),t},displayAs_:{get:function(){return"data-custom"==this.pageName?this.displayAs:this.privateDisplayAs},set:function(t){"data-custom"==this.pageName?this.$emit("update:displayAs",t):this.privateDisplayAs=t}},pageSize_:{get:function(){return"data-custom"==this.pageName?this.pageSize:this.privatePageSize},set:function(t){"data-custom"==this.pageName?this.$emit("update:pageSize",t):this.privatePageSize=t}},fieldsObj:function(){return Object.entries(this.fields).reduce((function(summary,t){return summary[t[0]]=t[1].reduce((function(t,e){return t[e.code]=e.name,t}),{}),summary}),{})},localeSensitiveDrilldowns:function(){var t=this;return this.drilldowns.reduce((function(summary,e){return["activity.title","activity.description"].includes(e)?summary.push("".concat(e,"_").concat(t.lang)):summary.push(e),summary}),[])},drilldownsForQuery:function(){return this.drilldowns.join(";")},fieldsForQuery:function(){return Object.entries(this.setFields).reduce((function(summary,t){return t[1].length>0&&summary.push("".concat(t[0],":").concat(t[1].join(","))),summary}),[]).sort().join(";")},selectedDrilldownPath:function(){var t=this.drilldowns.join("");return"reporting_organisation"==t?"data-reporting-organisation-code":"recipient_country_or_region"==t?"data-recipient-country-or-region-code":"sector_category"==t?"data-sector-category-code":void 0},iatiIdentifierSlotName:function(){return"cell(activity.iati_identifier)"},clickableDrilldownSlotName:function(){if(1==this.drilldowns.length&&1==this.clickable)return"cell(".concat(this.drilldowns[0],")")},optionsToBeSelected:function(){return 0==this.startedLoading&&0==this.autoReload},barChartDatasets:function(){var t=this;return this.rollupBy?this.rollupValues.map((function(e,i){return{field:"value_".concat(t.currency,".sum_").concat(e.join("-")),label:"".concat(t.$t("dataDashboards.amount")," (").concat(t.selectedCurrencyLabel,"): ").concat(t.getRollupLabel(t.rollupBy,e)),backgroundColor:t.getBackgroundColour(t.rollupBy,e.join("-"),i,t.rollupValues.length)}})):[{field:"value_".concat(this.currency,".sum"),label:"".concat(this.$t("dataDashboards.amount")," (").concat(this.selectedCurrencyLabel,")"),backgroundColor:"#06DBE4"}]},displayOptions:function(){return'["provider_organisation","receiver_organisation","transaction_type.code"]'==JSON.stringify(this.drilldowns)?[{value:"barChart",text:"Bar Chart",icon:"chart-simple"},{value:"table",text:"Table",icon:"table"},{value:"sankey",text:"Sankey",icon:"bars-staggered"}]:this.drilldowns.length>1?[{value:"table",text:"Table",icon:"table"}]:"recipient_country_or_region"===this.drilldowns[0]?[{value:"map",text:"Map",icon:"map"},{value:"barChart",text:"Bar Chart",icon:"chart-simple"},{value:"table",text:"Table",icon:"table"}]:[{value:"barChart",text:"Bar Chart",icon:"chart-simple"},{value:"table",text:"Table",icon:"table"}]},lang:function(){return this.$i18n.locale},selectedCurrencyLabel:function(){return this.$t("dataDashboards.currencies")[this.currency]},tableFields:function(){var t=this,e=this.drilldowns.map((function(e){return{key:e,label:t.availableDrilldowns[e],sortable:!0}}));return this.rollupBy?e.concat(this.rollupValues.map((function(e){return{key:"value_".concat(t.currency,".sum_").concat(e.join("-")),label:"".concat(t.$t("dataDashboards.amount")," (").concat(t.selectedCurrencyLabel,"): ").concat(t.getRollupLabel(t.rollupBy,e)),formatter:t.numberFormatter,thClass:"text-right",tdClass:"text-right",sortable:!0}}))):e.concat({key:"value_".concat(this.currency,".sum"),label:"".concat(this.$t("dataDashboards.amount")," (").concat(this.selectedCurrencyLabel,")"),formatter:this.numberFormatter,thClass:"text-right",tdClass:"text-right",sortable:!0})},cuts:function(){var t=Object.entries(this.setFields).reduce((function(summary,t){if(t[1].length>0){if("transaction_type"==t[0]&&3==t[1].length)return summary;if(["year","quarter","calendar_year_and_quarter"].includes(t[0])){var e=t[1].map((function(t){return'"'.concat(t,'"')}));summary.push("".concat(t[0],":").concat(e.join(";")))}else if(t[0].includes(".")){var n=t[1].map((function(t){return'"'.concat(t.replaceAll("__SEMICOLON__",";"),'"')}));summary.push("".concat(t[0],":").concat(n.join(";")))}else{var r=t[1].map((function(t){return'"'.concat(t.replaceAll("__SEMICOLON__",";"),'"')}));summary.push("".concat(t[0],".code:").concat(r.join(";")))}}return summary}),[]).join("|");return""!=t?"&cut=".concat(t):""},rollups:function(){return null!=this.rollupBy?"&rollup=".concat(this.rollupBy,":").concat(JSON.stringify(this.rollupValues)):""},summaryURL:function(){return"".concat(this.$config.baseURL,"/babbage/cubes/iatiline/aggregate/?drilldown=").concat(this.localeSensitiveDrilldowns.join("|"),"&order=value_").concat(this.currency,".sum:desc").concat(this.cuts,"&aggregates=value_").concat(this.currency,".sum").concat(this.rollups)},JSONSummaryURL:function(){var t=null!=this.pageSize_?this.pageSize_:this.maxPageSize;return"".concat(this.summaryURL,"&pagesize=").concat(t,"&page=").concat(this.currentPage)},granularURL:function(){var t=null!=this.pageSize_?this.pageSize_:this.maxPageSize;return"".concat(this.$config.baseURL,"/babbage/cubes/iatiline/facts/?order=value_").concat(this.currency,":desc").concat(this.cuts,"&pagesize=").concat(t)},CSVSummaryURL:function(){return"".concat(this.summaryURL,"&pagesize=").concat(this.maxPageSize,"&format=csv")},XLSXSummaryURL:function(){return"".concat(this.summaryURL,"&pagesize=").concat(this.maxPageSize,"&format=xlsx&lang=").concat(this.lang)}},Object(c.b)(["availableDrilldowns","codelistLookups","fields","fieldNames"])),components:{BarChartComponent:d.default,Map:h.default,Download:f.default,Sankey:y.default},created:function(){var t=this;this.loadDataDebounce=_()((function(){t.loadDataHandler()}),500)},beforeUnmount:function(){this.loadData.cancel()},methods:{getBackgroundColour:function(t,e,i,n){return"budget"==e?"#155366":"#06DBE4"},getRollupLabel:function(t,e){var n=this,r=t.includes(".")?t.split(".")[0]:t;return r in this.fieldsObj?e.map((function(t){return n.fieldsObj[r][t]})).join(", "):e.join(", ")},setRollups:function(){'["3","4","budget"]'==JSON.stringify(this.setFields.transaction_type.sort())?(this.rollupBy="transaction_type.code",this.rollupValues=[["budget"],["3","4"]]):this.setFields.transaction_type&&this.setFields.transaction_type.length>1&&'["3","4"]'!=JSON.stringify(this.setFields.transaction_type.sort())?(this.rollupBy="transaction_type.code",this.rollupValues=this.setFields.transaction_type.map((function(t){return[t]}))):this.setFields.year&&this.setFields.year.length>1?(this.rollupBy="year",this.rollupValues=this.setFields.year.map((function(t){return[t]}))):this.setFields.calendar_year_and_quarter&&this.setFields.calendar_year_and_quarter.length>1?(this.rollupBy="calendar_year_and_quarter",this.rollupValues=this.setFields.calendar_year_and_quarter.map((function(t){return[t]}))):(this.rollupBy=null,this.rollupValues=null)},loadData:function(){return this.setRollups(),this.startedLoading=!0,this.isBusy=!0,this.loadDataDebounce()},numberFormatter:function(t){return null==t&&(t=0),t.toLocaleString(void 0,{maximumFractionDigits:0})},loadDataHandler:function(){var t=this;this.cancel();var e=l.a.CancelToken.source();this.request={cancel:e.cancel},l.a.get(this.JSONSummaryURL,{cancelToken:e.token}).then((function(e){t.totalRows=e.data.total_cell_count,t.cells=e.data.cells.map((function(e){return t.drilldowns.forEach((function(n){if(["activity.title","activity.description"].includes(n))e[n]=e["".concat(n,"_").concat(t.lang)];else{if(n.includes("."))return e;"humanitarian"==n?e[n]=!0===e["".concat(n,".code")]?"Humanitarian":"Development":"multi_country"==n?e[n]=!0===e["".concat(n,".code")]?"Multi-Country":"Not Multi-Country":["recipient_country_or_region","reporting_organisation","reporting_organisation_type","receiver_organisation","provider_organisation"].includes(n)?e[n]=e["".concat(n,".name_").concat(t.lang)]:e[n]=e["".concat(n,".code")]+" - "+e["".concat(n,".name_").concat(t.lang)]}})),e})),t.orderBy&&(t.cells=t.cells.sort((function(a,b){return a[t.orderBy].localeCompare(b[t.orderBy])}))),t.total=t.cells.reduce((function(summary,e){return summary+=e["value_".concat(t.currency,".sum")]}),0),t.isBusy=!1})).catch((function(e){"Cancel"!=e&&t.$bvToast.toast("".concat(e),{title:"Error",autoHideDelay:5e3,append:!0,variant:"danger"})}))},cancel:function(){this.request&&(this.request.cancel(),this.request=null)},selectedDrilldown:function(code){var path=this.selectedDrilldownPath;path&&this.$router.push(this.localePath({name:path,params:{code:code}}))}},watch:{year:function(t,e){this.autoReload&&JSON.stringify(t)!=JSON.stringify(e)&&this.loadData()},pageSize_:function(){this.currentPage=1,this.autoReload&&this.loadData()},"$route.query":function(){this.autoReload&&this.loadData()},currency:function(){this.autoReload&&this.loadData()},selectedRegion:function(code){this.clickable&&this.$router.push(this.localePath({name:"data-recipient-country-or-region-code",params:{code:code}}))},drilldowns:function(t,e){this.autoReload&&JSON.stringify(t)!=JSON.stringify(e)&&this.loadData()},currentPage:function(t,e){this.autoReload&&this.loadData()}},mounted:function(){this.autoReload&&this.loadData()}},D=w,S=(n(475),n(38)),component=Object(S.a)(D,(function(){var t=this,e=t._self._c;return e("div",[t.showNumberResults?e("b-row",[e("b-col",{attrs:{md:"4"}},[e("b-form-group",{attrs:{"label-size":"sm",label:t.$t("dataDashboards.numberOfResults")}},[e("b-input-group",{attrs:{size:"sm"}},[e("b-select",{attrs:{options:t.pageSizeOptions,debounce:"500"},model:{value:t.pageSize_,callback:function(e){t.pageSize_=e},expression:"pageSize_"}})],1)],1)],1),t._v(" "),e("b-col",{staticClass:"text-lg-right",attrs:{lg:"8"}},[e("b-form-group",{attrs:{"label-size":"sm",label:t.$t("dataDashboards.displayOptions")}},[e("b-form-radio-group",{attrs:{"button-variant":"outline-secondary",size:"sm",buttons:""},model:{value:t.displayAs_,callback:function(e){t.displayAs_=e},expression:"displayAs_"}},t._l(t.displayOptions,(function(option){return e("b-form-radio",{key:option.value,attrs:{value:option.value}},[e("font-awesome-icon",{attrs:{icon:["fa",option.icon]}})],1)})),1),t._v(" "),e("Download",{attrs:{label:"XLSX",variant:"outline-secondary",size:"sm",url:t.XLSXSummaryURL,"file-name":"data.xlsx","container-class":"d-inline",icon:["fa","download"]}}),t._v(" "),t.customise?e("b-btn",{attrs:{size:"sm",to:t.localePath({path:"/data/custom/",query:t.customQuery})}},[t._v(t._s(t.$t("dataDashboards.customise"))+" "),e("font-awesome-icon",{attrs:{icon:["fa","wand-magic-sparkles"]}})],1):t._e()],1)],1)],1):t._e(),t._v(" "),e("b-row",[e("b-col",[0==t.isBusy?[0==t.cells.length?e("b-row",[e("b-col",[e("b-alert",{attrs:{show:"",variant:"warning"}},[t._v("\n              "+t._s(t.$t("dataDashboards.noResults"))+"\n            ")])],1)],1):e("b-row",["map"==t.displayAs_?e("b-col",[e("Map",{attrs:{currency:t.currency,data:t.cells,total:t.total,selectedRegion:t.selectedRegion,datasets:t.barChartDatasets,clickable:t.clickable},on:{"update:selectedRegion":function(e){t.selectedRegion=e},"update:selected-region":function(e){t.selectedRegion=e}}})],1):t._e(),t._v(" "),"barChart"==t.displayAs_?e("b-col",[e("bar-chart-component",{attrs:{currency:t.currency,cells:t.cells,drilldown:t.drilldowns[0],datasets:t.barChartDatasets,height:t.barChartHeight,clickable:t.clickable,selectedDrilldown:t.selectedDrilldown},on:{"update:selectedDrilldown":function(e){t.selectedDrilldown=e},"update:selected-drilldown":function(e){t.selectedDrilldown=e}}})],1):t._e(),t._v(" "),"table"==t.displayAs_?e("b-col",[e("b-table",{attrs:{responsive:"",small:"",items:t.cells,fields:t.tableFields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:t.iatiIdentifierSlotName,fn:function(data){return[e("a",{attrs:{href:"https://d-portal.org/savi/?aid=".concat(data.item["activity.iati_identifier"]),rel:"noopener noreferrer",target:"_blank"}},[t._v(t._s(data.item["activity.iati_identifier"]))])]}},{key:t.clickableDrilldownSlotName,fn:function(data){return[e("nuxt-link",{attrs:{to:t.localePath({name:t.selectedDrilldownPath,params:{code:data.item["".concat(t.drilldowns[0],".code")]}})}},[t._v(t._s(data.item["".concat(t.drilldowns[0],".name_").concat(t.lang)]))])]}}],null,!0)}),t._v(" "),e("p",{staticClass:"text-muted font-italic"},[t._v(t._s(t.$t("dataDashboards.totalNumberOfResults"))+": "+t._s(t.totalRows.toLocaleString(void 0,{maximumFractionDigits:0})))]),t._v(" "),e("b-pagination",{attrs:{align:"fill","total-rows":t.totalRows,"per-page":t.pageSize_},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e(),t._v(" "),"sankey"==t.displayAs_?e("b-col",[e("Sankey",{attrs:{data:t.cells,from:"provider_organisation.name_".concat(t.lang),to:"receiver_organisation.name_".concat(t.lang),flow1:"value_".concat(t.currency,".sum_1"),flow3:"value_".concat(t.currency,".sum_3"),flow:"value_".concat(t.currency,".sum")}})],1):t._e()],1)]:t.optionsToBeSelected?[e("div",{attrs:{lass:"text-center"}},[e("b-alert",{attrs:{show:"",variant:"info"}},[t._v("\n            "+t._s(t.$t("dataDashboards.selectSomeOptions"))+"\n          ")])],1)]:[e("div",{staticClass:"text-center"},[e("b-spinner",{attrs:{variant:"secondary"}})],1)]],2)],1)],1)}),[],!1,null,"5e81be64",null);e.default=component.exports;installComponents(component,{Download:n(299).default,Map:n(462).default,BarChartComponent:n(461).default,Sankey:n(468).default})},458:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("190d6c5a",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n(458)},465:function(t,e,n){var r=n(58)(!1);r.push([t.i,'canvas[data-v-4111b9cf]{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.sankey[data-v-4111b9cf]{font-family:"Avenir",Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;height:400px}',""]),t.exports=r},468:function(t,e,n){"use strict";n.r(e);n(1),n(51),n(5);var r=n(445),o=n(471),l={props:{data:{default:function(){return[]}},from:{default:"provider_organisation.name_en"},to:{default:"receiver_organisation.name_en"},flow1:{default:"value_usd.sum_1"},flow3:{default:"value_usd.sum_3"},flow:{default:"value_usd.sum"}},computed:{chartData:function(){var t=this;return this.data.reduce((function(summary,e){return[0,void 0].includes(e[t.flow1])||summary.push({from:e[t.from],to:e[t.to],flow:e[t.flow1],_type:"incoming"}),[0,void 0].includes(e[t.flow3])||summary.push({from:e[t.from],to:e[t.to],flow:e[t.flow3],_type:"outgoing"}),[0,void 0].includes(e[t.flow])||summary.push({from:e[t.from],to:e[t.to],flow:e[t.flow],_type:"outgoing"}),summary}),[])},colours:function(){var t=["#6e40aa","#6849b9","#6153c7","#585fd2","#4e6cda","#4479df","#3988e1","#2f96e0","#26a5db","#1fb3d3","#1bc1c8","#19cdbb","#1bd9ac","#20e29d","#28ea8d","#34f07e","#44f470","#56f665","#6bf75c","#81f558","#98f357","#aff05b"];return this.chartData.reduce((function(summary,e){return"incoming"==e._type||e.from in summary||(summary[e.from]=t[Object.keys(summary).length]),summary}),{})}},mounted:function(){var t=this;r.e.register(o.b,o.a);var e=this.$refs.chart.getContext("2d"),n=function(e){return t.colours[e]||"#155366"};new r.e(e,{type:"sankey",data:{datasets:[{data:this.chartData,borderWidth:2,borderColor:"black",colorFrom:function(t){return n(t.dataset.data[t.dataIndex].from)},colorTo:function(t){return n(t.dataset.data[t.dataIndex].to)}}]},options:{maintainAspectRatio:!1}})}},c=(n(464),n(38)),component=Object(c.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"sankey"},[t("canvas",{ref:"chart",attrs:{id:"chart"}})])}),[],!1,null,"4111b9cf",null);e.default=component.exports},472:function(t,e,n){var content=n(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("8cffeda8",content,!0,{sourceMap:!1})},475:function(t,e,n){"use strict";n(472)},476:function(t,e,n){var r=n(58)(!1);r.push([t.i,".table[data-v-5e81be64]{word-break:normal}",""]),t.exports=r}}]);