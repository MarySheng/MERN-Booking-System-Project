import React from 'react';

const InputGroup = (props) => {
    return (
        <div className="form-group row">
            <label htmlFor={props.name} className="col-md-4 col-form-label text-md-right">{props.displayName}</label>
            <div className="col-md-6">
            <input 
                type={props.type}
                name={props.name}
                id={props.name}
                className={props.type !== "file" ? "form-control" : "form-control-file"}
                placeholder={props.placeholder}
                aria-describedby="helpId"
                onChange={props.handleChange}
                value={props.value}
                />
            </div>
            </div>
    );
}

export default InputGroup;
