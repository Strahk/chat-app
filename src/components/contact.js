import React from 'react';
import './contact.css';

function Contact(props) {
    return (
        <chatapp className="Contact">

            <img className="avatar" src={props.avatar} />
            <h1 class="name">{props.name}</h1>
            <text className={props.online ? 'status-online' : 'status-offline'}></text>
            <text className='status-text'>{props.online ? "online" : "offline"}</text>
        </chatapp>
    );
};

export default Contact;