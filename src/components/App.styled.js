import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  margin-right: 10px;

  &.active {
    color: red;
  }
`;
