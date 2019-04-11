import React from 'react'
import './Form.css'

const Form = props => {
    return (
        <form className="form-wrapper" onSubmit={props.submit}>
            <input
                type="text"
                value={props.value}
                onChange={props.change}
                placeholder="Enter name city"
            />
            <button>Search city</button>
        </form>
    );
}

export default Form