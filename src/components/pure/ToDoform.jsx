import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Button } from '@mui/material';


const ToDoForm = ({ submit }) => {

    const newText = useRef();

    return (
        <div>
            <h2>Create your task</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input
                    type='text'
                    style={{ padding: '10px', width: '90%', marginBottom: '5px' }}
                    ref={newText} />
                <Button variant='contained' color='secondary' type='submit'>
                    Create task.
                </Button>

            </form>
        </div>
    );
};


ToDoForm.propTypes = {
    submit: PropTypes.func.isRequired
};


export default ToDoForm;
