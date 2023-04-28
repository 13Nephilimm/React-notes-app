import React from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid'
import SearchBar from './components/SearchBar'
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = React.useState([])

  const [searchNote, setSearchNote] = React.useState('')

  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    if (savedNotes) {
      setNotes(savedNotes)
    }

  }, [])

  React.useEffect(() => {
    if (notes.length !== 0){
      localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
    }
  }, [notes])

  const AddNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode ? 'dark-mode' : 'normal'}`}>
      <div className="container">
        <Header handleToggleDark={setDarkMode} />
        <SearchBar handleSearchNote={setSearchNote} />
        <NotesList 
          notes={notes.filter(note => ( note.text.toLowerCase().includes(searchNote)))} 
          handleAddNote={AddNote} 
          handleDeleteNote={DeleteNote}
        />
      </div>
    </div>
  );
}

export default App;
