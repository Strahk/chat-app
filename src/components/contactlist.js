import React from 'react';
import Contact from './contact';


const user = [
    {
        avatar: "https://randomuser.me/api/portraits/men/78.jpg",
        name: "LAiden Snyder",
        online: 1,
    },

    {
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Jenny Anderson",
        online: 1,
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/21.jpg",
        name: "Vincent Walters",
    },

    {
        avatar: "https://randomuser.me/api/portraits/women/49.jpg",
        name: "Ethel Garrett",
        online: 1,
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/30.jpg",
        name: "Kenneth Mitchelle",
    },

]

function ContactList(props) {
    return (
        <ul>
            {user.map(item => (
                <Contact avatar={item.avatar} name={item.name} online={item.online} />
            ))}
        </ul>
    )
}

export default ContactList;