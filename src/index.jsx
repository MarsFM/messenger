import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from "./components/Button.jsx";
import MessageField from "./components/MessageField.jsx";

class App extends Component{

    state = {
        messages: [
            {
                author: 'Ilya',
                text: 'Hello'
            }
        ],
    };

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Написать сообщение" />
                <input type="text" placeholder="Автор" />
                <Button />
                <hr/>
                <MessageField messages={this.state.messages}/>
            </div>
        );
    }
};

ReactDOM.render(<App />,
                document.getElementById("root"));