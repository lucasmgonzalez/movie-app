import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
`;

const MoviePoster = styled.img`
  width: 80%;

  @media(min-width: 768px) {
    width: 60%;
  }
`;
const MovieTitle = styled.h1`
  color: #fff;
  text-align: center;
`
const MovieOverview = styled.p`
  padding: 10px 16px;

  color: #fff;
`;

const MoviePage = ({ match: { params: { id } } }) => {
  const movie = useRetrieveMovie(id);

  if (!movie) {
    return <Loader color="#000"/>
  }

  const releaseDate = new Date(movie.release_date);

  return (
    <MoviePageContainer>
      <MoviePoster src={`http://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt={`Pôster de ${movie.title}`}/>

      <MovieTitle>{movie.title}</MovieTitle>
      <h4 style={{padding: '10px 16px', backgroundColor: 'white'}}>{releaseDate.toLocaleDateString('pt-BR')}</h4>

      <MovieOverview>
        {movie.overview}
      </MovieOverview>
    </MoviePageContainer>
  )
};

export default MoviePage;
