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
    let day = now.getDay();
    let color_bk;
    let color_sk;
    let color_ttk;
    let color_out;
    let place;

       switch(hours) {
         case 6:
           bk = Math.ceil(bk * 0.65);
           color_bk= 'green';
           break;
         case 7:
           bk = Math.ceil(bk * 0.55);
           color_bk= 'green';
           break;
         case 8:
           if (minutes <= 30) {
             bk = Math.ceil(bk * 0.40);
             color_bk = 'green';
           } else {
             bk = Math.ceil(bk * 0.25);
             color_bk = 'yellow';
           };
           break;
         case 9:
          bk = Math.ceil(bk * 0.18);
          color_bk= 'red';
          break;
         case 10:
          bk = Math.ceil(bk * 0.03);
          color_bk = 'red';
          break;
         case 11:
          bk = Math.ceil(bk * 0.015);
          color_bk= 'red';
          break;
         case 12:
          bk = Math.ceil(bk * 0.015);
          color_bk= 'red';
          break;
         case 13:
          bk = Math.ceil(bk * 0.015);
          color_bk= 'red';
          break;
         case 14:
          bk = Math.ceil(bk * 0.015);
          color_bk= 'red';
          break;
         case 15:
          bk = Math.ceil(bk * 0.015);
          color_bk= 'red';
          break;
         case 16:
          bk = Math.ceil(bk * 0.015);
          color_bk= 'red';
          break;
         case 17:
          bk = Math.ceil(bk * 0.015);
          color_bk= 'red';
          break;
         case 18:
           bk = Math.ceil(bk * 0.015);
           color_bk= 'red';
           break;
         case 19:
          bk = Math.ceil(bk * 0.05);
          color_bk= 'red';
          break;
         case 20:
           bk = Math.ceil(bk * 0.15);
           color_bk= 'red';
           break;
         case 21:
          bk = Math.ceil(bk * 0.24);
          color_bk= 'yellow';
          break;
         case 22:
           bk = Math.ceil(bk * 0.30);
           color_bk= 'yellow';
           break;
         case 23:
          bk = Math.ceil(bk * 0.40);
          color_bk= 'green';
          break;
         case 0:
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
           bk = Math.ceil(bk * 0.75);
           color_bk= 'green';
           break;
       }
     switch(hours) {
       case 6:
         sk = Math.ceil(sk * 0.55);
         color_sk= 'green';
         break;
       case 7:
         sk = Math.ceil(sk * 0.40);
         color_sk= 'yellow';
         break;
       case 8:
         sk = Math.ceil(sk * 0.27);
         color_sk = 'yellow';
         break;
       case 9:
        sk = Math.ceil(sk * 0.25);
        color_sk= 'yellow';
        break;
       case 10:
        sk = Math.ceil(sk * 0.20);
        color_sk = 'yellow';
        break;
       case 11:
        sk = Math.ceil(sk * 0.15);
        color_sk= 'red';
        break;
       case 12:
        sk = Math.ceil(sk * 0.15);
        color_sk= 'red';
        break;
       case 13:
        sk = Math.ceil(sk * 0.15);
        color_sk= 'red';
        break;
       case 14:
        sk = Math.ceil(sk * 0.10);
        color_sk= 'red';
        break;
       case 15:
        sk = Math.ceil(sk * 0.15);
       color_sk= 'red';
       break;
       case 16:
        sk = Math.ceil(sk * 0.15);
       color_sk= 'red';
       break;
       case 17:
        sk = Math.ceil(sk * 0.15);
       color_sk= 'red';
       break;
       case 18:
         sk = Math.ceil(sk * 0.15);
        color_sk= 'red';
        break;
       case 19:
        sk = Math.ceil(sk * 0.22);
         color_sk= 'yellow';
         break;
       case 20:
         sk = Math.ceil(sk * 0.27);
          color_sk= 'yellow';
          break;
       case 21:
        sk = Math.ceil(sk * 0.30);
        color_sk= 'yellow';
        break;
       case 22:
         sk = Math.ceil(sk * 0.42);
        color_sk= 'green';
        break;
       case 23:
        sk = Math.ceil(sk * 0.52);
         color_sk= 'green';
         break;
       case 0:
       case 1:
       case 2:
       case 3:
       case 4:
       case 5:
         sk = Math.ceil(sk * 0.52);
          color_sk= 'green';
          break;
     }
       switch(hours) {
         case 6:
           ttk = Math.ceil(ttk * 0.67);
          color_ttk= 'green';
          break;
         case 7:
           ttk = Math.ceil(ttk * 0.61);
            color_ttk= 'green';
            break;
         case 8:
           if (minutes <= 30) {
             ttk = Math.ceil(ttk * 0.53);
               color_ttk = 'green';
           } else {
             ttk = Math.ceil(ttk * 0.45);
              color_ttk = 'green';
           };
           break;
         case 9:
          ttk = Math.ceil(ttk * 0.35);
           color_ttk= 'yellow';
           break;
         case 10:
          ttk = Math.ceil(ttk * 0.21);
           color_ttk = 'yellow';
           break;
         case 11:
          ttk = Math.ceil(ttk * 0.20);
           color_ttk= 'yellow';
           break;
         case 12:
          ttk = Math.ceil(ttk * 0.19);
           color_ttk= 'red';
           break;
         case 13:
          ttk = Math.ceil(ttk * 0.18);
          color_ttk= 'red';
          break;
         case 14:
          ttk = Math.ceil(ttk * 0.18);
           color_ttk= 'red';
           break;
         case 15:
          ttk = Math.ceil(ttk * 0.19);
          color_ttk= 'red';
          break;
         case 16:
          ttk = Math.ceil(ttk * 0.20);
           color_ttk= 'yellow';
           break;
         case 17:
          ttk = Math.ceil(ttk * 0.21);
          color_ttk= 'yellow';
          break;
         case 18:
           ttk = Math.ceil(ttk * 0.22);
            color_ttk= 'yellow';
            break;
         case 19:
          ttk = Math.ceil(ttk * 0.22);
           color_ttk= 'yellow';
           break;
         case 20:
           ttk = Math.ceil(ttk * 0.40);
            color_ttk= 'green';
            break;
         case 21:
          ttk = Math.ceil(ttk * 0.55);
          color_ttk= 'green';
          break;
         case 22:
           ttk = Math.ceil(ttk * 0.62);
          color_ttk= 'green';
          break;
         case 23:
          ttk = Math.ceil(ttk * 0.68);
           color_ttk= 'green';
           break;
         case 0:
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
           ttk = Math.ceil(ttk * 0.68);
           color_ttk= 'green';
           break;
       }
     switch(hours) {
       case 6:
         if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         if (day = 6) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         if (day = 0) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         break;
       case 7:
         if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         if (day = 6) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         if (day = 0) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         break;
       case 8:
         if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'yellow'; };
         if (day = 6) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         if (day = 0) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         break;
       case 9:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'green'; };
        if (day = 6) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.15); color_out = 'red'; };
        break;
       case 10:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'green'; };
        if (day = 6) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.20); color_out = 'yellow'; };
        break;
       case 11:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'green'; };
        if (day = 6) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.20); color_out = 'yellow'; };
        break;
       case 12:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'green'; };
        if (day = 6) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.20); color_out = 'yellow'; };
        break;
       case 13:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'green'; };
        if (day = 6) { out = Math.ceil(out * 0.35); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.35); color_out = 'yellow'; };
        break;
       case 14:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'green'; };
        if (day = 6) { out = Math.ceil(out * 0.35); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.35); color_out = 'yellow'; };
        break;
       case 15:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'green'; };
        if (day = 6) { out = Math.ceil(out * 0.35); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.35); color_out = 'yellow'; };
        break;
       case 16:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.40); color_out = 'green'; };
        if (day = 6) { out = Math.ceil(out * 0.35); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
        break;
       case 17:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.20); color_out = 'yellow'; };
        if (day = 6) { out = Math.ceil(out * 0.3); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
        break;
       case 18:
         if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.20); color_out = 'yellow'; };
         if (day = 6) { out = Math.ceil(out * 0.3); color_out = 'yellow'; };
         if (day = 0) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
         break;
       case 19:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.20); color_out = 'yellow'; };
        if (day = 6) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
        if (day = 0) { out = Math.ceil(out * 0.20); color_out = 'yellow'; };
        break;
       case 20:
         if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = 'red'; };
         if (day = 6) { out = Math.ceil(out * 0.25); color_out = 'yellow'; };
         if (day = 0) { out = Math.ceil(out * 0.20); color_out = 'yellow'; };
         break;
       case 21:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = 'red'; };
        if (day = 6) { out = Math.ceil(out * 0.15); color_out = 'red'; };
        if (day = 0) { out = Math.ceil(out * 0.10); color_out = 'red'; };
        break;
       case 22:
         if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = 'red'; };
         if (day = 6) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         if (day = 0) { out = Math.ceil(out * 0.10); color_out = 'red'; };
         break;
       case 23:
        if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = 'red'; };
        if (day = 6) { out = Math.ceil(out * 0.15); color_out = 'red'; };
        if (day = 0) { out = Math.ceil(out * 0.10); color_out = 'red'; };
        break;
       case 0:
       case 1:
       case 2:
       case 3:
       case 4:
       case 5:
         if ((day >= 1) && (day <=5)) { out = Math.ceil(out * 0.10); color_out = 'red'; };
         if (day = 6) { out = Math.ceil(out * 0.15); color_out = 'red'; };
         if (day = 0) { out = Math.ceil(out * 0.10); color_out = 'red'; };
         break;
     }

        myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([100, 100], {
            balloonContent: '   '
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#008000'
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
