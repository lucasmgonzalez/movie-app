import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Loader from '../components/Loader';

const useRetrieveMovie = id => {
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`/api/movie/${id}`)
      .then(({data}) => setMovie(data))
  }, [id]);

  return movie;
}

const MoviePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  padding: 15px 25px;

  background-color: #2b2b2b;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;

const Poster = styled.img`
  width: 80%;

  @media(min-width: 768px) {
    width: 40%;
    padding: 0 15px;
  }
`;
const Title = styled.h1`
  color: #fff;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`
const Overview = styled.p`
  color: #fff;
`;

const ReleaseDate = styled.div`
  color: #fff;
  letter-spacing: 1px;
`;

const Genres = styled.p`
  color: #fff;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const MoviePage = ({ match: { params: { id } } }) => {
  const movie = useRetrieveMovie(id);

  if (!movie) {
    return <Loader color="#000"/>
  }

  const releaseDate = new Date(movie.release_date);

  return (
    <MoviePageContainer>
      <Poster src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={`Pôster de ${movie.title}`}/>

      <div>
        <Title>{movie.title}</Title>
        <ReleaseDate>{releaseDate.toLocaleDateString('pt-BR')}</ReleaseDate>

        <Genres>
          {movie.genres.reduce((acc, genre) => [...acc, genre.name], []).join(' | ')}
        </Genres>
        <Overview>
          {movie.overview}
        </Overview>
      </div>
    </MoviePageContainer>
  )
};

export default MoviePage;
