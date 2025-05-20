import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'
import './ChatInput.css'

function ChatInput({ chatMessages, setChatMessages, setLoading }) {

    const [inputText, setInputText] = useState('');

    function saveInputText(event) {

        setInputText(event.target.value);

    }

    async function sendMessage() {
        setLoading(true);


        const newChatMessages = [
            ...chatMessages,
            {

                message: inputText,
                sender: 'user',
                image: { UserProfileImage },
                id: crypto.randomUUID()

            }
        ]
        setChatMessages(newChatMessages);
        setInputText('')


        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {

                message: response,
                sender: 'robot',
                image: { RobotProfileImage },
                id: crypto.randomUUID()

            }
        ]);

        setLoading(false);






    }
    function textOnKeyDown(event) {

        if (event.code === "Enter") {
            sendMessage();
        }

        if (event.code === "Escape") {
            setInputText('')

        }



    }
    return (
        <div className="chat-input-container">

            <input
                type="text"
                placeholder="Send a message to the chatbot"
                size="30"
                value={inputText}
                onChange={saveInputText}
                onKeyDown={textOnKeyDown}
                className='chat-input'
            />
            <button className='send-button' onClick={sendMessage} >Send</button>
        </div>
    )
}


export default ChatInput