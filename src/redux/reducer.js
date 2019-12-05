import { LOGIN_SUCESS, LOGIN_FAILED, PLANET_DATA, ADMIN_NAME, UPDATE_PLANET_DATA } from "./actions/actionsConstants";


const initialState = {
    LoginData: [],
    planetData: [],
    filteredPlanet: [],
    loginFailed: false,
    loginSuccess:false,
    adminName:''
};

const starWarReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCESS:
            return {
                ...state, loginSuccess: action.payload
            }
        case LOGIN_FAILED:
            return {
                ...state, loginFailed: action.payload
            }
        case ADMIN_NAME:
            return {
                ...state, adminName: action.payload
            }
        case PLANET_DATA:
            return {
                ...state, planetData: Object.assign([], action.payload), filteredPlanet: Object.assign([], action.payload)
            }
        case UPDATE_PLANET_DATA:
            return {
                ...state, filteredPlanet: Object.assign([], action.payload)
            }
        default:
            return state;
    }
}

export default starWarReducer;