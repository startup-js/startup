import React from 'react';
import classNames from 'classnames';
import './global.scss';
import { firePageView } from 'lib/gtag';

class DefaultLayout extends React.Component {
  state = {
    isBannerClosed: false
  };

  componentDidMount() {
    firePageView(window.location.pathname);
  }

  render() {
    return (
      <div>
        <div className={ classNames('body-wrap', { 'sponsor-banner-visible': !this.state.isBannerClosed }) }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
