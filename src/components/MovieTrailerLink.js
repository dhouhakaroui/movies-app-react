import React from 'react';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const MovieTrailerLink=({match,movies})=>{
  let src= movies.find(el => el.title === match.params.title).link;
  return ( 
  <div>
    <Link to="/">
      <Button style={{margin:20 }} variant="secondary"> Back to the home page</Button>
    </Link>   
    <div  >      
      <iframe width="900" height="500" src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
  );
}
export default MovieTrailerLink;