import React from 'react';
import Contact from './components/contact.js';
import ContactList from './components/contactlist.js';

function App() {

    return (
        <div className="App">
            <Contact
                avatar="https://randomuser.me/api/portraits/lego/3.jpg"
                name="Cali"
                online
            />
            <Contact
                avatar="https://randomuser.me/api/portraits/lego/6.jpg"
                name="Pelo"
            />
            <Contact
                avatar="https://randomuser.me/api/portraits/lego/7.jpg"
                name="Bob"
                online
            />
            <ContactList />
        </div>
    );
};

export default App;