this.kubio=this.kubio||{},this.kubio.adminArea=function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=653)}({1:function(t,e){!function(){t.exports=this.wp.i18n}()},2:function(t,e){!function(){t.exports=this.lodash}()},35:function(t,e){!function(){t.exports=this.wp.url}()},59:function(t,e){!function(){t.exports=this.jQuery}()},653:function(t,e,n){"use strict";n.r(e),n.d(e,"initDemoImport",(function(){return T}));var i=n(2);let a={},o={};const s="NOT_INSTALLED",r=()=>{var t;return(null===(t=o)||void 0===t?void 0:t.plugins)||[]},l=t=>{const e=Object(i.find)(a.demos,{slug:t});o=e},d=()=>a.ajax_nonce,c=t=>{var e;return(null===(e=a.texts)||void 0===e?void 0:e[t])||""},u=t=>a.plugins_states[t]||s;var p=n(59),f=n(1),b=n(35);const g=t=>new Promise(((e,n)=>{const o=t instanceof window.FormData?t:new window.FormData;o.append("nonce",d()),Object(i.each)(t,((t,e)=>o.append(e,t))),p.ajax({method:"POST",url:Object(b.addQueryArgs)(a.ajax_url,{nonce:d(),action:o.get("action")}),data:o,contentType:!1,processData:!1}).done((t=>{if(!1===t.success){var i,a;const e=(null==t||null===(i=t.data)||void 0===i?void 0:i.error_message)||(null==t||null===(a=t.data)||void 0===a?void 0:a.error);n(e)}else e(t)})).fail((t=>{n(`${t.status} ( ${t.statusText} ) : ${t.responseText}`)}))})),m=async t=>await g({action:"kubio-demo-site-activate-plugin",slug:t}),h=async t=>{const e=u(t);try{switch(e){case"ACTIVE":return!0;case"INSTALLED":await m(t);break;case s:await(async t=>await g({action:"kubio-demo-site-install-plugin",slug:t}))(t),await m(t)}}catch(t){throw t}},w=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e={action:"kubio-demo-site-import-data",slug:o.slug||0,first_call:!0};try{let n={};do{if(t&&e.first_call?(Object(i.each)(e,((e,n)=>t.append(n,e))),n=await g(t)):n=await g(e),e=Object(i.omit)(e,"first_call"),n.before_import_action?(P(O.PREPARING,x.PROGRESS),e={...e,before_import_action:n.before_import_action}):(P(O.PREPARING,x.DONE),P(O.CONTENT,x.PROGRESS),e=Object(i.omit)(e,"before_import_action")),"finished"===n.status){P(O.CONTENT,x.DONE);break}}while("requires-new-ajax-call"===n.status)}catch(t){C(t)}};let k=0;const v=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const e=p("#kubio-templates-list"),n=p("#kubio-template-installing");if(t){k=window.scrollY,e.hide(),n.css("display","flex").hide().fadeIn(100),n.find("img").attr("src",o.thumb);const t=Object(f.sprintf)(c("importing_template"),o.name);n.find("[data-title]").html(t);const i=r(),s=n.find("[data-plugins]"),l=n.find("[data-plugins-list]");i.length?(s.show(),l.empty(),i.forEach((t=>{const e=(n=t.slug,a.texts.plugins_states[u(n)]);var n;l.append(`<li><span>${t.label}</span><span>${e}</span></li>`)}))):s.hide();const d=!o.is_pro;(t=>{const e=p("#kubio-template-installing"),n=e.find("#import-button"),i=e.find("[data-available-pro-only]"),a=e.find("[data-check-pro-features]");t?(i.addClass("hidden"),a.addClass("hidden"),n.attr("data-start-import",""),n.show()):(n.removeAttr("data-start-import"),n.hide(),i.removeClass("hidden"),a.removeClass("hidden"))})(!(!a.kubio_pro_active&&!d))}else n.css("display","flex").hide(),p("#kubio-templates-list").show(),setTimeout((()=>window.scrollTo(0,k)),5)},y=async()=>{p(".kubio-admin-page-header-start-editing").addClass("hidden");const t=p("#kubio-template-installing"),e=t.find("[data-info]"),n=t.find("[data-progress]"),i=t.find("[data-install-buttons]"),a=t.find("[data-install-success-buttons]"),o=p(".kubio-progress-bar");e.hide(),n.css("display","flex").show(),i.hide(),o.show();try{await(async()=>{try{P(O.PLUGINS,x.PROGRESS);const t=r();for(let e=0;e<t.length;e++){const{slug:n}=t[e];await h(n)}P(O.PLUGINS,x.DONE)}catch(t){C(t)}})(),await w()}catch(t){C()}o.hide(),a.show(),p(".kubio-admin-page-header-start-editing").removeClass("hidden")},_=()=>{p((()=>{!function(){try{const t=new URL(location).searchParams.get("import");if(!t)return;l(t),v(),y()}catch(t){console.error(t)}}(),p(document).on("click","#kubio-templates-list button[data-slug]",(function(){const t=p(this).data("slug");l(t),v()})),p(document).on("click","#kubio-template-installing button[data-cancel-import]",(function(){v(!1)})),p(document).on("click","#kubio-template-installing button[data-start-import]",y),p(document).on("submit","#kubio-import-demo-site",(async t=>{t.preventDefault(),t.stopPropagation();const e=t.target,n=new window.FormData(e);E=!0;const i=p(e).siblings(".kubio-progress-bar");i.show(),p(e).hide();try{await w(n)}catch(t){i.hide();const e=N(t);p("[data-kubio-manual-demo-site-errors]").append(`<div class="kubio-demo-site-manual-import-error">${e}</div>`)}i.hide()}))}))},O={PLUGINS:"plugins",PREPARING:"preparing",CONTENT:"content"},j={plugins:"data-installing-plugins",preparing:"data-preparing-for-import",content:"data-importing-content"},x={INACTIVE:"",PROGRESS:"progress",DONE:"active"},P=(t,e)=>{p(`[data-progress-list] [${j[t]}]`).attr("class",e)};let E=!1;const N=t=>{t=Object(i.castArray)(t);let e="";return t.forEach((t=>e+=`<p>${t}</p>`)),e},S=t=>{if(E)return;const e="[data-importing-errors]";p(e).show(),(t=Object(i.castArray)(t)).forEach((t=>p(`${e} [data-importing-errors-content]`).append(`<p>${t}</p>`)))},C=t=>{throw E||(S(t),S(c("import_stopped")),E=!0),p(".kubio-progress-bar").hide(),p("[data-progress-list] li").attr("class",""),t},T=t=>{a=t,_()},R=p("#upgrade_to_pro_wrapper #kubio-page-builder-activate-license-form");let I=R;const A=p(".notice #kubio-page-builder-activate-license-form");A.length&&(I=A);const D=p("#kubio-page-builder-check-license form");if(D.length&&(I=D),I.length){const G=I.find("input[type=text]"),$=I.parent(),U=$.find("#kubio-page-builder-activate-license-message"),M=$.find(".description"),F=$.find(".spinner-holder");function K(t){const e=jQuery(document.createElement("div")).append(t);return e.find("input,button,script,style").remove(),e.find("body").length?e.find("body").html():e.html()}function Q(){U.hide()}function q(t){V(),U.attr("class","message error-message"),U.html(K(t)),U.show()}function J(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";I.hide(),U.hide(),M.hide(),F.show(),""!==t&&("loader"===t?(F.removeClass("ok"),F.find(".icon .loader").show()):"ok"===t&&F.addClass("ok")),""!==e&&F.find(".message").text(e)}function V(){I.show(),U.show(),M.show(),F.hide()}G.on("keyup change",Q),I.on("submit",(function(t){t.preventDefault(),t.stopPropagation();const e=G.val();e?(Q(),J("loader",Object(f.__)("Loading…","kubio")),I.addClass("disabled"),wp.ajax.send("kubiowp-page-builder-activate",{data:{key:e}}).done((function(t){R.length?(J("loader",Object(f.__)("Installing Kubio PRO…","kubio")),wp.ajax.post("kubiowp-page-builder-maybe-install-pro").done((function(){J("ok",Object(f.__)("Kubio PRO sucessfully installed","kubio"))})).fail((function(t){t.message?q(t.message):q(Object(f.__)("There was an error installing the Kubio PRO plugin","kubio"))}))):J("ok",t||Object(f.__)("Activated successfully","kubio"))})).fail((function(t){V(),I.removeClass("disabled"),q(t.responseJSON.data)}))):q(Object(f.__)("License key is empty","kubio"))})),D.length&&window.wp&&window.wp.ajax&&wp.ajax.send("kubiowp-page-builder-check-license").fail((function(t){I.closest(".notice").removeClass("hidden"),q(K(t.responseJSON.data))}))}const L=p("#adminmenu .toplevel_page_kubio");if(L.length){const Y=window.location.search,z=new URLSearchParams(Y);if("kubio-get-started"===z.get("page")){const B=z.get("tab");null!==B&&(L.find("li.current").removeClass("current"),L.find("a[href*='tab="+B+"']").length?L.find("a[href*='tab="+B+"']").closest("li").addClass("current"):L.find("li.wp-first-item").next().addClass("current"))}L.find("a[href*='tab=pro-upgrade']").length&&L.find("a[href*='tab=pro-upgrade']").closest("li").addClass("li-pro-upgrade")}setTimeout((()=>{const t=p(".kubio-admin-row.get-started-imported");t.addClass("inline"),p(".kubio-admin-page-page-section").eq(0).append(t)}),100)}});
