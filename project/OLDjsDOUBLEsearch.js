function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.74, 37.58],
        zoom: 13,
        controls: []
    });

    var actualProvider = new ymaps.traffic.provider.Actual();
    actualProvider.setMap(myMap);
    actualProvider.state.events.add('change', function () {
    console.log(actualProvider.state.get('level'))});

    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search',
            size: 'small',
            noPopup: 'true',
            float: 'bottom',
            noPlacemark: 'true'
        }
    });

    var listItems = [
      new ymaps.control.ListBoxItem('Москва'),
      new ymaps.control.ListBoxItem('Санкт-Петербург')
    ],

    myListBox = new ymaps.control.ListBox({
      data: {
        content: 'Выбрать город'
      },
      items: listItems
    });

myMap.controls.add(myListBox);
myMap.controls.add('zoomControl');
myMap.controls.add('rulerControl', {
    scaleLine: false
});
myMap.controls.add('fullscreenControl');
myMap.controls.add('geolocationControl');
myMap.controls.add('typeSelector');
myMap.controls.add(searchControl);
    searchControl.search('Автомобильная парковка');

    searchControl.events.add('resultselect', function (e) {
        var results = searchControl.getResultsArray();
        for (var i = 0; i < 4; i++) {
          console.log("Индекс выбранного элемента: " + results[i].geometry.getCoordinates());
        }

        var myCollection = new ymaps.GeoObjectCollection({}, {
            preset: 'islands#redCircleIcon', //все метки красные
            draggable: false // и их можно перемещать
        });

        for (var i = 0; i < results.length; i++) {
          var selected = i;
          myCollection.add(new ymaps.Placemark(results[selected].geometry.getCoordinates()));
        }

        myMap.geoObjects.add(myCollection);
        })

myMap.controls.add('searchControl', {
    float: 'left',
    provider: 'yandex#search'
});
}

ymaps.ready(init);
