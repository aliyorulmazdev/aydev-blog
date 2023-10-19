import ThemeProvider from 'providers/ThemeProvider';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import 'styles/index.scss';
import "react-toggle/style.css"
import React from 'react';

export default ({Component, pageProps}) =>
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>