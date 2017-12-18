 jQuery(document).ready(function () {
     jQuery('#main_slider').show().revolution({
         sliderType: 'standard',
         sliderLayout: 'fullscreen',
         delay: 9000,
         gridwidth: 1170,
         gridheight: 600,
         navigation: {
             arrows: { 
                 enable: true,
                 style: "hades",
                 hide_onleave: false,
                 tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>'
             },
             bullets: {
                 enable: false,
             } 
         }
     });
 }); 