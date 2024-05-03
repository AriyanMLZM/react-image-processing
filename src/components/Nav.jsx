import React from 'react'

import { Tab } from './'

const Nav = ({ props }) => {
  return (
    <nav className="flex mt-12 justify-around w-[350px]">
      <Tab
        props={{
          active: props.tab === 0 ? true : false,
          ind: 0,
          text: 'Gray',
          ...props,
        }}
      />
      <Tab
        props={{
          active: props.tab === 1 ? true : false,
          ind: 1,
          text: 'BW',
          ...props,
        }}
      />
      <Tab
        props={{
          active: props.tab === 2 ? true : false,
          ind: 2,
          text: 'Fourier',
          ...props,
        }}
      />
      <Tab
        props={{
          active: props.tab === 3 ? true : false,
          ind: 3,
          text: 'Contrast',
          ...props,
        }}
      />
    </nav>
  )
}

export default Nav
