import React from 'react';

const AlertMessage = (props) => {
    return (
    <div className={"alert alert-" + props.color}>
        {props.message}
    </div>
    );
}

export default AlertMessage;
