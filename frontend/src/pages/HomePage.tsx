import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  const { authTokens, logout } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("http://localhost:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    const data = await response.json();
    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logout();
    }
  };
  return (
    <div>
      <p>Notes: </p>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
