import React from 'react';

const InputGroup = (props) => {
    return (
        <div className="form-group row">
            <div className="col-md-6 mx-auto">
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
