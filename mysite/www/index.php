<html>
<head>
  <title>Test</title>
</head>
<body>
      <?
        function getTrafficPolygons($x, $y, $zoom=21) {
            $response = sendRequest("https://core-jams-rdr-cache.maps.yandex.net/1.1/tiles?trf&l=trj,trje&lang=ru_RU&x=".$x."&y=".$y."&z=".$zoom."&scale=1&tm=".time()."&callback=x_11111_y_22222_z_18_l_trj_tm_1603583560_x_11111_y_22222_z_18_l_trje_tm_1603583560");

            $result = $features = [];

            if(preg_match('/,"features":(\[.*?\])}}\);/', $response, $res)) {
                $features = json_decode($res[1], true);
            }

            foreach($features as $feature) {
                $result[] = [
                    'speed' => $feature['properties']['description'],
                    'coordinates' => $feature['properties']['HotspotMetaData']['RenderedGeometry']['coordinates'] //polygons coordinate
                ];
            }

              return $result;
        }

        function sendRequest($url) {
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                'accept-encoding: none',
                'accept-language: ru',
                'cache-control: max-age=0',
                'sec-fetch-dest: document',
                'sec-fetch-mode: navigate',
                'sec-fetch-site: cross-site',
                'upgrade-insecure-requests: 1',
                'user-agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/71.0.3770.284',
            ));

            $data = curl_exec($ch);
            curl_close($ch);

            return $data;
        }

        function coordinateToTile($coordinate, $zoom, $isLat=true) {
            $coordinate = $coordinate * M_PI / 180.0;
            $a = 6378137;
            $k = 0.0818191908426;

            $z1 = $isLat ? -log(tan(M_PI / 4 + $coordinate / 2) / pow(tan(M_PI / 4 + asin($k * sin($coordinate)) / 2) , $k)) : $coordinate;
            $pix = round((20037508.342789 + $a * $z1) * 53.5865938 / pow(2, 23 - $zoom));

            return round($pix / 256);
        }

        $zoom = 21;
        $lat = "59.921000";
        $lon = "30.313297";
        $y = coordinateToTile($lat, $zoom);
        $x = coordinateToTile($lon, $zoom, false);

        $polygons = getTrafficPolygons($x, $y, $zoom);
        echo "<pre>";
        print_r($polygons);
        echo "</pre>";
    ?>

    <?
        $map_tile_image_src = "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&v=20.10.23-0&x=".$x."&y=".$y."&z=".$zoom."&scale=1&lang=ru_RU&experimental_design=4690276c-aac5-4ab4-a771-9bec44213e17";
        $traffic_tile_image_src = "https://core-jams-rdr-cache.maps.yandex.net/1.1/tiles?trf&l=trf,trfe&lang=ru&x=".$x."&y=".$y."&z=".$zoom."&scale=1&tm=".time()."&experimental_design=4690276c-aac5-4ab4-a771-9bec44213e17";
    ?>

    <img src="<?=$map_tile_image_src?>" />
    <img src="<?=$traffic_tile_image_src?>" />

</body>
</html>
