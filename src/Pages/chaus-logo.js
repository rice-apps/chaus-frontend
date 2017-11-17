/**
 * Created by Josh on 11/15/2017.
 */

import React, {Component} from 'react'

const Logo = () => {
  return (
      <a href={'http://riceapps.org/'} target={'_blank'} style={{position: 'fixed', bottom: 10, right: 20}}>
          <img src={"http://riceapps.org/images/logo-02.png"} height={40} />
      </a>
  )
}

export default Logo
