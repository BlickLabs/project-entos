function counter(e){var n=(e.target,e.item.count),a=e.item.index+1;$("#ventures-counter-init").html("0"+a),$("#ventures-counter-total").html("0"+n)}!function(){$.validator.setDefaults({invalidHandler:function(e,n){var a=$(this);a.find(".form-message").removeClass(a.hasClass("success")?"success":"error").html("")},submitHandler:function(e){var n=$(e).serialize(),a=$(e).find("select, input, textarea, button").not("[disabled]"),t=$(e).find(".form-message"),s=$('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),r=$('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),o=function(e){var n=e?s:r;a.removeAttr("disabled"),t.removeClass(e?"error":"success"),t.addClass(e?"success":"error"),t.html(n)};a.attr("disabled","disabled"),t.html(""),$(e).find(".button-wrapper .loader").length||$(e).find(".button-wrapper").addClass("disabled"),$.ajax({url:$(e).attr("action"),method:"POST",data:n}).done(function(n){o(1===parseInt(n)),e.reset()}).fail(function(){o(!1)}).always(function(){a.removeAttr("disabled"),$(e).find(".button-wrapper").removeClass("disabled")})}})}();var clickHandler="ontouchstart"in document.documentElement?"touchstart":"click";$("a.go-section").bind(clickHandler,function(e){var n=$(this).attr("href");$("html, body").animate({scrollTop:$(n).offset().top-30},800)}),$(".go-section").click(function(){$("#ventures-decorator").addClass("active-decorator")}),function(){function e(e){$(e.target).is(".site-navbar__menu-trigger")||$(e.target).is(".site-navbar__menu-container")||$(e.target).closest(".site-navbar__menu-container").length||!$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")||(e.preventDefault(),$(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll"))}function n(){$(".site-navbar__menu-container").hasClass("site-navbar__menu-container--show-menu")?($(".site-navbar__menu-container").removeClass("site-navbar__menu-container--show-menu"),$("body").removeClass("noscroll")):($(".site-navbar__menu-container").addClass("site-navbar__menu-container--show-menu"),$("body").addClass("noscroll"))}var a=window.matchMedia("(max-width: 876px)");a.matches?($("body")[0].addEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").click(n)):($("body")[0].removeEventListener("touchstart",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll")),$(window).resize(function(){$("body")[0].removeEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").off("click"),$("body").removeClass("noscroll"),$(".site-navbar__menu-container").removeClass("show-menu"),a.matches&&($("body")[0].addEventListener("touchmove",e,{passive:!1}),$(".site-navbar__menu-trigger").click(n))})}();var venturesCarousel=$(".ventures-carousel");venturesCarousel.owlCarousel({loop:!1,responsiveClass:!0,nav:!0,navText:['<img class="ventures-navigation" src="img/icons/left-arrow.png" />','<img class="ventures-navigation" src="img/icons/right-arrow.png" />'],dots:!0,margin:36,onInitialized:counter,onTranslated:counter,responsive:{0:{items:1},600:{items:3,autoWidth:!0},1770:{items:4}}}),venturesCarousel.each(function(e){$(this).find(".owl-nav, .owl-dots").wrapAll("<div class='ventures-controls'></div>")});