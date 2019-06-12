import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

import HomeContainer from '../components/HomeContainer';
import SearchForm from '../components/SearchForm';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';

const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  padding: 0;

  list-style: none;
`;

MovieList.Item = styled.li`
  width: 50%;
  border-radius: 4px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255,255,255,0.2);
  }

  @media(min-width: 768px) {
    width: 25%;
  }

  @media(min-width: 1024px) {
    width: 20%;
  }
`;

const Home = () => {
  const [movies, setMovies] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  const [query, setQuery] = React.useState('');
  const [searchResult, setSearchResult] = React.useState(null);

  React.useEffect(() => {
    axios
      .get('/api/movies/upcoming')
      .then(({data}) => {
        setLoading(false);
        setMovies(data)
      });
  },[]);

  const handleSearch = searchQuery => {
    if (!searchQuery) {
      setSearchResult(null);
      return;
    }

    setLoading(true);
    setQuery(searchQuery);

    axios
      .get(`/api/movies/search?query=${encodeURI(searchQuery)}`)
      .then(({data}) => {
        setLoading(false);
        setSearchResult(data.results);
      })
  };

  const hasSearchResult = searchResult !== null;

  return (
    <HomeContainer>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <SearchForm onSearch={handleSearch} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 style={{color: '#fff'}}>{hasSearchResult ? `Results for '${query}'` : 'Upcoming movies'}</h1>
          <MovieList>
            {(hasSearchResult ? searchResult : movies).map(movie => (
              <MovieList.Item key={movie.id}>
                <MovieCard
                  as={Link}
                  to={`/movie/${movie.id}`}
                  movie={movie}
                />
              </MovieList.Item>
            ))}
          </MovieList>
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
