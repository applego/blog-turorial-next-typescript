import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import { theme } from "src/logic/styles";
import styled from "@emotion/styled";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>NextJS Blog</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/mountain_26f0-fe0f.png"
        />
      </Head>

      <Container>
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
