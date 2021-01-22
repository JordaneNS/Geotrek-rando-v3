import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import { MapResults } from 'modules/mapResults/interface';
import { TreksList } from 'domain/Trek/Trek';
import { POIIcon } from './POIIcon';
import { Popup } from './Popup';

import 'leaflet/dist/leaflet.css';

export type PropsType = {
  points?: MapResults;
  segments?: TreksList | null;
};

const Map: React.FC<PropsType> = props => {
  return (
    <MapContainer
      center={[44.748717, 6.1189669]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.points !== undefined &&
        props.points.map(
          point =>
            point.location !== null && (
              <Marker key={point.id} position={[point.location.y, point.location.x]} icon={POIIcon}>
                <Popup
                  place="Saint-Etienne-du-Valdonnez"
                  title="Balade au pays des menhirs de Brocéliandes avec un titre très long"
                  imageUrl="https://geotrekdemo.ecrins-parcnational.fr/media/paperclip/trekking_trek/501/019264_hd_1.jpg"
                />
              </Marker>
            ),
        )}
      {/* {props.points &&
        props.points.length > 0 &&
        props.points.map(point => {
          return (
            <Marker
              key={point.id}
              position={[point.geometry.coordinates[1], point.geometry.coordinates[0]]}
              icon={POIIcon}
            >
              <Popup>
                A pretty CSS3 popup. <br /> For point {point.geometry.coordinates[1]},{' '}
                {point.geometry.coordinates[0]}
              </Popup>
            </Marker>
          );
        })}
      {props.segments &&
        props.segments.length > 0 &&
        props.segments.map(segment => {
          return (
            <Polyline
              key={segment.id}
              positions={segment.geometry.coordinates.map(coordinate => [
                coordinate[1],
                coordinate[0],
              ])}
              color={'red'}
            />
          );
        })} */}
    </MapContainer>
  );
};

export default Map;
