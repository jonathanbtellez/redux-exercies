import logo from './logo.svg';
import './App.css';
import TodosContainer from './components/containers/ToDoContainer';
import ToDoFormContainer from './components/containers/ToDoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
        <ToDoFormContainer></ToDoFormContainer>
        {/* Filter options contain Filter container */}
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
