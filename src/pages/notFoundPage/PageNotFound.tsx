import React, { FC } from 'react'
import {Link } from 'react-router-dom'

interface IProps {}

/**
* @author
* @function @PageNotFound
**/

export const PageNotFound:FC<IProps> = (props) => {
  return (
    <div>
        <h1>404. PageNotFound</h1>
        <Link to="/">Home page</Link>
    </div>

   )
 }
