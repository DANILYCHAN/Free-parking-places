
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
            preset: 'islands#cyanClusterIcons',
			      gridSize: 512,
            groupByCoordinates: false,
            clusterDisableClickZoom: false,
            geoObjectHideIconOnBalloonOpen: true,
			      clusterNumbers: [0.2]
        }),

    geoObjects = [];

    let bk = 0, bk_save = 0; // количество мест на парковке
    let cord_1 = 0, cord_2 = 0; // координаты парковки
    let color = 'green'; // цвет метки
    let adress = 'no_adress'; // Адрес парковки
    let place = 1; // Параметр нахождения метки по кольцам
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let day = now.getDay();

    for (var i = 0; i <= 9454; i++) {
      bk =  (park['features'][i]['properties']['description']);
      bk_save = bk;
      adress = (park['features'][i]['properties']['iconCaption']);
      cord_1 = (park['features'][i]['geometry']['coordinates'][1]);
      cord_2 = (park['features'][i]['geometry']['coordinates'][0]);

        if (cord_1 < 55.758017 && cord_1 > 55.742235 && cord_2 < 37.648721 && cord_2 > 37.598717) {
          place = 1;
        } else {
          if ((cord_1 < 55.773743 && cord_1 > 55.768017 && cord_2 < 37.657612 && cord_2 > 37.582504) || (cord_1 < 55.773743 && cord_1 > 55.729704 && cord_2 < 37.657612 && cord_2 > 37.598717) || (cord_1 < 55.742235 && cord_1 > 55.729704 && cord_2 < 37.657612 && cord_2 > 37.582504) || (cord_1 < 55.773743 && cord_1 > 55.729704 && cord_2 < 37.648721 && cord_2 > 37.582504)) {
            place = 2;
        } else {
          if ((cord_1 < 55.793821 && cord_1 > 55.701041 && cord_2 < 37.582504 && cord_2 > 37.531508) || (cord_1 < 55.793821 && cord_1 > 55.773743 && cord_2 < 37.712755 && cord_2 > 37.531508) || (cord_1 < 55.793821 && cord_1 > 55.701041 && cord_2 < 37.712755 && cord_2 > 37.657612) || (cord_1 < 55.729704 && cord_1 > 55.701041 && cord_2 < 37.712755 && cord_2 > 37.531508)) {
            place = 3;
        } else {
            place = 4;
        }
        }
        };

      switch(place) {
        case 1:
           switch(hours) {
             case 6:
              bk = Math.floor(bk * 0.65);
              color= 'green';
              break;
             case 7:
              bk = Math.floor(bk * 0.55);
              color= 'green';
              break;
             case 8:
              if (minutes <= 30) {
                bk = Math.floor(bk * 0.40);
                color = 'green';
              } else {
                bk = Math.floor(bk * 0.25);
                color = '#ffb300';
              };
              break;
             case 9:
              bk = Math.floor(bk * 0.18);
              color= 'red';
              break;
             case 10:
              bk = Math.floor(bk * 0.03);
              color = 'red';
              break;
             case 11:
              bk = Math.floor(bk * 0.015);
              color= 'red';
              break;
             case 12:
              bk = Math.floor(bk * 0.015);
              color= 'red';
              break;
             case 13:
              bk = Math.floor(bk * 0.015);
              color= 'red';
              break;
             case 14:
              bk = Math.floor(bk * 0.015);
              color= 'red';
              break;
             case 15:
              bk = Math.floor(bk * 0.015);
              color= 'red';
              break;
             case 16:
              bk = Math.floor(bk * 0.015);
              color= 'red';
              break;
             case 17:
              bk = Math.floor(bk * 0.015);
              color= 'red';
              break;
             case 18:
              bk = Math.floor(bk * 0.015);
              color= 'red';
              break;
             case 19:
              bk = Math.floor(bk * 0.05);
              color= 'red';
              break;
             case 20:
              bk = Math.floor(bk * 0.15);
              color= 'red';
              break;
             case 21:
              bk = Math.floor(bk * 0.24);
              color= '#ffb300';
              break;
             case 22:
              bk = Math.floor(bk * 0.30);
              color= '#ffb300';
              break;
             case 23:
              bk = Math.floor(bk * 0.40);
              color= 'green';
              break;
             case 0:
             case 1:
             case 2:
             case 3:
             case 4:
             case 5:
              bk = Math.floor(bk * 0.75);
              color= 'green';
              break;
           };
           break;
      case 2:
         switch(hours) {
           case 6:
            bk = Math.floor(bk * 0.55);
            color= 'green';
            break;
           case 7:
            bk = Math.floor(bk * 0.40);
            color= '#ffb300';
            break;
           case 8:
            bk = Math.floor(bk * 0.27);
            color = '#ffb300';
            break;
           case 9:
            bk = Math.floor(bk * 0.25);
            color= '#ffb300';
            break;
           case 10:
            bk = Math.floor(bk * 0.20);
            color = '#ffb300';
            break;
           case 11:
            bk = Math.floor(bk * 0.15);
            color= 'red';
            break;
           case 12:
            bk = Math.floor(bk * 0.15);
            color= 'red';
            break;
           case 13:
            bk = Math.floor(bk * 0.15);
            color= 'red';
            break;
           case 14:
            bk = Math.floor(bk * 0.10);
            color= 'red';
            break;
           case 15:
            bk = Math.floor(bk * 0.15);
            color= 'red';
            break;
           case 16:
            bk = Math.floor(bk * 0.15);
            color= 'red';
            break;
           case 17:
            bk = Math.floor(bk * 0.15);
            color= 'red';
            break;
           case 18:
            bk = Math.floor(bk * 0.15);
            color= 'red';
            break;
           case 19:
            bk = Math.floor(bk * 0.22);
            color= '#ffb300';
            break;
           case 20:
            bk = Math.floor(bk * 0.27);
            color= '#ffb300';
            break;
           case 21:
            bk = Math.floor(bk * 0.30);
            color= '#ffb300';
            break;
           case 22:
            bk = Math.floor(bk * 0.42);
            color= 'green';
            break;
           case 23:
            bk = Math.floor(bk * 0.52);
            color= 'green';
            break;
           case 0:
           case 1:
           case 2:
           case 3:
           case 4:
           case 5:
            bk = Math.floor(bk * 0.52);
            color= 'green';
            break;
         };
         break;
      case 3:
           switch(hours) {
             case 6:
              bk = Math.floor(bk * 0.67);
              color= 'green';
              break;
             case 7:
              bk = Math.floor(bk * 0.61);
              color= 'green';
              break;
             case 8:
              if (minutes <= 30) {
                bk = Math.floor(bk * 0.53);
                color = 'green';
              } else {
                bk = Math.floor(bk * 0.45);
                color = 'green';
              };
              break;
             case 9:
              bk = Math.floor(bk * 0.35);
              color= '#ffb300';
              break;
             case 10:
              bk = Math.floor(bk * 0.21);
              color = '#ffb300';
              break;
             case 11:
              bk = Math.floor(bk * 0.20);
              color= '#ffb300';
              break;
             case 12:
              bk = Math.floor(bk * 0.19);
              color= 'red';
              break;
             case 13:
              bk = Math.floor(bk * 0.18);
              color= 'red';
              break;
             case 14:
              bk = Math.floor(bk * 0.18);
              color= 'red';
              break;
             case 15:
              bk = Math.floor(bk * 0.19);
              color= 'red';
              break;
             case 16:
              bk = Math.floor(bk * 0.20);
              color= '#ffb300';
              break;
             case 17:
              bk = Math.floor(bk * 0.21);
              color= '#ffb300';
              break;
             case 18:
               bk = Math.floor(bk * 0.22);
               color= '#ffb300';
               break;
             case 19:
               bk = Math.floor(bk * 0.22);
               color= '#ffb300';
               break;
             case 20:
               bk = Math.floor(bk * 0.40);
               color= 'green';
               break;
             case 21:
               bk = Math.floor(bk * 0.55);
               color= 'green';
               break;
             case 22:
               bk = Math.floor(bk * 0.62);
               color= 'green';
               break;
             case 23:
               bk = Math.floor(bk * 0.68);
               color= 'green';
               break;
             case 0:
             case 1:
             case 2:
             case 3:
             case 4:
             case 5:
               bk = Math.floor(bk * 0.68);
               color= 'green';
               break;
           }
           break;
      case 4:
         switch(hours) {
           case 6:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 6) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 0) { bk = Math.floor(bk * 0.15); color = 'red'; };
            break;
           case 7:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 6) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 0) { bk = Math.floor(bk * 0.15); color = 'red'; };
            break;
           case 8:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 0) { bk = Math.floor(bk * 0.15); color = 'red'; };
            break;
           case 9:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.15); color = 'red'; };
            break;
           case 10:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.20); color = '#ffb300'; };
            break;
           case 11:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.20); color = '#ffb300'; };
            break;
           case 12:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.20); color = '#ffb300'; };
            break;
           case 13:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.35); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.35); color = '#ffb300'; };
            break;
           case 14:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.35); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.35); color = '#ffb300'; };
            break;
           case 15:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.35); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.35); color = '#ffb300'; };
            break;
           case 16:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.40); color = 'green'; };
            if (day = 6) { bk = Math.floor(bk * 0.35); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            break;
           case 17:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.20); color = '#ffb300'; };
            if (day = 6) { bk = Math.floor(bk * 0.3); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            break;
           case 18:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.20); color = '#ffb300'; };
            if (day = 6) { bk = Math.floor(bk * 0.3); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            break;
           case 19:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.20); color = '#ffb300'; };
            if (day = 6) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.20); color = '#ffb300'; };
            break;
           case 20:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.10); color = 'red'; };
            if (day = 6) { bk = Math.floor(bk * 0.25); color = '#ffb300'; };
            if (day = 0) { bk = Math.floor(bk * 0.20); color = '#ffb300'; };
            break;
           case 21:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.10); color = 'red'; };
            if (day = 6) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 0) { bk = Math.floor(bk * 0.10); color = 'red'; };
            break;
           case 22:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.10); color = 'red'; };
            if (day = 6) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 0) { bk = Math.floor(bk * 0.10); color = 'red'; };
            break;
           case 23:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.10); color = 'red'; };
            if (day = 6) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 0) { bk = Math.floor(bk * 0.10); color = 'red'; };
            break;
           case 0:
           case 1:
           case 2:
           case 3:
           case 4:
           case 5:
            if ((day >= 1) && (day <=5)) { bk = Math.floor(bk * 0.10); color = 'red'; };
            if (day = 6) { bk = Math.floor(bk * 0.15); color = 'red'; };
            if (day = 0) { bk = Math.floor(bk * 0.10); color = 'red'; };
            break;
         }
         break;
      }

      geoObjects[i] = new ymaps.Placemark([cord_1, cord_2], {
              balloonContent: adress + ' <br \/> Парковочных мест: ' + bk_save + ' <br \/> Прогноз свободных мест: ' + bk
          }, {
              iconColor: color
          });
     };

    clusterer.add(geoObjects);
    myMap.geoObjects.add(clusterer);

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

});