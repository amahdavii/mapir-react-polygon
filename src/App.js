import React, { useState } from 'react';
import Mapir from 'mapir-react-component';
import 'mapir-react-component/dist/index.css';

const Map = Mapir.setToken({
  transformRequest: url => {
    return {
      url: url,
      headers: {
        'x-api-key':
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYzZjM5MDg5MzM1NTg0OTk5MjZkYzFhMmQ3NjM5MDdmMGIzYWUyYjMyOTJhZTU5YTU1NDYyNmNhZWVhNjFiMGZjZTYxY2UwYTQ3ZTRhNzQ0In0.eyJhdWQiOiIxNTY5OCIsImp0aSI6ImYzZjM5MDg5MzM1NTg0OTk5MjZkYzFhMmQ3NjM5MDdmMGIzYWUyYjMyOTJhZTU5YTU1NDYyNmNhZWVhNjFiMGZjZTYxY2UwYTQ3ZTRhNzQ0IiwiaWF0IjoxNjMzNTA3MTA0LCJuYmYiOjE2MzM1MDcxMDQsImV4cCI6MTYzNjAxMjcwNCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.HoN580U2H8-4XvnR-2BJfomuBBN-Y1eTSLbArRIAN8NLw6cQ9a3JYABZ2_o0S_9Bra4s6dqLbse6o0g7D3x9l81B5a3is2K2nWZXoJjRUSj9i_iULVg36d_XtIrUOTa8SYCeO6qlZDzxt3Q-EJ-UhcaQyJySsDyLZeh7Z4dyWYKYMhD2KFcdIdbju0HqD-v8NAj43r5WoDrR1MCZTlm3V0_ThLR8PiXXt8wN8Dz84RojRvZ-O91RD6hD7fwSnByDpJiIkIyNWJFCk-gVbTL_d-SpAx5mmNFTnaaGYoEYQKPunFMUIrKBPZyG4_HQI2w3ZRAbuEf6A9aZ64jP50PC_w', //Mapir api key
        'Mapir-SDK': 'reactjs',
      },
    };
  },
});
const App = () => {
  const [geojson, setGeojson] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [51.42, 35.75],
              [51.41, 35.72],
              [51.42, 35.72],
              [51.42, 35.75],
            ],
          ],
        },
      },
    ],
  });
  const [geojson2, setGeojson2] = useState({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [51.42, 35.76],
              [51.4, 35.71],
              [51.48, 35.72],
              [51.42, 35.76],
            ],
          ],
        },
      },
    ],
  });
  return (
    <div className="App">
      <Mapir
        center={[51.41, 35.72]}
        minZoom={[13]}
        scrollZoom={false}
        hash={true}
        Map={Map}
        interactive={true}
      >
        <Mapir.GeoJSONLayer
          data={geojson}
          linePaint={{ 'line-color': '#FE8F8F', 'line-width': 2 }}
        />
        <Mapir.GeoJSONLayer
          data={geojson2}
          linePaint={{
            'line-color': '#FE8F8F',
            'line-width': 2,
          }}
          fillPaint={{
            'fill-color': '#FCD2D1',
            'fill-opacity': 0.2,
          }}
        />

        <Mapir.DrawControl
          keybindings={false} //default is true
          touchEnabled={true} //default is true
          boxSelect={false} //default is true
          clickBuffer={4} //default is 2(pixel)
          touchBuffer={30} //default is 25(pixel)
          controls={{ combine_features: false, uncombine_features: false }}
          displayControlsDefault={true} //default is true
          onDrawCreate={e => console.log(e)}
          onDrawDelete={e => console.log(e)}
          onDrawUpdate={e => console.log(e)}
        />
      </Mapir>
    </div>
  );
};
export default App;
