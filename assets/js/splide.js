document.addEventListener( 'DOMContentLoaded', function () { 
    // Slider id list 
    const sliderIdList = [ 
        "featured-candidates-section", 
        "reviews-list-holder" 
    ]; 

    // Object to store 'slider id - slider reference' pairs 
    const sliderMap = {}; 

    // Common slider options
    const commonSliderOptions = { 
        autoplay: 'pause', 
        intersection: {
            inView: {
                autoplay: true,
            }, 
            outView: {
                autoplay: false,
            }, 
        },
    }; 

    // Creating slider objects and storing references in 'sliderMap' object 
    sliderIdList.forEach( function( id ) { 
        sliderMap[ id ] = new Splide( document.getElementById( id ), commonSliderOptions ); 
    } ); 

    // 'featured-candidates-section' slider specific options 
    sliderMap[ "featured-candidates-section" ].on( 'pagination:mounted', function ( data ) { 
        // `items` contains all dot items
        data.items.forEach( function ( item ) {
            item.button.classList.add( `splide__pagination__page-${ item.page + 1 }` ); 
        } ); 
    } ); 

    // Calling 'mount' method on all slider references 
    Object.entries( sliderMap ).forEach( function( [ id, slider ] ) { 
        slider.mount( window.splide.Extensions ); 
    } ); 
} ); 