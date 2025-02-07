import { useState } from "react";


function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // we shall pass a function with the current state to update it
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" defaultValue={playerName} required onChange={handleNameChange} />
    );
  }

  return (
    <li>
      <span>
        {editablePlayerName}
        <span>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Player;
