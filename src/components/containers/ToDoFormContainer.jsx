import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import ToDoForm from '../pure/ToDoform'

const mapStateToProps = (state) => ({
    // Not necessary
})

const mapDispatchToProps =(dispatch)=> {
    return {submit: (text) =>{
            dispatch(addTodo(text));
        }
    } 
}

const ToDoFormContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoForm);

export default ToDoFormContainer