import SearchBar from "../../components/ui/Searchbar";
import peers from "../../components/data/PeerData";
import { suggestedPeers } from "../../components/data/SuggestedPeers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PeerMatching.css";

const PeerMatching = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  const filteredPeers = peers.filter((chat) =>
  chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChatClick = (chat) => {
    console.log(chat);
    navigate(`/dashboard/Chat/${chat.conversationId}`);
  };

  const handleConnectClick = (e, peer) => {
    e.stopPropagation();
    console.log(peer);
  };

  return (
    <>
      <div className="peer-header">
        <h1>Peer Matching</h1>
        <div>
          <SearchBar placeholder="Search chats" onSearch={handleSearch} />
        </div>
      </div>

      <div className="peer-list">
        {filteredPeers.map((chat) => {
          const { participant, lastMessage } = chat;

          return (
            <div
              key={chat.id}
              className="peer-card"
              onClick={() => handleChatClick(chat)}
            >
              <div className="peer-card-flex">
                <img
                  src={participant.avatar}
                  alt={participant.name}
                  className="peer-avatar"
                  loading="lazy"
                />

                <div className="peer-info">
                  <div className="peer-name-div">
                    <h3 className="peer-name">{chat.name}</h3>

                    {participant.isOnline && (
                      <div className="active-tag">
                        <div className="dot"></div>
                        <span>Active</span>
                      </div>
                    )}
                  </div>

                  <p className="last-message">{lastMessage.content}</p>
                  <span className="chat-time">{chat.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="suggestions">
        <h2 className="header">Suggested Peers</h2>
        <div className="suggestedpeer-cards">
          {suggestedPeers.map((peer) => (
            <div key={peer.id} className="suggestedpeer-card">
              <img
                src={peer.avatar}
                alt={peer.name}
                className="suggestedpeer-avatar"
                loading="lazy"
              />

              <div>
                <h3 className="peer-name">{peer.name}</h3>
                <p className="peer-info">{peer.course}</p>
                <p className="peer-info">{peer.school}</p>
                <p className="peer-info">{peer.level}</p>
              </div>

              <button
                className="connect-button"
                onClick={(e) => handleConnectClick(e, peer)}
              >
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PeerMatching;
