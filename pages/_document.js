import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            defer
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            defer
          />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
            defer
          />
          <style>
            {` 
                body {
                    margin: 0;
                    padding:0;
                    letter-spacing: 0.02rem;
                }
                *, *::after, *::before {
                    box-sizing: border-box;
                }
                ol, ul{
                    margin:0;
                    padding: 0;
                }
                p {
                    margin:0rem 0rem 0.3rem 0rem;
                    word-break: break-word;
                }
                  ::-webkit-scrollbar {
                  width: 8px;
                  border-radius:5px
                }

                /* Track */
                ::-webkit-scrollbar-track {
                  background: #f1f1f1; 
                  border-radius:5px
                }
                
                /* Handle */
                ::-webkit-scrollbar-thumb {
                  background: #636363; 
                  border-radius:5px
                }

                /* Handle on hover */
                ::-webkit-scrollbar-thumb:hover {
                  background: #636363; 
                  border-radius:5px
                  cursor: pointer;
                }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript>Please enable javascript to use our application</noscript>
        </body>
      </Html>
    );
  }
}
