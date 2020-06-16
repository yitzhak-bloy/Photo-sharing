import React from 'react';

import Avatar from '../../shared/component/IUElemens/Avatar'
import './userItem.css';

const UsersItem = props => {
  return (
    <li className='user-item' >
      <div className='user-item__content' >
        <div className='user-item__image'>
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className='user-item_info'>
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}
          </h3>
        </div>
      </div>
    </li>
  )
}

export default UsersItem;