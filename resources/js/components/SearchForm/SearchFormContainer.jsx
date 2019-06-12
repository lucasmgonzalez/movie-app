import styled from 'styled-components';
import { setSizes } from '../../helpers/mixins';

const Container = styled.form`
  display: flex;

  margin: ${({margin}) => setSizes(margin)};
  padding: 6px 6px 6px 12px;

  background-color: rgba(255,255,255, 0.2);
`;

Container.defaultProps = {
  margin: [0]
};

export default Container;
