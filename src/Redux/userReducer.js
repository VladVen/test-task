const ADD_USERS = 'ADD-USERS'
const REGISTRATION = 'REGISTRATION'
const ADD_TOKEN = 'ADD-TOKEN'

let initialState = {
    users: [],
    userAdded: false,
    token: null
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case(ADD_USERS): {
            return {
                ...state,
                users: action.data
            }
        }
        case(ADD_TOKEN): {
            return {
                ...state,
                token: action.token
            }
        }
        case(REGISTRATION): {
            return {
                ...state,
                userAdded: true
            }
        }
        default:
            return state
    }
}

export const addUsers = (data) => ({
    type: ADD_USERS,
    data
})
export const setToken = (token) => ({
    type: ADD_TOKEN,
    token
})
export const singUp = () => ({
    type: REGISTRATION,
})


export const getUsers = () => async (dispatch) => {
    const response = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
        {
            method: 'GET',
        }
    )
    const data = await response.json()
    if (data.success) {
        dispatch(addUsers(data.users))
    }
}
export const changePage = (page) => async (dispatch) => {
    const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`,
        {
            method: 'GET',
        }
    )
    const data = await response.json()
    if (data.success) {
        dispatch(addUsers(data.users))
    }
}
export const getToken = () => async (dispatch) => {
    const response = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/token',
        {
            method: 'GET',
        }
    )
    const data = await response.json()
    if (data.success) {
        dispatch(setToken(data.token))
    }
}

export const addNewUser = (name, email, phone, position_id, photo) => async (dispatch, getState) => {

    const formData = new FormData();
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('position_id', position_id)
    formData.append('photo', photo)

    const response = await fetch(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users',
        {
            method: 'POST',
            headers: {
                'Token': getState().users.token
            },
            body: formData,

        }
    )
    const data = await response.json()
    if (data.success) {
        dispatch(singUp())
        dispatch(getUsers())
    }
}

export default userReducer


