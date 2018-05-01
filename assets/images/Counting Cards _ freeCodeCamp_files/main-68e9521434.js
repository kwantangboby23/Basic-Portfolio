"use strict";var main=window.main||{};main.mapShareKey="map-shares",main.ga=window.ga||function(){},main=function(e,a){var n=a.Mousetrap;return((window.gitter={}).chat={}).options={disableDefaultChat:!0},e.chat={},e.chat.isOpen=!1,e.chat.createHelpChat=function(){throw new Error("Sidecar chat has not initialized")},document.addEventListener("gitter-sidecar-ready",function(a){function t(){e.chat.isOpen||e.chat.mainChat.toggleChat(!0)}function i(){$("#chat-embed-main").addClass("is-collapsed"),document.activeElement.blur()}function o(){var e=$("#chat-embed-main").hasClass("is-collapsed");e?t():i()}e.chat.GitterChat=a.detail.Chat,e.chat.createHelpChat=function(a,n,t){t=a.replace(/([A-Z])/g," $1").replace("Java Script","JavaScript"),$("body").append('<aside id="chat-embed-help" class="gitter-chat-embed is-collapsed" />'),e.chat.helpChat=new e.chat.GitterChat({room:"freecodecamp/"+a,activationElement:!1,targetElement:$("#chat-embed-help")}),$(n).on("click",function(){var a=!$(this).hasClass("active");e.chat.helpChat.toggleChat(a),a&&$(n).addClass("active")});var i=!1;$("#chat-embed-help").on("gitter-chat-toggle",function(e){var a=!!e.originalEvent.detail.state;return i||(i=!0,$("#chat-embed-help > .gitter-chat-embed-action-bar").prepend('<div class="chat-embed-main-title"><span>'+t+"</span></div>")),a?$(n).addClass("active"):$(n).removeClass("active")})},$("body").append('<aside id="chat-embed-main" class="gitter-chat-embed is-collapsed" />'),e.chat.mainChat=new e.chat.GitterChat({room:"freecodecamp/freecodecamp",activationElement:!1,targetElement:$("#chat-embed-main")});var s=!1;$("#chat-embed-main").on("gitter-chat-toggle",function(){return s?null:(s=!0,$("body").hasClass("night")&&$("#chat-embed-main").addClass("night"),$("#chat-embed-main > .gitter-chat-embed-action-bar").prepend('<div class="chat-embed-main-title"><span>Free Code Camp\'s Main Chat</span></div>'),null)}),$("#nav-chat-btn").on("click",function(e){e.ctrlKey||e.metaKey||o(),window.ga("send","event","Nav","clicked","Nav chat opened")}),n.bind("g c",o)}),e}(main,window);var lastCompleted="undefined"!=typeof lastCompleted?lastCompleted:"";main.getMapShares=function(){var e=JSON.parse(localStorage.getItem(main.mapShareKey)||"[]");return e&&Array.isArray(e)||(localStorage.setItem(main.mapShareKey,JSON.stringify([])),e=[]),e},main.setMapShare=function(e){var a=main.getMapShares(),n=!1;return a.forEach(function(a){a===e&&(n=!0)}),n||a.push(e),localStorage.setItem(main.mapShareKey,JSON.stringify(a)),a},$(document).ready(function(){function e(e){$(e).prev().find(".fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down")}function a(e){$(e).prev().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right")}function n(a){$(a).addClass("in").css("height","auto"),e(a)}function t(e){$(e).removeClass("in").css("height","auto"),a(e)}function i(){if(!main.isMapAsideLoad){var e=$('<iframe id = "map-aside-frame" >');e.attr({src:"/map-aside",frameBorder:"0"}),$(".map-aside").append(e),$("body").hasClass("night")&&e.addClass("night"),main.isMapAsideLoad=!0}$(".map-aside").removeClass("is-collapsed")}function o(){$(".map-aside").addClass("is-collapsed"),document.activeElement.blur()}function s(){var e=$(".map-aside").hasClass("is-collapsed");e?i():o()}function d(){C.val(""),C.next().children().removeClass("fa-times").addClass("fa-search"),C.next().removeClass("filled"),$(".map-accordion").find(".hidden").removeClass("hidden"),$("#noneFound").hide()}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"alert-info";return $(".flashMessage").append($("\n      <div class='alert "+a+"'>\n        <button class='close' type='button', data-dismiss='alert'>\n          <span class='ion-close-circled' />\n        </Button>\n        <div>"+e+"</div>\n      </div>\n    "))}function r(){if(!main.userId)return c("You must be logged in to use our themes.");var e=document.getElementById("map-aside-frame"),a=$("body");e&&(e.src=e.src),a.hide();var n=void 0;a.hasClass("night")?(a.removeClass("night"),n="default"):(a.addClass("night"),n="night"),a.fadeIn("100");var t={url:"/api/users/"+main.userId+"/update-theme",type:"POST",data:{theme:n},dataType:"json"};return $.ajax(t).success(function(){return console.log("theme updated successfully")}).fail(function(e){var a=void 0;try{a=JSON.parse(e.responseText).error.message}catch(n){return null}return a?c(a):null})}var l=window.Rx.Observable,h="X-CSRF-Token",p=function(e){jQuery.ajaxPrefilter(function(a,n,t){t.crossDomain||t.setRequestHeader(h,e)})};p($('meta[name="csrf-token"]').attr("content")),$("img").error(function(){$(this).unbind("error").attr("src","https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png")});var m=main.getMapShares();lastCompleted&&m.indexOf(lastCompleted)===-1&&$('div[id="'+lastCompleted+'"]').parent().parent().removeClass("hidden"),$(".map-challenge-block-share").on("click",function(e){e.preventDefault();var a=$(this).children().attr("id"),n=a.replace(/\s/,"%20"),t="undefined"!=typeof window.username?window.username:"",i="https://www.facebook.com/dialog/feed?app_id=1644598365767721&display=page&caption=I%20just%20completed%20the%20"+n+"%20section%20on%20Free%20Code%20Camp%2E&link=http%3A%2F%2Ffreecodecamp%2Ecom%2F"+t+"&redirect_uri=http%3A%2F%2Ffreecodecamp%2Ecom%2Fmap";main.setMapShare(a),window.ga("send","event","Facebook","clicked","Shared on Facebook"),window.location.href=i}),$(".map-collapse").on("show.bs.collapse",function(a){$(this).is(a.target)&&e(this)}),$(".map-collapse").on("hide.bs.collapse",function(e){$(this).is(e.target)&&a(this)}),$.each($(".sr-only"),function(e,a){" Complete"===$(a).text()&&$(a).parents("p").addClass("manip-hidden")}),$.each($(".map-collapse"),function(e,a){$(a).find(".manip-hidden").length===$(a).find("p").length&&(t(a),$(a).prev("h3").addClass("faded"),$(a).prev("h2").addClass("faded"))});var u,f,g=localStorage.getItem("currentDashedName"),v=$("p.padded-ionic-icon a");!g&&$(".sr-only").length&&(v=$(".sr-only")),f=v.filter(function(){return g?$(this).attr("href").match(g):" Complete"===$(this).text()}),f.length&&(f=f[f.length-1],u=$(f).offset().top-380,$("html, body, .map-accordion").scrollTop(u)),String(window.location).match(/\/map$/gi)&&($("body>.flashMessage").find(".alert").css("display","none"),$(".map-fixed-header").css("top","50px"));var C=$("#map-filter"),w=$("#showAll");$("#nav-map-btn").add("#nav-map-btn-sm").on("click",function(e){e.ctrlKey||e.metaKey||s()}),$(".map-aside-action-collapse").on("click",o),w.on("click",function(){var e=w.hasClass("active");return e?($.each($(".map-collapse.in"),function(e,a){t(a)}),w.text("Expand all challenges"),w.removeClass("active")):($.each($('.map-collapse:not(".in")'),function(e,a){n(a)}),w.text("Collapse all challenges"),w.addClass("active"))}),C.on("keyup",function(){if(C.val().length>0){var e=C.val().replace(/ /g,"."),a=new RegExp(e.split("").join(".*"),"i");$(".challenge-title").each(function(e,t){a.test($(t).attr("name"))?(n($(t).closest(".chapterBlock")),n($(t).closest(".certBlock")),$(t).removeClass("hidden")):$(t).addClass("hidden")}),$.each($(".chapterBlock"),function(e,a){$(a).find(".hidden").length===$(a).find("p").length?($(a).addClass("hidden"),$(a).prev("h3").addClass("hidden")):($(a).removeClass("hidden"),$(a).prev("h3").removeClass("hidden"))}),$.each($(".certBlock"),function(e,a){$(a).children("#nested").children("h3.hidden").length===$(a).children("#nested").children("h3").length?$(a).prev("h2").addClass("hidden"):$(a).prev("h2").removeClass("hidden")}),C.next().children().hasClass("fa-search")&&(C.next().children().removeClass("fa-search").addClass("fa-times"),C.next().addClass("filled"),$("html, body, .map-accordion").scrollTop(0))}else d();$.find(".certBlock").length===$(".map-accordion").children(".hidden").length?$("#noneFound").show():$("#noneFound").hide()}),C.focus(),$(".map-buttons .input-group-addon").on("click",d),C.on("keydown",function(e){27===e.keyCode&&(e.preventDefault(),d())}),window.Mousetrap.bind("esc",d),window.Mousetrap.bind("g m",s),l.merge(l.fromEvent($("#night-mode"),"click"),l.create(function(e){window.Mousetrap.bind("g t n",function(){return e.onNext()})})).debounce(500).subscribe(r,function(e){return console.error(e)}),window.Mousetrap.bind("g n n",function(){window.location="/challenges/next-challenge"}),window.Mousetrap.bind("g n a",function(){window.location="/account"}),window.Mousetrap.bind("g n m",function(){window.location="/map"}),window.Mousetrap.bind("g n a",function(){window.location="/about"}),window.Mousetrap.bind("g n s",function(){window.location="/shop"}),window.Mousetrap.bind("g n o",function(){window.location="/settings"}),window.Mousetrap.bind("g n r",function(){window.location="https://github.com/freecodecamp/freecodecamp/"}),function(){var e="__flyerId__";$.ajax({url:"/api/flyers/findOne",method:"GET",dataType:"JSON",data:{filter:{order:"id DESC"}}}).fail(function(e){return console.error(e)}).done(function(a){var n=localStorage.getItem(e);a&&a.isActive&&n!==a.id&&($("#dismiss-bill").on("click",function(){localStorage.setItem(e,a.id)}),$("#bill-content").html(a.message),$("#bill-board").fadeIn())})}()});