import { createSelector } from 'reselect'

export const adminData = createSelector(
  state => state.admin,
  adminState => {
    const { fetchUsersLoader, allUsers } = adminState
    return {
      fetchUsersLoader,
      allUsers,
    }
  }
)
