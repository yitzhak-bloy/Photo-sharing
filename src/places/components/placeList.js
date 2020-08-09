import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Butten from '../../shared/components/FormElements/Button';
import './PlaceList.css';

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h1>no places found, Maybe creat one?</h1>
          <Butten to="/places/new" >enter place</Butten>
        </Card>
      </div>
    );
  }

  return ( 
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem 
          kay={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;