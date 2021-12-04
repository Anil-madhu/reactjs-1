import React from "react";

function Note(props){
    return (
    <div className="note">
    <img className="circle-img" src={props.img} alt="avatar_img" />
    <h1>{props.title}</h1>
    <p>{props.content}</p>

    </div>
    );
}

export default Note;