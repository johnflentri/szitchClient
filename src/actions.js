import superagent from 'superagent'
import request from 'superagent'

export const LOGGED_IN = "LOGGED_IN"
export const CURRENT_USER = 'CURRENT_USER'
export const USER_PROFILES = 'USER_PROFILES'
export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENT_DETAILS = 'GET_EVENT_DETAILS'

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