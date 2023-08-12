import React from 'react'
import { PublicRouter } from '../../Constants/Router.data'
import { Route, Routes } from 'react-router-dom'

function PublicRoutes() {

  return (
    <Routes>
    {PublicRouter.map( (data, index) => <Route key={index} path={data.path} element={ < data.component /> } />  )}
  </Routes>
  )
}

export default PublicRoutes