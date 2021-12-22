var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_bangunan_1 = new ol.format.GeoJSON();
var features_bangunan_1 = format_bangunan_1.readFeatures(json_bangunan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_1.addFeatures(features_bangunan_1);
var lyr_bangunan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bangunan_1, 
                style: style_bangunan_1,
                interactive: true,
                title: '<img src="styles/legend/bangunan_1.png" /> bangunan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_bangunan_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_bangunan_1];
lyr_bangunan_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', });
lyr_bangunan_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', });
lyr_bangunan_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', });
lyr_bangunan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});