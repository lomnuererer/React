import React from 'react'
import { useState } from 'react'
import './App.css'

export default function App() {
  const [note, setNote] = useState({
    content:'' , author:''
  });

function onNoteValueChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
        return {
          ...prevNote,
          [name]: value
        }
    })
}


  return (  
    <section className='app-section'>
      <div className="app-container">
        <h3>มาเหอะ</h3>
        <p>
          <input 
            type='text' 
            placeholder='บึนทึกความในใจ' 
            name='content'
            value={note.content}
            onChange={onNoteValueChange}
          />
        </p>
        <p>
          <input 
            type='text' 
            placeholder='อะไรกันนะะะ' 
            name='author'
            value={note.author}
            onChange={onNoteValueChange}
          />
        </p>
      </div>
    </section>
  )
}

