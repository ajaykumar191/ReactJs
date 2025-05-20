import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import LoadingImage from '../assets/loading-spinner.gif'
import './ChatMessages.css'

function ChatMessages({ chatMessages, loading, setLoading }) {

    const chatMessagesRef = useRef(null);

    useEffect(() => {

        const containerElem = (chatMessagesRef.current);
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }


    }, [chatMessages]);

    return (
        <div className="chat-messages-container"
            ref={chatMessagesRef}
        >
            {
                chatMessages.map((chatMessage) => {
                    return (


                        <ChatMessage
                            message={chatMessage.message}
                            image={chatMessage.image}
                            sender={chatMessage.sender}
                            key={chatMessage.id}
                            loading={loading}
                            setLoading={setLoading}
                        />


                    );
                })
            }
            {loading && (
                <ChatMessage

                    sender="robot"
                    loadingImage={LoadingImage}
                />
            )}
        </div>
    )

}

export default ChatMessages
