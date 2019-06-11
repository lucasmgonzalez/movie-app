import React from 'react';
import styled from 'styled-components';

import Container from './SearchFormContainer';
import Input from './SearchFormInput';
import useDebounce from '../../hooks/useDebounce';

import magnifierIcon from '../../../icons/magnifier.svg';

const SubmitButton = styled.button.attrs({
  type: 'button'
})`
  padding: 6px 8px;

  background-color: transparent;
  border: 0;

  outline: none;
`;

const SearchForm = ({onSearch, ...props}) => {
  const [query, setQuery] = React.useState('');

  const handleChange = ev => setQuery(ev.target.value);

  const debouncedQuery = useDebounce(query, 500);

  React.useEffect(() => {
    const cleanUp = onSearch(debouncedQuery);

    if (typeof cleanUp === 'function') {
      return cleanUp;
    }
  }, [debouncedQuery]);

  return (
    <Container onSubmit={ev => ev.preventDefault()} {...props}>
      <Input name="query" value={query} onChange={handleChange}/>
      <SubmitButton>
        <img width="16px" height="16px" src={magnifierIcon} alt="Procurar"/>
      </SubmitButton>
    </Container>
  );
}

export default SearchForm;
