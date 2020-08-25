import superagent from 'superagent'
import request from 'superagent'

export const LOGGED_IN = "LOGGED_IN"
export const CURRENT_USER = 'CURRENT_USER'
export const USER_PROFILES = 'USER_PROFILES'
export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENT_DETAILS = 'GET_EVENT_DETAILS'
export const GET_CONTENT = 'GET_CONTENT'
export const GET_TEAMS = 'GET_TEAMS'
export const CHANGE_USER_AVATAR = 'CHANGE_USER_AVATAR'

export const baseUrl = 'http://localhost:4000'

function loggedIn(jwt) {
  return {
    type: LOGGED_IN,
    payload: jwt
  }
}

export function login(username, email, password) {
  return async function (dispatch) {
    try {
      const body = { username, email, password }
      const response = await superagent
        .post(`${baseUrl}/login`)
        .send(body)
      const action = loggedIn(response.body)
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

function currentUser(payload) {
  return {
    type: CURRENT_USER,
    payload
  }
}

export const getCurrentUser = () => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request.get(`${baseUrl}/user`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      const action = currentUser(response.body);
      dispatch(action);
    });
};

function allUserProfiles(payload) {
  return {
    type: USER_PROFILES,
    payload
  }
}

export const getUserProfiles = () => (dispatch, getState) => {
  const state = getState()
  const { userProfiles, user } = state
  if (!userProfiles) {
    request(`${baseUrl}/user`)
      .set('Authorization', `Bearer ${user.jwt}`)
      .then(response => {
        const action = allUserProfiles(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

function allEvents(payload) {
  return {
    type: GET_EVENTS,
    payload
  }
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState()
  const { event } = state
  if (!event.length) {
    request(`${baseUrl}/event`)
      .then(response => {
        const action = allEvents(response.body)
        dispatch(action)
      })
      .catch(console.error)
  }
}

function allEventDetails(payload) {
  return {
    type: GET_EVENT_DETAILS,
    payload
  }
}

export const getEventDetails = (id) => (dispatch) => {
  request(`${baseUrl}/event/${id}`)
    .then(response => {
      const action = allEventDetails(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

function allContent(payload) {
  return {
    type: GET_CONTENT,
    payload
  }
}

export const getAllContent = () => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request(`${baseUrl}/content`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      const action = allContent(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

function allTeams(payload) {
  return {
    type: GET_TEAMS,
    payload
  }
}

export const getAllTeams = () => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request(`${baseUrl}/teams`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .then(response => {
      const action = allTeams(response.body)
      dispatch(action)
    })
    .catch(console.error)
}

function changeUserAvatar(payload) {
  return {
    type: CHANGE_USER_AVATAR,
    payload
  }
}

export const changeAvatar = (avatarURL, id) => (dispatch, getState) => {
  const state = getState()
  const { user } = state
  request
    .put(`${baseUrl}/user/${id}`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(avatarURL)
    .then(response => {
      const action = changeUserAvatar(response.body)
      dispatch(action)
    })
    .catch(console.error)
}