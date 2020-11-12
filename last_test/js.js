ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
      center: [55.74, 37.58],
      zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [100, 100]
            },
            properties: {
                balloonContent: 'test'
            }
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        });

    let bk = 10;
    let sk = 13;
    let ttk = 13;
    let out = 40;
    let now = new Date();
alert( now );
console.log(now);
        myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([100, 100], {
            balloonContent: '   '
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.755968, 37.625584], {
            balloonContent: 'Старопанский переулок 5 стр 1 <br \/> Всего мест 10 <br \/> Доступно мест ' + bk
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.747902, 37.649792], {
            balloonContent: 'Николоямская ул., 13/14с7 <br \/> Всего мест 13 <br \/> Доступно мест' + sk
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.761165, 37.546594], {
            balloonContent: '2-я Черногрязская ул., 5, корп. 1 <br \/> Всего мест 13 <br \/> Доступно мест' + ttk
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.659799, 37.552768], {
            balloonContent: 'ул. Намёткина, 16, стр. 6 <br \/> Всего мест 40 <br \/> Доступно мест' + out
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }));
}

myMap.controls.add('zoomControl');
myMap.controls.add('rulerControl', {
    scaleLine: false
});
myMap.controls.add('fullscreenControl');
myMap.controls.add('geolocationControl');
myMap.controls.add('typeSelector');

myMap.controls.add('searchControl', {
    float: 'left',
    provider: 'yandex#search'
});
