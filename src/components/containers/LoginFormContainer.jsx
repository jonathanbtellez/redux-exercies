import React from 'react'
import { connect } from 'react-redux'
<<<<<<< HEAD
import Loginform from '../pure/LoginForm'
import { httpRequest } from '../../store/actions/asyncActions';

const mapStateToProps = (state) => {
    return {
        loged: state.userState.loged,
=======
import LoginForm from '../pure/loginForm'
import { httpRequest } from '../../store/actions/asyncActions'

const mapStateToProps = (state) => {
    return {
        logged: state.userState.logged,
>>>>>>> Local-proyect
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
<<<<<<< HEAD
    return {
=======
   return{ 
>>>>>>> Local-proyect
        onLogin: (email, password) => {
            const data = {
                email: email,
                password: password
            }
<<<<<<< HEAD
            const url = 'https://reqres.in/api/login'
            dispatch(httpRequest('post',url,data));
=======
            
            const url = 'https://reqres.in/api/login';

            dispatch(httpRequest('post', url, data))
>>>>>>> Local-proyect
        }
    }
}

<<<<<<< HEAD
const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(Loginform)
export default LoginFormContainer
=======
const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginFormContainer;
>>>>>>> Local-proyect
