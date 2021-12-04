import React from "react";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          img={noteItem.imgURL}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
    </div>
  );
}

export default App;