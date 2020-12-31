import React from 'react';
import {Button ,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const MovieDescription=({match,movies})=> {
  let mov= movies.find(el => el.title === match.params.title);
  console.log({mov})
  return (   
    <div className="desc">
      <Card  className="bg-dark text-white">
        <Card.Img variant="top" src={mov.second_img} style={{ height: '30rem',width: '60rem' }}  />
        <Card.ImgOverlay>
        <Card.Body>
        <Card.Img variant="top" src={mov.main_img} style={{ width: '10rem' }} />
          <Card.Title><h1>{mov.title}</h1></Card.Title>
          <Link to="/">
            <Button  variant="secondary">home page</Button>
          </Link>
          <Link to={`/${mov.title}/${mov.link}`}>
            <Button style={{margin:20 }} variant="secondary">video page</Button>
          </Link> 
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
export default MovieDescription;