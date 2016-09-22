import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import config from 'config';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  };

  render() {
    const {assets, component, store} = this.props;
    //noinspection JSUnresolvedFunction
    const content = component ? ReactDOM.renderToString(component) : '';
    const head = Helmet.rewind();

    const js_domain = config.js_domain;

    return (
      <html lang="en-us">
        <head>
          <meta charSet='utf-8'/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
          <meta name="referrer" content="unsafe-url"/>
          <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>

          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          {process.env.NODE_ENV === 'development' ? <div id="devtools"/> : ''}
          <script dangerouslySetInnerHTML={{__html: `window.init=${serialize(store.getState())};`}} charSet="UTF-8"/>
          <script src={`/js/bundle.js`} charSet="UTF-8" async="async"/>
        </body>
      </html>
    );
  }
}

export default Html