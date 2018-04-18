/**
 * Created by Josh on 11/15/2017.
 */

import React, {Component} from 'react'

const Logo = () => {
  return (
      <a href={'http://riceapps.org/'} target={'_blank'} style={{position: 'fixed', bottom: 10, right: 20}}>
          <img src={"https://riceapps.org/assets/logos/riceapps-logo-dark.svg"} height={40} />
      </a>
  )
}

export default Logo
