ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map('map', {
      center: [55.74, 37.58],
      zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myGeoObject = new ymaps.GeoObject({
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
    let hours = now.getHours();
    let minutes = now.getMinutes();

    let color_bk;

    switch(hours) {
			case 6:
				bk = Math.ceil(bk * 0.6);
        color_bk = '#ffff00'
			case 7:
				bk = Math.ceil(bk *0.52);
        color_bk = '#ffff00';
			case 8:
        if (minutes <= 30) {
          bk = Math.ceil(bk * 0.38);
          color_bk = '#ffff00'
        } else {
          bk = Math.ceil(bk * 0.25);
          color_bk = '#ff0000'
        };
      case 9:
      case 19:
      case 20:
        bk = Math.ceil(bk * 0.15);
        color_bk = '#ff0000'
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        bk = Math.ceil(bk * 0.015);
        color_bk = '#ff0000'
      case 21:
      case 22:
        bk = Math.ceil(bk * 0.3);
        color_bk = '#ff0000'
      case 23:
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        bk = Math.ceil(bk * 0.75);
        color_bk = '#3caa3c'
		}

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
            iconColor: color_bk
        }))
        .add(new ymaps.Placemark([55.747902, 37.649792], {
            balloonContent: 'Николоямская ул., 13/14с7 <br \/> Всего мест 13 <br \/> Доступно мест ' + sk
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.761165, 37.546594], {
            balloonContent: '2-я Черногрязская ул., 5, корп. 1 <br \/> Всего мест 13 <br \/> Доступно мест ' + ttk
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.659799, 37.552768], {
            balloonContent: 'ул. Намёткина, 16, стр. 6 <br \/> Всего мест 40 <br \/> Доступно мест ' + out
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
