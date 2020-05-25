import React from 'react';
import PropTypes from 'prop-types';
import './categoryButton.css';

function CategoryButton(props) {
    return (
        <button
            type="button"
            className="filter-btn"
            data-id={props.category}
            onClick={() => props.fn(props.category)}
        >
            {props.category}
        </button>
    );
}

CategoryButton.propTypes = {
    category: PropTypes.string.isRequired,
    fn: PropTypes.func.isRequired,
};
export default CategoryButton;
