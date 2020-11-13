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

    let bk = bk_d = 10;
    let sk = sd_d = 13;
    let ttk = ttk_d = 13;
    let out = out_d = 40;
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let day = now.getDay();
    let color_bk;
    let color_sk;
    let color_ttk;
    let color_out;

    switch(hours) {
			case 6:
				bk = Math.ceil(bk * 0.65);
        sk = Math.ceil(sk * 0.55);
        ttk = Math.ceil(ttk * 0.67);
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        if (day = 6) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        if (day = 0) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        color_bk= '#008000'; color_sk= '#008000'; color_ttk= '#008000';
			case 7:
				bk = Math.ceil(bk * 0.55);
        sk = Math.ceil(sk * 0.40);
        ttk = Math.ceil(ttk * 0.61);
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        if (day = 6) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        if (day = 0) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        color_bk= '#008000'; color_sk= '#3caa3c'; color_ttk= '#008000';
			case 8:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
        if (day = 6) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        if (day = 0) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        sk = Math.ceil(sk * 0.27);
        color_sk = '#ffff00';
        if (minutes <= 30) {
          bk = Math.ceil(bk * 0.40);
          ttk = Math.ceil(ttk * 0.53);
          color_bk = '#3caa3c';  color_ttk = '#3caa3c';
        } else {
          bk = Math.ceil(bk * 0.25);
          ttk = Math.ceil(ttk * 0.45);
          color_bk = '#ffff00'; color_ttk = '#3caa3c';
        };
      case 9:
       bk = Math.ceil(bk * 0.18);
       sk = Math.ceil(sk * 0.25);
       ttk = Math.ceil(ttk * 0.35);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
       if (day = 6) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
       color_bk= '#ff0000'; color_sk= '#ffff00'; color_ttk= '#ffff00';
      case 10:
       bk = Math.ceil(bk * 0.03);
       sk = Math.ceil(sk * 0.20);
       ttk = Math.ceil(ttk * 0.21);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
       if (day = 6) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.20); color_out = '#ff0000'; };
       color_bk= '#5c0000'; color_sk= '#ff0000'; color_ttk= '#ffff00';
      case 11:
       bk = Math.ceil(bk * 0.015);
       sk = Math.ceil(sk * 0.15);
       ttk = Math.ceil(ttk * 0.20);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
       if (day = 6) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.20); color_out = '#ff0000'; };
       color_bk= '#5c0000'; color_sk= '#ff0000'; color_ttk= '#ff0000';
      case 12:
       bk = Math.ceil(bk * 0.015);
       sk = Math.ceil(sk * 0.15);
       ttk = Math.ceil(ttk * 0.19);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
       if (day = 6) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.20); color_out = '#ff0000'; };
       color_bk= '#5c0000'; color_sk= '#ff0000'; color_ttk= '#ff0000';
      case 13:
       bk = Math.ceil(bk * 0.015);
       sk = Math.ceil(sk * 0.15);
       ttk = Math.ceil(ttk * 0.18);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
       if (day = 6) { out = Math.ceil(out * 0.35); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.35); color_out = '#ffff00'; };
       color_bk= '#5c0000'; color_sk= '#ff0000'; color_ttk= '#ff0000';
      case 14:
       bk = Math.ceil(bk * 0.015);
       sk = Math.ceil(sk * 0.10);
       ttk = Math.ceil(ttk * 0.18);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
       if (day = 6) { out = Math.ceil(out * 0.35); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.35); color_out = '#ffff00#ffff00'; };
       color_bk= '#5c0000'; color_sk= '#5c0000'; color_ttk= '#ff0000';
      case 15:
       bk = Math.ceil(bk * 0.015);
       sk = Math.ceil(sk * 0.15);
       ttk = Math.ceil(ttk * 0.19);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
       if (day = 6) { out = Math.ceil(out * 0.35); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.35); color_out = '#ffff00'; };
       color_bk= '#5c0000'; color_sk= '#ff0000'; color_ttk= '#ff0000';
      case 16:
       bk = Math.ceil(bk * 0.015);
       sk = Math.ceil(sk * 0.15);
       ttk = Math.ceil(ttk * 0.20);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = '#00ff00'; };
       if (day = 6) { out = Math.ceil(out * 0.35); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
       color_bk= '#5c0000'; color_sk= '#ff0000'; color_ttk= '#ff0000';
      case 17:
       bk = Math.ceil(bk * 0.015);
       sk = Math.ceil(sk * 0.15);
       ttk = Math.ceil(ttk * 0.21);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.20); color_out = '#ff0000'; };
       if (day = 6) { out = Math.ceil(out * 0.3); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
       color_bk= '#5c0000'; color_sk= '#ff0000'; color_ttk= '#ffff00';
      case 18:
        bk = Math.ceil(bk * 0.015);
        sk = Math.ceil(sk * 0.15);
        ttk = Math.ceil(ttk * 0.22);
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.20); color_out = '#ff0000'; };
        if (day = 6) { out = Math.ceil(out * 0.3); color_out = '#ffff00'; };
        if (day = 0) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
        color_bk= '#5c0000'; color_sk= '#ff0000'; color_ttk= '#ffff00';
      case 19:
       bk = Math.ceil(bk * 0.05);
       sk = Math.ceil(sk * 0.22);
       ttk = Math.ceil(ttk * 0.22);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.20); color_out = '#ff0000'; };
       if (day = 6) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
       if (day = 0) { out = Math.ceil(out * 0.20); color_out = '#ff0000'; };
       color_bk= '#5c0000'; color_sk= '#ffff00'; color_ttk= '#ffff00';
      case 20:
        bk = Math.ceil(bk * 0.15);
        sk = Math.ceil(sk * 0.27);
        ttk = Math.ceil(ttk * 0.40);
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
        if (day = 6) { out = Math.ceil(out * 0.25); color_out = '#ffff00'; };
        if (day = 0) { out = Math.ceil(out * 0.20); color_out = '#ff0000'; };
        color_bk= '#ff0000'; color_sk= '#ffff00'; color_ttk= '#3caa3c';
      case 21:
       bk = Math.ceil(bk * 0.24);
       sk = Math.ceil(sk * 0.30);
       ttk = Math.ceil(ttk * 0.55);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
       if (day = 6) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
       if (day = 0) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
       color_bk= '#ffff00'; color_sk= '#ffff00'; color_ttk= '#008000';
      case 22:
        bk = Math.ceil(bk * 0.30);
        sk = Math.ceil(sk * 0.42);
        ttk = Math.ceil(ttk * 0.62);
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
        if (day = 6) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        if (day = 0) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
        color_bk= '#ffff00'; color_sk= '#3caa3c'; color_ttk= '#008000';
      case 23:
       bk = Math.ceil(bk * 0.40);
       sk = Math.ceil(sk * 0.52);
       ttk = Math.ceil(ttk * 0.68);
       if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
       if (day = 6) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
       if (day = 0) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
       color_bk= '#3caa3c'; color_sk= '#3caa3c'; color_ttk= '#008000';
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        bk = Math.ceil(bk * 0.75);
        sk = Math.ceil(sk * 0.52);
        ttk = Math.ceil(ttk * 0.68);
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
        if (day = 6) { out = Math.ceil(out * 0.15); color_out = '#ff0000'; };
        if (day = 0) { out = Math.ceil(out * 0.10); color_out = '#5c0000'; };
        color_bk= '#008000'; color_sk= '#008000'; color_ttk= '#008000';
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
            balloonContent: 'Старопанский переулок, дом 5, строение 1 <br \/> Парковочных мест: 10 <br \/> Прогноз свободных мест: ' + bk
        }, {
            preset: 'islands#circleIcon',
            iconColor: color_bk
        }))
        .add(new ymaps.Placemark([55.747902, 37.649792], {
            balloonContent: 'Николоямская улица, дом 13/14, строение 7 <br \/> Парковочных мест: 13 <br \/> Прогноз свободных мест: ' + sk
        }, {
            preset: 'islands#circleIcon',
            iconColor: color_sk
        }))
        .add(new ymaps.Placemark([55.761165, 37.546594], {
            balloonContent: '2-я Черногрязская улица, дом 5, корпус 1 <br \/> Парковочных мест: 13 <br \/> Прогноз свободных мест: ' + ttk
        }, {
            preset: 'islands#circleIcon',
            iconColor: color_ttk
        }))
        .add(new ymaps.Placemark([55.659799, 37.552768], {
            balloonContent: 'ул. Намёткина, дом 16, строение 6 <br \/> Парковочных мест: 40 <br \/> Прогноз свободных мест: ' + out
        }, {
            preset: 'islands#circleIcon',
            iconColor: color_out
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
