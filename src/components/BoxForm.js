import React, { useState } from 'react';

const BoxForm = (props) => {
    const [box, setBox] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(box);
    };

    return(
        <form onSubmit={ onSubmit }>
            <div>
                <label htmlFor="box">Color </label> 
                <input onChange={ (e) => setBox(e.target.value) } type="text" />
                <input type="submit" value="Add" />
            </div>
        </form>
    );
};

export default BoxForm;