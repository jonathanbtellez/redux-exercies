
import { connect } from 'react-redux'
import ToDoList from '../pure/ToDoList'
import { toggleTodo } from '../../store/actions/actions'



// Filter todo lists
const filterToDos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterToDos(state.todosState, state.filterState )
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

// we connect state and dispatch to ToDoList props
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);

export default TodosContainer;