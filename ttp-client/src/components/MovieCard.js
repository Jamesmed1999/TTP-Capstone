//shows in home

// dependecy 'moment' does the date and time thing for createdAt
import React, { useContext } from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';
/* import LikeButton from '../components/LikeButton';
import DeleteButton from '../components/DeleteButton';
import MyPopup from '../utils/MyPopup'; */ //display of moviecards; this will be in the singlemovie.js maybe?

//similar to gifcard in assignment-7

function MovieCard() {

  const { user } = useContext(AuthContext);

  return (
    <Card>
      <Image src='https://images-na.ssl-images-amazon.com/images/I/61OUGpUfAyL._AC_SL1000_.jpg' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Avatar</Card.Header>
        {/* <Card.Meta>
          <span className='date'>2009</span>
        </Card.Meta>
        <Card.Description>
          Def not description; too little space; runtime? or maybe just name and likes, i was thinking this too
        </Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='thumbs up' />
          10 likes // or genre or whatever
        </a>
      </Card.Content>
    </Card>
  )
}

export default MovieCard;