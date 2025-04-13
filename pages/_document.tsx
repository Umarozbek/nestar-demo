import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // console.log("DOCUMENT -  PAGES ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index.follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/* Search Engine Optimization - SEO */}
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}
        />

        {/* SEO - Search angine optomization*/}
        <meta
          name="description"
          content={
            "Buy and Sell properties anywhere anytime in South Korea. |" +
            "대한민국 언제 어디서나 부동산을 사고 필 수 있씁니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

/*
_document.tsx 
1. as Searching Engine Optimization uchun yordamga keladi.
2. metadate lar yaratish uchun ishlatladi




Metadata - link junatganda unga qoshilib content haqida malumot va properties
 */