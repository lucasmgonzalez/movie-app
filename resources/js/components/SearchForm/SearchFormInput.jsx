import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'text'
})`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #fff;

  color: #fff;

  outline: none;
`;

export default Input;
