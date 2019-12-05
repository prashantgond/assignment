import { LOGIN_FAILED, LOGIN_SUCESS, PLANET_DATA, UPDATE_PLANET_DATA, ADMIN_NAME } from "./actionsConstants";


export function loginSucess(data) {
    return {
        type: LOGIN_SUCESS,
        payload:data
    }
}
export function loginFailed(data) {
    return {
        type: LOGIN_FAILED,
        payload: data
    }
}

export function adminName(data) {
    return {
        type: ADMIN_NAME,
        payload:data
    }
}

export function doLogin(username, password) {
    return function (dispatch) {
        const url = "https://swapi.co/api/people/";
        return fetch(url, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': 'swapi-javascript'
            },
        }).then((res) => {
            return res.json();
        }).then((response) => {
            let data = response.results;
            // Match username with data and password 
            if (data.length > 0) {
                let userFound = false;
                for (i = 0; i < data.length; i++) {
                    if (data[i].name == username && data[i].birth_year == password) {
                        userFound = true;
                        dispatch(loginSucess(true))
                        dispatch(loginFailed(false));
                        dispatch(adminName(username))
                    }
                }
                if (!userFound) {
                    dispatch(loginFailed(true));
                }
            }
            else {
                dispatch(loginFailed(true));
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

export function updatePlanet(data) {
    return {
        type: UPDATE_PLANET_DATA ,
        payload: data
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