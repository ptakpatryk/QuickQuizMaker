import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/auth';
import { StyledUnorderedList, StyledListItem, LogoutButton } from './style';

const NavigationItems = ({ isOpen, closeFn }) => {
  const {
    authState: { token },
  } = useAuth();

  return (
    <StyledUnorderedList isOpen={isOpen}>
      <StyledListItem>
        <NavLink onClick={closeFn} title="Home" to="/" exact>
          Home
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink onClick={closeFn} title="Make Quiz" to="/make-quiz">
          Make Quiz
        </NavLink>
      </StyledListItem>
      <StyledListItem>
        <NavLink onClick={closeFn} title="Quizes" to="/library">
          Quizes
        </NavLink>
      </StyledListItem>
      <LogoutButton>
        <NavLink
          onClick={closeFn}
          title="Logout"
          to={token ? '/logout' : '/login'}
        >
          {token ? 'Logout' : 'Sign In'}
        </NavLink>
      </LogoutButton>
    </StyledUnorderedList>
  );
};

NavigationItems.propTypes = {
  isOpen: PropTypes.bool,
  closeFn: PropTypes.func,
};

NavigationItems.defaultProps = {
  isOpen: false,
  closeFn: null,
};

export default NavigationItems;
