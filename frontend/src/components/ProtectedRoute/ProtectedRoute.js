import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const user = localStorage.getItem('userInfo')

  return (
    <Route {...rest} render={props => {
      if(user) {
        return <Component {...rest}/>
      } else {
        return <Redirect to={
          {
            pathname:'/login',
            state: {
              from: props.location
            }
          }
        }/>
      }
    }}
    />
  )
}

export default ProtectedRoute
