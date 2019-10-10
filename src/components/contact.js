import React from 'react';
import './contact.css';

function Contact(props) {
    return (
        <chatapp className="Contact">

            <img className="avatar" src={props.avatar} alt={props.name} />
            <div class="textbox">
                <h1 class="name">{props.name}</h1>
                <div class="line">
                    <text className={props.online ? 'status-online' : 'status-offline'}></text>
                    <text className="status-text">{props.online ? "online" : "offline"}</text>
                </div>
            </div>

        </chatapp>
    );
};

export default Contact;