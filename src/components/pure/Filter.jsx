import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';


const Filter = ({active, onClick, children }) => {
    
    if(active){
        return (<Button variant='contained'>{children}</Button>)
    }
    return (
        <Button variant='contained' color='secondary' className='filter' 
            onClick={(e)=>{
                e.preventDefault();
                onClick();
        }}>
            {children}
        </Button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,

    // When we use node, we are do reference to DOM element
    children: PropTypes.node.isRequired
};


export default Filter;
