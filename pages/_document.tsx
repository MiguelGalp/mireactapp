import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { IconContext } from 'react-icons'
import { CSSTransitionGroup } from 'react-transition-group'



export default class MyDocument extends Document {
  render() {
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
          
          </Head>

          <body>
            <script src='noflash.js' />
            
            <Main />
            
            <NextScript />
	    
            

          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
