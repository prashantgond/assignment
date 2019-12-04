import { LOGIN_FAILED, LOGIN_SUCESS, PLANET_DATA } from "./actionsConstants";


export function loginSucess(loginData) {
    return {
        type: LOGIN_SUCESS,
        payload: loginData
    }
}
export function loginFailed() {
    return {
        type: LOGIN_FAILED,
    }
}

export function doLogin(username, password) {
    return function (dispatch) {
        const url = 'https://swapi.co/api/people?search=' + username;
        console.log(url)
        return fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': 'swapi-javascript'
            },
        }).then((res) => {
            return res.json();
        }).then((response) => {
            // Match username with data and password 
            if (response.name == username && response.birth_year == password) {
                console.log(response)
                dispatch(loginSucess(response))
            }
            else {
                console.log('Not found')
                dispatch(loginFailed());
            }
        }).catch((err) => {
            console.log("error while api fetch", err)
        })
    }
}

export function savePlanetData(planetData) {
    return {
        type: PLANET_DATA,
        payload: planetData
    }
}

export function updatePlanet(data){
    return {
        type: 'UPDATE_PLANET_DATA',
        payload:data
    }
}

export function getPlanetData() {
    return function (dispatch) {
        return fetch('https://swapi.co/api/planets/', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': 'swapi-javascript'
            },
        }).then((res) => {
            return res.json();
        }).then((response) => {
            // Match username with data and password 
            if (response && response.results) {
                console.log(response)
                dispatch(savePlanetData(response.results))
            }
            else {
                console.log('Not found')
                dispatch(loginFailed());
            }
        }).catch((err) => {
            console.log("error while api fetch", err)
        })
    }
}