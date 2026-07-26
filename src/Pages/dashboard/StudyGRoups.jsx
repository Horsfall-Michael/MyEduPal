import suggestedGroups from "../../components/data/SuggestedGroups";
import { useState } from "react";
import SearchBar from "../../components/ui/Searchbar";
import { groups } from "../../components/data/groupsData";
import "./StudyGroup.css";
const StudyGroups = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };
  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  

  return (
    <>
      <div className="group-header">
        <h1>Study Groups</h1>
        <div>
          <SearchBar
            placeholder="Search study groups"
            onSearch={handleSearch}
          />
        </div>
      </div>

      <div className="group-list">
        {filteredGroups.map((group) => {
          return (
            <div
              key={group.id}
              className="studygroup-card"
            >
              <div className="group-card-flex">
                <img
                  src={group.image}
                  alt={group.name}
                  className="group-avatar"
                  loading="lazy"
                />

                <div className="group-info">
                  <div className="group-name-div">
                    <h3 className="group-name">{group.name}</h3>

                    <div className="active-tag">
                      <div className="dot"></div>
                      <span>{group.state}</span>
                    </div>
                  </div>

                  <p>{group.description}</p>
                  <div className="group-members-time">
                    <p className="group-members">
                      {group.members} members
                    </p>
                    <p className="chat-time">{group.lastSeen} mins</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="suggestions">
        <h2 className="header">Suggested Groups</h2>
        <div className="suggestedgroup-cards">
          {suggestedGroups.map((group) => (
            <div key={group.id} className="studygroup-card">
              <img
                src={group.image}
                alt={group.name}
                className="suggestedgroup-image"
                loading="lazy"
              />

              <div>
                <h3 className="peer-name">{group.name}</h3>
                <p className="peer-info">{group.description}</p>
                <p className="peer-info">{group.members}</p>
                <p className="peer-info">{group.lastSeen}</p>
              </div>

              <button className="join-button">Join</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StudyGroups;
