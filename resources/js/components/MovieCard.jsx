import React from 'react';
import styled from 'styled-components';

const MovieCardContainer = styled.div`
  display: inline-block;

  padding: 15px;
  width: 100%;
  height: 100%;

  color: #fff;
  text-decoration: none;
`;

const MovieCardPoster = styled.img`
  width: 100%;
  border-radius: 6px;
`;

const MovieCardDetails = styled.div``;

const MovieCardTitle = styled.p``;

const MovieCard = ({movie, ...props}) => (
  <MovieCardContainer {...props}>
    <MovieCardPoster
      src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
      alt={movie.title}
    />
    <MovieCardDetails>
      <MovieCardTitle>{movie.title}</MovieCardTitle>
    </MovieCardDetails>
  </MovieCardContainer>
);


export default MovieCard;
