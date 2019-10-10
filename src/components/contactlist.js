import React from 'react';
import './contactlist.css';

function ContactList(props) {
    const user = ['Charlie Johnson', 'Jeffery Richards', 'Judy Mendoza', 'Terrance Day', 'Tyler Holmes']
    return (
        <div className="user">
            <ul>
                {
                    user.map(member => <li key={member}>{member}</li>)
                }
            </ul>
        </div>
    );

}

export default ContactList;