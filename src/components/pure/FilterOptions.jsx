import React from 'react';
import FilterContainer from '../containers/FilterContainer';

const FilterOptions = () => {
    return (
        <div style={{margin:'10px'}}>
            {/* filter Containers */}
            <FilterContainer filter='SHOW_ALL'>ALL</FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>ACTIVE</FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>COMPLETED</FilterContainer>
        </div>
    );
}

export default FilterOptions;

