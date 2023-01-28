// -----------ASYNC ACTIONS TYPES AVAIBLES-------------

// Watcher the saga listens
export const API_CALL_REQUEST = 'API_CALL_REQUEST';

// Dispatch by worker daga
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}

/**
 * Generic HttpRequest Action dispatcher
 * 
 * @param {string} method 
 * @param {string} url 
 * @param {object} data 
 * @returns 
 */
export const httpRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}