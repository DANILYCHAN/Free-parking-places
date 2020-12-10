
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 12,
        }, {
            searchControlProvider: 'yandex#search'
        }),
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),
        clusterer = new ymaps.Clusterer({
            preset: 'islands#redClusterIcons',
			      gridSize: 512,
            groupByCoordinates: false,
            clusterDisableClickZoom: false,
            geoObjectHideIconOnBalloonOpen: true,
			      clusterNumbers: [0.2]
        }),

    geoObjects = [];
    for (var i = 0; i <= 9454; i++) {
        console.log(park['features'][i]['geometry']['coordinates']);
        console.log(park['features'][i]['properties']['description']);
        console.log(park['features'][i]['properties']['marker-color']);
    		geoObjects[i] = new ymaps.Placemark([(park['features'][i]['geometry']['coordinates'][1]), (park['features'][i]['geometry']['coordinates'][0])], {
                balloonContent: (park['features'][i]['properties']['description'])
            }, {
                iconColor: (park['features'][i]['properties']['marker-color'])
            });
    };

    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);
});