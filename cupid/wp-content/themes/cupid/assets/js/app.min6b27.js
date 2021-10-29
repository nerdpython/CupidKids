(function($){'use strict';var Core={initialized:!1,timeOut_search:null,initialize:function(){this.initialized||(this.initialized=!0,this.build(),Core.events())},build:function(){Core.owlCarousel(),Core.processWord(),Core.iframe_height_in_widget_area(),Core.page_animsition(),Core.process_product(),Core.setOverlayVC()},events:function(){-1!=navigator.userAgent.indexOf('Safari')&&-1==navigator.userAgent.indexOf('Chrome')||Core.smoothPageScroll(),Core.window_scroll(),Core.window_resize(),Core.goTop(),Core.classes_switcher(),Core.classes_load_more(),Core.classes_search_event(),Core.page404_search(),$('a[data-hash]').on('click',function(a){return a.preventDefault(),Core.anchorsPosition(this),!1}),Core.process_Blog(),Core.login_link_event(),Core.mega_menu_process(!0),Core.search_popup_process(),Core.widget_default_process(),$('.wpb_map_wraper,.cupid-text-widget').on('click',Core.onMapClickHandler)},setOverlayVC:function(){$('[data-overlay-image]').each(function(){var a=$(this);setTimeout(function(){var b=a.data('overlay-image'),c=a.data('overlay-opacity');a.prepend('<div class="overlay-bg-vc" style="background-image: url('+b+') ;background-repeat:repeat; opacity:'+c+'"></div>')},100)}),$('[data-overlay-color]').each(function(){var a=$(this);setTimeout(function(){var b=a.data('overlay-color');a.prepend('<div class="overlay-bg-vc" style="background-color: '+b+'"></div>')},100)})},anchorsPosition:function(a,b){var c=jQuery(a).attr('href');if(0<$(c).length){var d=$(c).offset().top;0<$('#wpadminbar').length&&(d-=$('#wpadminbar').outerHeight()),$('html,body').animate({scrollTop:d},b,'swing',function(){})}},window_scroll:function(){$(window).on('scroll',function(){$(window).scrollTop()>$(window).height()/2?$('.gotop').fadeIn():$('.gotop').fadeOut()})},goTop:function(){$('.gotop').click(function(){return $('html,body').animate({scrollTop:'0px'},800),!1})},window_resize:function(){$(window).resize(function(){0<$('#wpadminbar').length&&$('body').attr('data-offset',$('#wpadminbar').outerHeight()+1),0<$('#wpadminbar').length&&$('body').attr('data-offset',$('#wpadminbar').outerHeight()+1),Core.iframe_height_in_widget_area(),Core.processWidthAudioPlayer(),Core.mega_menu_process(!1)})},smoothPageScroll:function(){return;var a=$(window);a.on('mousewheel DOMMouseScroll',function(d){if(1!==jQuery(d.target).closest('.navbar-collapse').length&&1!==jQuery(d.target).closest('.chosen-results').length&&1!==jQuery(d.target).closest('#ryl-modal-blog-article').length&&1!==jQuery(d.target).closest('.select2-results').length){d.preventDefault();var f=d.originalEvent.wheelDelta/120||-d.originalEvent.detail/3,g=a.scrollTop(),h=g-parseInt(f*400);TweenLite.to(a,0.6,{scrollTo:{y:h,autoKill:!0},ease:Power1.easeOut,autoKill:!0,overwrite:5})}})},owlCarousel:function(){$('div.owl-carousel:not(.manual)').each(function(){var slider=$(this),defaults={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[980,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:['<i class=\'fa fa-angle-left\'></i>','<i class=\'fa fa-angle-right\'></i>'],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:window,baseClass:'owl-carousel',theme:'owl-theme',lazyLoad:!1,lazyFollow:!0,lazyEffect:'fade',autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,transitionStyle:!1,addClassActive:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1},config=$.extend({},defaults,slider.data('plugin-options')),fucStr_afterInit=config.afterInit;!1!=config.afterInit&&(config.afterInit=function(){eval(fucStr_afterInit)});var fucStr_afterMove=config.afterMove;!1!=config.afterMove&&(config.afterMove=function(){eval(fucStr_afterMove)}),slider.owlCarousel(config)}),$('.ryl-text-carousel').each(function(){var b=$(this);b.owlCarousel({singleItem:!0,items:1,pagination:!0,navigation:b.hasClass('has-nav'),slideSpeed:300,mouseDrag:!1,transitionStyle:'ryl-text',afterAction:function(){var c=b.children().find('.owl-pagination .owl-page').length,d=b.children().find('.owl-pagination .owl-page.active').index()+1;b.attr('data-index',d+'/'+c)},afterMove:!1,beforeMove:!1,autoHeight:!0})})},onMapMouseleaveHandler:function(){var b=jQuery(this);b.on('click',Core.onMapClickHandler),b.off('mouseleave',Core.onMapMouseleaveHandler),b.find('iframe').css('pointer-events','none')},onMapClickHandler:function(){var b=jQuery(this);b.off('click',Core.onMapClickHandler),b.find('iframe').css('pointer-events','auto'),b.on('mouseleave',Core.onMapMouseleaveHandler)},processWord:function(){$('h2','.page-title-wrapper').lastWord()},process_Blog:function(){Core.blog_switcher(),Core.blog_infinite_scroll(),Core.blog_jplayer(),Core.blog_hr(),Core.blog_load_more(),0==$('.entry-tag-social .entry-share-wrapper').length&&(0==$('.entry-tag-social .entry-tag-wrapper').length?$('.entry-tag-social').remove():$('.entry-tag-social .entry-tag-wrapper').addClass('entry-tag-full-wrapper'))},blog_load_more:function(){$('.blog-load-more').on('click',function(a){a.preventDefault();var b=$(this).button('loading'),c=$(this).attr('data-href');$.get(c,function(g){var h=$('.blog-load-more',g).attr('data-href'),j=$('article',g).css({opacity:0});$('.blog-inner').append(j),j.imagesLoaded(function(){Core.owlCarousel(),Core.blog_jplayer(),Core.blog_hr(),j.animate({opacity:1})}),'undefined'==typeof h?b.hide():(b.button('reset'),b.attr('data-href',h))})})},blog_jplayer:function(){$('.jp-jplayer').each(function(){var a=$(this),b=a.data('audio'),c=a.data('title'),d=b.substr(b.lastIndexOf('.')+1),f='#'+a.data('player'),g={};g[d]=b,g.title=c,a.jPlayer({ready:function(){a.jPlayer('setMedia',g)},swfPath:'../plugins/jquery.jPlayer',cssSelectorAncestor:f})}),Core.processWidthAudioPlayer()},processWidthAudioPlayer:function(){setTimeout(function(){$('.jp-audio').each(function(){var a=$(this).outerWidth()-$('.jp-play-pause',this).outerWidth()-$('.jp-volume',this).outerWidth()-46;$('.jp-progress',this).width(a)})},100)},blog_switcher:function(){$('a','.blog-switcher-wrapper').on('click',function(){if(!$(this).hasClass('blog-switcher-active')){var a=$(this);$('a.blog-switcher-active','.blog-switcher-wrapper').removeClass('blog-switcher-active'),$.cookie('cupid-blog-style',a.attr('data-rel')),$(this).addClass('blog-switcher-active'),$('.blog-inner').fadeOut(500,function(){$('.blog-inner').removeClass(a.attr('data-unrel')).addClass(a.attr('data-rel')),Core.blog_hr(),Core.processWidthAudioPlayer(),$('.owl-carousel','.blog-inner').each(function(){var b=$(this).data('owlCarousel').destroy();'undefined'!=typeof b&&b.destroy()}),Core.owlCarousel(),$('.blog-inner').fadeIn(500)})}})},blog_infinite_scroll:function(){$('.blog-inner').infinitescroll({navSelector:'#infinite_scroll_button',nextSelector:'#infinite_scroll_button a',itemSelector:'article',loading:{selector:'#infinite_scroll_loading',img:cupid_theme_url+'assets/images/ajax-loader.gif',msgText:'Loading...',finishedMsg:''}},function(a){var d=$(a).css({opacity:0});d.imagesLoaded(function(){Core.owlCarousel(),Core.blog_jplayer(),Core.blog_hr(),d.animate({opacity:1})})})},blog_hr:function(){$('hr','[data-hr="true"]').remove();var a=parseInt($('[data-hr="true"]').attr('data-col'),10);$('article','[data-hr="true"]').each(function(b){0<b&&0==b%a&&$(this).before('<hr/>')})},iframe_height_in_widget_area:function(){$('.footer-top-widget-area .footer-col-3').each(function(a){var b=$('.footer-top-widget-area').width()-1;if(1200>b)return void $(this).css('width','');var c=458;1==a?$(this).css('width',c+'px'):$(this).css('width',1*(b-c)/2+'px')}),setTimeout(function(){$('.footer-top-widget-area .footer-col-3').each(function(){var a=$(this);1<$('aside',a).length||($('iframe',a).css('height',''),768>$(window).width()||setTimeout(function(){$('iframe',a).outerHeight()<$('.footer-top-widget-area').height()&&$('iframe',a).css('height',$('.footer-top-widget-area').height()+'px')},50))})},100)},login_link_event:function(){$('.cupid-login-link .login-link, .cupid-login-link .sign-up-link').off('click').click(function(){var a='cupid_login';$(this).hasClass('sign-up-link')&&(a='cupid_sign_up');var b='#cupid-popup-login-wrapper';Core.show_loading(),$.ajax({type:'POST',data:'action='+a,url:cupid_ajax_url,success:function(c){Core.hide_loading(),$(b).length&&$(b).remove(),$('body').append(c),$(b).modal(),$('#cupid-popup-login-form').submit(function(d){var f=$('#cupid-popup-login-form').serialize();return Core.show_loading(),jQuery.ajax({type:'POST',data:f,url:cupid_ajax_url,success:function(g){Core.hide_loading();var h=jQuery.parseJSON(g);0>h.code?jQuery('.login-message','#cupid-popup-login-form').html(h.message):window.location.reload()},error:function(){Core.hide_loading()}}),d.preventDefault(),!1})},error:function(){Core.hide_loading()}})})},show_loading:function(){$('body').addClass('overflow-hidden'),0==$('.loading-wrapper').length&&$('body').append('<div class="loading-wrapper"><span class="spinner-double-section-far"></span></div>')},hide_loading:function(){$('.loading-wrapper').fadeOut(function(){$('.loading-wrapper').remove(),$('body').removeClass('overflow-hidden')})},classes_switcher:function(){$('a','.classes-switcher-wrapper').on('click',function(){if(!$(this).hasClass('blog-switcher-active')){var a=$(this);$('a.classes-switcher-active','.classes-switcher-wrapper').removeClass('classes-switcher-active'),$.cookie('cupid-classes-style',a.attr('data-rel')),$(this).addClass('classes-switcher-active'),$('.classes-inner').fadeOut(500,function(){$('.classes-inner').removeClass(a.attr('data-unrel')).addClass(a.attr('data-rel')),Core.classes_hr(),$('.classes-inner').fadeIn(500)})}})},classes_hr:function(){var a=$.cookie('cupid-classes-style'),b='.archive-cupid-class .classes-inner',c=parseInt($('.archive-cupid-class .classes-inner').attr('data-col'),10);'list'==a&&(c=1),$('hr',b).remove(),$('.classes-item',b).each(function(d){0<d&&0==d%c&&$(this).before('<hr class=\'separate-line\' />')})},classes_load_more:function(){$('.blog-load-more').on('click',function(a){a.preventDefault();var b=$(this).button('loading'),c=$(this).attr('data-href');Core.classes_bind_paging(c)})},classes_bind_paging:function(a,b){$.get(a,function(c){var f=$('.blog-load-more',c).attr('data-href'),g=$($('.archive-cupid-class .classes-inner',c).html()).css({opacity:0}),h=$(this).button('loading');$('.archive-cupid-class .classes-inner').append(g),g.imagesLoaded(function(){g.animate({opacity:1}),Core.classes_hr()}),'undefined'==typeof f?h.hide():(h.button('reset'),h.attr('data-href',f)),b&&b()})},classes_search_event:function(){$('#keyword_classes','.archive-cupid-class').keypress(function(a){var b=a.keyCode?a.keyCode:a.which;13==b&&Core.classes_search()}),$('#bt_search','.archive-cupid-class').click(function(){Core.classes_search()}),$('i.fa-close','.archive-cupid-class .keyword-wrapper').click(function(){$('.archive-cupid-class .classes-inner').empty(),$('#keyword_classes','.archive-cupid-class').val(''),$(this).removeClass(),$(this).addClass('fa fa-refresh fa-spin'),Core.classes_bind_paging('',function(){var a=$('i','.archive-cupid-class .keyword-wrapper');$(a).removeClass(),$(a).addClass('fa fa-close'),$(a).css({opacity:0})})})},classes_search:function(){var a=$('#keyword_classes','.archive-cupid-class').val();if(''!=a){var b=$('#bt_search','.archive-cupid-class');b.attr('disabled',!0),$('i',b).removeClass(),$('i',b).addClass('fa fa-refresh fa-spin'),$.ajax({url:cupid_ajax_url,data:{action:'cupid_classes_search',keyword:a},success:function(c){$('.blog-load-more-wrapper','.archive-cupid-class').hide(),$('i.fa-close','.archive-cupid-class .keyword-wrapper').css({opacity:1});var d='.archive-cupid-class .classes-inner';$(d).css({opacity:0}),$(d).empty();var f=$(c);f.imagesLoaded(function(){$(d).append(f),$(d).animate({opacity:1})}),Core.classes_hr(),b.removeAttr('disabled'),$('i',b).removeClass(),$('i',b).addClass('fa fa-search')}})}},page404_search:function(){$('#keyword_404','.page404').keypress(function(a){var b=a.keyCode?a.keyCode:a.which;13==b&&$('#bt_search_404','.page404').click()}),$('#bt_search_404','.page404').click(function(){var a=$('#keyword_404','.page404').val();''!=a&&(a=a.replace(/ /g,'+'),console.log(a),window.location=cupid_site_url+'?s='+a)})},mega_menu_process:function(a){a&&($('.main-menu b.caret').click(function(b){992<=$(window).width()||(b.preventDefault(),$('> ul.dropdown-menu',$(this).parent().parent()).toggle())}),$('.main-menu > li > a > i.fa.fa-search').click(function(b){b.preventDefault(),$('.header .icon-search-menu').trigger('click')})),992<=$(window).width()&&$('.main-menu ul.dropdown-menu').css('display',''),setTimeout(function(){jQuery('> .mega-menu','.main-menu').hover(function(){if(!(992>$(window).width())){var b=0,c=$(this),d=$('header .navbar-default > .container').outerWidth();if(jQuery('> ul.dropdown-menu',this).hasClass('not-auto-size')?b=$('> ul.dropdown-menu > li',c).outerWidth():$('.yamm-content > .row > .menu-item',c).each(function(){b+=$(this).outerWidth()}),c.hasClass('yamm-fw'))$('> ul',c).css('left','15px'),$('> ul',c).css('right','15px');else{if(c.hasClass('drop-to-left'))if(c.width()+c.position().left<b)$('> ul',c).css('right','auto'),$('> ul',c).css('left','15px');else{jQuery(this).position().left+15;$('> ul',c).css('right',d-c.width()-c.position().left+'px'),$('> ul',c).css('left','auto')}if(c.hasClass('drop-to-right'))if(d-c.position().left<b)$('> ul',c).css('right','15px'),$('> ul',c).css('left','auto');else{jQuery(this).position().left+15;$('> ul',c).css('left',c.position().left+'px'),$('> ul',c).css('right','auto')}}}})},100)},search_popup_process:function(){function a(){var f=$('li.selected','#cupid-modal-search');if(!(2>$('li','#cupid-modal-search').length)){var g=f.prev();f.removeClass('selected'),g.length?g.addClass('selected'):($('li:last','#cupid-modal-search').addClass('selected'),g=$('li:last','#cupid-modal-search')),g.position().top<jQuery('#cupid-modal-search .ajax-search-result').scrollTop()?jQuery('#cupid-modal-search .ajax-search-result').scrollTop(g.position().top):g.position().top+g.outerHeight()>jQuery('#cupid-modal-search .ajax-search-result').scrollTop()+jQuery('#cupid-modal-search .ajax-search-result').height()&&jQuery('#cupid-modal-search .ajax-search-result').scrollTop(g.position().top-jQuery('#cupid-modal-search .ajax-search-result').height()+g.outerHeight())}}function b(){var f=$('li.selected','#cupid-modal-search');if(!(2>$('li','#cupid-modal-search').length)){var g=f.next();f.removeClass('selected'),g.length?g.addClass('selected'):($('li:first','#cupid-modal-search').addClass('selected'),g=$('li:first','#cupid-modal-search')),g.position().top<jQuery('#cupid-modal-search .ajax-search-result').scrollTop()?jQuery('#cupid-modal-search .ajax-search-result').scrollTop(g.position().top):g.position().top+g.outerHeight()>jQuery('#cupid-modal-search .ajax-search-result').scrollTop()+jQuery('#cupid-modal-search .ajax-search-result').height()&&jQuery('#cupid-modal-search .ajax-search-result').scrollTop(g.position().top-jQuery('#cupid-modal-search .ajax-search-result').height()+g.outerHeight())}}function c(){var f=$('li.selected a','#cupid-modal-search');0<f.length&&(window.location=f.attr('href'))}function d(){var f=$('input[type="search"]','#cupid-modal-search').val();return 2>f.length?void $('.ajax-search-result','#cupid-modal-search').html(''):void($('.ajax-search-icon','#cupid-modal-search').addClass('fa fa-spinner fa-spin'),$('.ajax-search-icon','#cupid-modal-search').removeClass('icon-search'),$.ajax({type:'POST',data:'action=result_search&keyword='+f,url:cupid_ajax_url,success:function(g){$('.ajax-search-icon','#cupid-modal-search').removeClass('fa fa-spinner fa-spin'),$('.ajax-search-icon','#cupid-modal-search').addClass('icon-search');var h='';if(g){var j=$.parseJSON(g);j.length?(h+='<ul>',-1==j[0].id?h+='<li class="selected">'+j[0].title+'</li>':$.each(j,function(k){h+=0==k?'<li class="selected">':'<li>',null==this.title||''==this.title?h+='<a href="'+this.guid+'">'+this.date+'</a>':(h+='<a href="'+this.guid+'">'+this.title+'</a>',h+='<span>'+this.date+' </span>'),h+='</li>'}),h+='</ul>'):h=''}$('.ajax-search-result','#cupid-modal-search').html(h),jQuery('#cupid-modal-search .ajax-search-result').scrollTop(0)},error:function(){$('.ajax-search-icon','#cupid-modal-search').removeClass('fa fa-spinner fa-spin'),$('.ajax-search-icon','#cupid-modal-search').addClass('icon-search')}}))}$('header .icon-search-menu').click(function(f){f.preventDefault(),Core.search_popup_open()}),$('.cupid-dismiss-modal, .modal-backdrop','#cupid-modal-search').click(function(){Core.search_popup_close()}),$('.cupid-search-wrapper button > i.ajax-search-icon').click(function(){d()}),$('#search-ajax','#cupid-modal-search').on('keyup',function(f){if(!(f.altKey||f.ctrlKey||f.shiftKey||f.metaKey)){if(-1==['Control','Alt','Shift'].indexOf(f.key))switch(f.which){case 27:Core.search_popup_close();break;case 38:a();break;case 40:b();break;case 13:var j=$('li.selected a','#cupid-modal-search');if(0==j.length)return f.preventDefault(),!1;c();break;default:clearTimeout(Core.timeOut_search),Core.timeOut_search=setTimeout(d,500);}}})},search_popup_open:function(){$('#cupid-modal-search').hasClass('in')||($('#cupid-modal-search').show(),setTimeout(function(){$('#cupid-modal-search').addClass('in')},300),$('#search-ajax','#cupid-modal-search').focus(),$('#search-ajax','#cupid-modal-search').val(''),$('.ajax-search-result','#cupid-modal-search').html(''))},search_popup_close:function(){$('#cupid-modal-search').hasClass('in')&&($('#cupid-modal-search').removeClass('in'),setTimeout(function(){$('#cupid-modal-search').hide()},300))},page_animsition:function(){$('.animsition').animsition({inClass:'fade-in',outClass:'fade-out',inDuration:1500,outDuration:800,linkElement:'.animsition-link:not([href^="#"]):not([target="_blank"]):not([href^="javascript"])',loading:!0,loadingParentElement:'body',loadingClass:'animsition-loading',unSupportCss:['animation-duration','-webkit-animation-duration','-o-animation-duration'],overlay:!1,overlayClass:'animsition-overlay-slide',overlayParentElement:'body'})},widget_default_process:function(){$('.footer-top-widget-area aside.widget').each(function(){if(0<$('select',this).length){var a=$('select',this);$('select',this).remove(),$(this).append('<div class="select-widget"></div>'),$('> .select-widget',this).append(a)}})},process_product:function(){Core.product_animated(),Core.add_cart_quantity(),Core.select2();var a=$('.single-product-left-wrapper');this.singleProductImage(a)},add_cart_quantity:function(){$(document).off('click','.quantity .btn-number').on('click','.quantity .btn-number',function(a){a.preventDefault();var b=$(this).data('type'),c=$('input',$(this).parent()),d=parseInt(c.val()),f=c.attr('max');'undefined'==typeof f&&(f=100);var g=c.attr('min');'undefined'==typeof g&&(g=0),isNaN(d)?c.val(0):('minus'==b&&(d>g&&c.val(d-1).change(),parseInt(c.val())==g&&$(this).attr('disabled',!0)),'plus'==b&&(d<f&&c.val(d+1).change(),parseInt(c.val())==f&&$(this).attr('disabled',!0)))}),$('input','.quantity').focusin(function(){$(this).data('oldValue',$(this).val())}),$('input','.quantity').on('change',function(){var a=$(this),b=a.attr('max');'undefined'==typeof b&&(b=100);var c=a.attr('min');'undefined'==typeof c&&(c=0);var d=parseInt(a.val());d>=c?$('.btn-number[data-type=\'minus\']',$(this).parent()).removeAttr('disabled'):(alert('Sorry, the minimum value was reached'),$(this).val($(this).data('oldValue'))),d<=b?$('.btn-number[data-type=\'plus\']',$(this).parent()).removeAttr('disabled'):(alert('Sorry, the maximum value was reached'),$(this).val($(this).data('oldValue')))})},product_animated:function(){var a=$(window).width();$('.product_animated').each(function(){var b=parseInt($(this).data('col'),10);isNaN(b)&&(b=0);var c=0;$('div.product-item-wrapper:not(".umScaleIn")',$(this)).each(function(d){var f=$(this);0<b&&0==d%b&&(c=0);var g=300*c;c++,991<a&&f.css({'-webkit-animation-delay':g+'ms','-moz-animation-delay':g+'ms','-ms-animation-delay':g+'ms','-o-animation-delay':g+'ms','animation-delay':g+'ms'}),f.waypoint(function(){f.addClass('animated').addClass('umScaleIn')},{triggerOnce:!0,offset:'90%'})})})},select2:function(){$('.woocommerce form .form-row select').select2()},singleProductImage:function(a){var b=a.find('.flex-control-thumbs');b.length&&b.owlCarousel({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[980,4],itemsTablet:[768,4],itemsTabletSmall:!1,itemsMobile:[479,4],pagination:!1,responsiveRefreshRate:100,navigation:!1})}};$(document).ready(function(){Core.initialize()})})(jQuery);