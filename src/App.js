import React from 'react';
import Contact from './components/contact.js';
import './App.css;'

function App() {
    return (
        <div className="App">
            <Contact
                avatar="https://randomuser.me/api/portraits/lego/3.jpg"
                avatar="https://randomuser.me/api/portraits/lego/6.jpg"
                avatar="https://randomuser.me/api/portraits/lego/4.jpg"
            />
        <div className="App">
            <Contact
            name="Callipso"
            text=""

            name="Rodrigue"
            text=""

            name="Pelo"
            text=""
            />
        </div>
        </div>
    );
};

export default App;