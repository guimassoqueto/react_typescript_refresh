import React from 'react'
import { Child } from './Child'

const color = 'Blue';

function Parent() {
  return (
    <Child color={color}/>
  )
}

export default Parent
