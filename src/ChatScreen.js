import React, {useState} from 'react'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core'

function ChatScreen() {
    const [input, setinput] = useState('')
    const [message, setmessage] = useState([
        {
            name:'Ellen',
            image:'https://variety.com/wp-content/uploads/2021/02/sandra-bullock.jpg?w=681&h=383&crop=1',
            message:'Whats up'
        },
        {
            name:'Ellen',
            image:'https://variety.com/wp-content/uploads/2021/02/sandra-bullock.jpg?w=681&h=383&crop=1',
            message:'Whats sup'
        },
        {
            message:'I AM GOOD what about you'
        }
    ])
    const handleSend = (e) =>{
        e.preventDefault();
        setmessage([...message, {message:input}]);
        setinput("");
    };
    return (
        <div className="chatScreen">
            <p>You matched with ellen on 10/01/21</p>
            {message.map(message=>(
                message.name?(
                    <div className="chatScreen__message">
                    <Avatar
                    className="chatScreen__image"
                    alt={message.name}
                    src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                    
                )
                
            ))}
            
            <form className="chatScreen__input" >
                <input
                value={input} 
                onChange={e=>setinput(e.target.value)}
                className="chatScreen__inputField"
                 type="text" placeholder="Type a message" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
