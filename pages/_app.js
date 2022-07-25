import Head from 'next/head'
import Script from 'next/script'
import appConfig from '../config.json';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



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

  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#efbc49',
      },
      secondary: {
        main: '#363739',
      },
      background: {
        default: '#f5f5ef',
        paper: '#ffffff',
      },
    },
    typography: {
      fontFamily: `'Fredoka', sans-serif`,
      h1: {
        fontFamily: `'Fredoka', sans-serif`,
        fontWeight: 600,
      },
    },
  });
     
  return (
      <>  
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
        <GlobalStyle />
        <Script id="claritytracking"></Script>
        dangerouslySetInnerHTML={
                      {
          __html: `
              (function(c,l,a,r,i,t,y){
                  c[a] = c[a] || function () { (c[a].q = c[a].q || 
                  []).push(arguments) };
                  t=l.createElement(r);
                  t.async=1;
                  t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "cxb0i3shdz");`,
        }}
      <Script/>;
      </>
  );
}

