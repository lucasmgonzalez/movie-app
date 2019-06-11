import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  color: ${({color}) => color};
`;

const Loader = props => {
  const [dots, setDots] = React.useState('.');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDots(oldState => oldState === '...' ? '.' : oldState + '.');
    }, 500);

    return () => clearInterval(interval);
  });

  return (
    <LoaderContainer {...props}>
      Loading{dots}
    </LoaderContainer>
  )
};

Loader.defaultProps = {
  color: '#fff'
};

export default Loader;
