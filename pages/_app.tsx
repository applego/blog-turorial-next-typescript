import Head from "next/head";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Blog</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/mountain_26f0-fe0f.png"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
