import React from 'react';

const InputGroup = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.displayName}</label>
            <input 
                type={props.type}
                name={props.name}
                id={props.name}
                className={props.type !== "file" ? "form-control" : "form-control-file"}
                placeholder={props.placeholder}
                aria-describedby="helpId"
                onchange={props.handleChange}
                value={props.value}
                />
        </div>
    );
}

export default InputGroup;
