import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import peers from "../../components/data/PeerData";
import ArrowLeft from "../../assets/images/basil_arrow-up-outline.png";
import CallIcon from "../../assets/images/line-md_phone.png";
import AddIcon from "../../assets/images/Vector.png";
import Microphone from "../../assets/images/icon-park-outline_voice.png";
import SendIcon from "../../assets/images/Frame 183.png";
import CameraIcon from "../../assets/images/iconoir_instagram.png";
import "./Chat.css";

const ChatPage = () => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  const { conversationId } = useParams();
  const chat = peers.find((peer) => peer.conversationId === conversationId);
  const currentUser = {
    id: "user_002",
    name: "Ere",
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-header-info">
          <NavLink to="/dashboard/peer-matching">
            <img src={ArrowLeft} alt="Back" className="back-arrow" />
          </NavLink>
          <div className="peer-card-flex">
            <img
              src={chat.participant.avatar}
              alt={chat.participant.name}
              className="chat-avatar"
              loading="lazy"
            />

            <div className="peer-info">
              <div className="peer-name-div">
                <div>
                  <h3 className="peer-name">{chat.name}</h3>
                  <p>
                    {chat.participant.school}
                    <span> {chat.participant.level}lv</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-header-actions">
          <button className="chat-action-button">
            <img src={CallIcon} alt="Call" />
          </button>
          {chat.participant.isOnline && (
            <div className="active-tag">
              <div className="dot"></div>
              <span>Active</span>
            </div>
          )}
        </div>
      </div>

      <div className="messages">
        {chat.messages.map((message) => {
          const isMine = message.senderId === currentUser.id;

          return (
            <div
              key={message.id}
              className={`message ${isMine ? "sent" : "received"}`}
            >
              {message.type === "text" ? (
                <p>{message.content}</p>
              ) : (
                <div className="file-message">
                  <strong>{message.file.name}</strong>
                  <small>{message.file.size}</small>
                </div>
              )}

              <span>
                {new Date(message.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          );
        })}
          <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <img src={AddIcon} alt="Add" className="add-icon" />
        <input
          type="text"
          placeholder="Type a message..."
          className="chat-input-field"
        />
        <img src={Microphone} alt="Microphone" className="microphone-icon" />
        <img src={CameraIcon} alt="Camera" className="camera-icon" />
        <img src={SendIcon} alt="Send" className="send-icon" />
      </div>
    </div>
  );
};

export default ChatPage;
