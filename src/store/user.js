import { handleActions } from 'redux-actions'

const INIT_USER = 'user/INIT_USER'
const UPDATE_USER = 'user/UPDATE_USER'

export const userInit = (userInfo) => {
  return {
    type: INIT_USER,
    userInfo
  }
}

export const userUpdate = (userInfo) => {
  return {
    type: UPDATE_USER,
    userInfo
  }
}

export default handleActions({
  [INIT_USER] (state, { userInfo }) {
    return {
      ...state,
      userInfo
    }
  },
  [UPDATE_USER] (state, { userInfo }) {
    return {
      ...state,
      userInfo
    }
  }
}, {
  userInfo: {}
})
