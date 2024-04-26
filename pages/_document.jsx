import React from "react";
import { CacheProvider } from "@emotion/react";
import Document, { Head, Html, Main, NextScript } from "next/document";
export default class Bazaar extends Document {
  render() {
    return <Html >
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
          <link rel="icon" href="/assets/logo.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Ultra&display=swap" rel="stylesheet"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Lateef:wght@200;300;400;500;600;700;800&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Ultra&display=swap" rel="stylesheet"></link>
      
      
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Dancing+Script:wght@400..700&family=Lateef:wght@200;300;400;500;600;700;800&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Ultra&display=swap" rel="stylesheet"/> 
      
      </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>;
  }
}
