
(function(MapCSS) {
    function restyle(style, tags, zoom, type, selector) {
        var s_default = {};

        if (((type == 'way' && tags['highway'] == 'primary' && (!('surface' in tags))))) {
            s_default['color'] = '#f00';
            s_default['width'] = 1;
            s_default['z-index'] = 100;
        }

        if (Object.keys(s_default).length > 0) {
            style['surface_default'] = s_default;
        }
        return style;
    }
    
    var sprite_images = {};

    var external_images = [];

    MapCSS.loadStyle('surface', restyle, sprite_images, external_images);
    MapCSS.preloadExternalImages('surface');
})(MapCSS);
    