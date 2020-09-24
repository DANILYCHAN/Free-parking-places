function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.65, 37.66],
        zoom: 13,
        controls: []
    });

    // Создадим экземпляр элемента управления «поиск по карте»
    // с установленной опцией провайдера данных для поиска по организациям.
    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });

    myMap.controls.add(searchControl);

    // Программно выполним поиск МИФИ
    searchControl.search('МИФИ');
}

ymaps.ready(init);
