import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsersInititate } from '../../redux/actionCreators/adminCreators'
import { adminData } from '../../redux/selectors/adminSelector'
import './Admin.css'

const Admin = () => {
  
  const dispatch = useDispatch()
  const { fetchUsersLoader, allUsers } = useSelector(adminData)

  useEffect(() => {
    dispatch(fetchAllUsersInititate())
  },[])

  console.log(fetchUsersLoader)
  console.log(allUsers)
  
  return (
    <div>
      <h2>
        admin panel
      </h2>
      <div>All Users</div>

      <div>Category - Merchants, customers, all users, all products, category wise - products</div>
    </div>
  )
}

export default Admin
