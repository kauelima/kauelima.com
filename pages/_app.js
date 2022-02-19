import appConfig from '../config.json';

function GlobalStyle() {
  return (
    <style global jsx>{`
    root{
      display: "flex";
      flexDirection: "column";
      justifyContent: "center";
    }
    html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${appConfig.theme.colors['yellow']};
  color: ${appConfig.theme.colors['darkGray']};

}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

    
  `}</style>
  );
}

export default function MyApp({ Component, pageProps }) {

     
  return (
      <>
          <Component {...pageProps} />
          <GlobalStyle />
      </>
  );
}

