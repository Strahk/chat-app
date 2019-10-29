import React from 'react';
import './contact.css';

// function Contact(props) {
//     return (
//         <chatapp className="Contact">

//             <img className="avatar" src={props.avatar} alt={props.name} />
//             <div class="textbox">
//                 <h1 class="name">{props.name}</h1>
//                 <div class="line">
//                     <text className={props.online ? 'status-online' : 'status-offline'}></text>
//                     <text className="status-text">{props.online ? "online" : "offline"}</text>
//                 </div>
//             </div>

//         </chatapp>
//     );
// };

// export default Contact;

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            online: this.props.online
        };
    }
    render() {
        return (
            <chatapp className="Contact">

                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div classs="textbox">
                    <h1 class="name">{this.props.name}</h1>
                    <div class="line" onClick={event => {
                        const offline = !this.state.online;
                        this.setState({ online: offline })
                    }} >
                        <text className="status-text"> { this.state.online ? 'online' : 'offline' }</text>
                        <span className={this.state.online ? "status-online" : "status-offline"}></span>
                    </div>
                </div>
            </chatapp >
        );
    }
};

export default Contact;