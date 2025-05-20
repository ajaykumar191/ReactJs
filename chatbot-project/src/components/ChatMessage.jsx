import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'
import LoadingImage from '../assets/loading-spinner.gif'
import './ChatMessage.css'
function ChatMessage({ message, sender }) {

    return (
        <div className={sender === 'user'
            ? 'chat-message-user'
            : 'chat-message-robot'
        }>
            {sender === 'robot' && (
                <img src={RobotProfileImage} alt="" width="50px" />
            )}

            <div className="chat-message-text">
                {message ? message : <img className="loading-image" src={LoadingImage} alt="Loading..." />}
            </div>


            {sender === 'user' && (
                <img className="chat-message-profile" src={UserProfileImage} alt="" />
            )}
        </div>
    );

}

export default ChatMessage