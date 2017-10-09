import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectToStore } from 'Decorators/ConnectDecorators';
import { DropdownButton, MenuItem } from 'Components/Controls';
import WindowService from 'Services/WindowService';
import SessionService from 'Services/SessionService';
import UserUtils from 'Utils/UserUtils';
import { ACCOUNT_URL } from 'Constants/UrlConstants';

import logo from '../../../../Images/logo.png';

class Header extends Component {
  onLogout() {
    SessionService.signOut();

    WindowService.redirect(ACCOUNT_URL);
  }

  renderMenuItems() {
    const links = UserUtils.defineMenuLinks(this.context.rights);
    const menuItems = _.map(
        _.sortBy(links, 'name'),
        ({ url, name }) => <MenuItem key={name} href={url} target="_blank">{name}</MenuItem>
      );

    menuItems.push(<MenuItem key="exit" onSelect={this.onLogout}>Выход</MenuItem>);

    return menuItems;
  }

  render() {
    const { moduleName, children, user, settings } = this.props;
    const userName = UserUtils.defineSurnameWithInitials(user);

    return (
      <header className="layout-header">
        <div className="top-block">
          <div className="left-block">
            <a className="logo" href="http://www.eye-kaluga.com" target="__blank">
              <img src={logo} alt="Логотип МНТК" />
            </a>
            <div className="info-wrap">
              <div className="project-name">МНТК {'“Микрохирургия глаза”'}</div>
              <div className="module-name">{moduleName || 'Электронная очередь'}</div>
            </div>
          </div>
          {children}
          {!user ? null : (
            <div className="user-info">
              {!settings ? null : React.cloneElement(settings, { className: 'settings' })}
              <DropdownButton
                id="user-info-dropdown"
                title={<span title={userName}>{userName}</span>}
                pullRight
              >
                {this.renderMenuItems()}
              </DropdownButton>
            </div>
          )}
        </div>
      </header>
    );
  }
}

Header.contextTypes = {
  rights: PropTypes.object
};

Header.propTypes = {
  moduleName: PropTypes.string,
  user: PropTypes.object,
  children: PropTypes.node,
  settings: PropTypes.node
};

export default connectToStore({ mapStateToProps: ({ user }) => ({ user: user.info }) })(Header);
