import { LOGIN_SUCESS, LOGIN_FAILED, PLANET_DATA } from "./actions/actionsConstants";


const initialState = {
    LoginData: [],
    planetData:[],
    filteredPlanet:[]
};

const starWarReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCESS:
            return {
                ...state ,loginData:action.payload,loginSuccess:true
            }
        case LOGIN_FAILED:
            return {
                ...state ,loginFailed:true
            }
        case PLANET_DATA:
            return {
                ...state, planetData: Object.assign([], action.payload), filteredPlanet: Object.assign([], action.payload)
            }
        case 'UPDATE_PLANET_DATA':
            return {
                ...state,filteredPlanet:Object.assign([],action.payload)
            }
        default:
            return state;
    }
}

export default starWarReducer;