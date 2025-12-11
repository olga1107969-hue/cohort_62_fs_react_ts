import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";
import Button from "./Button";
import { PageWrapper, NotesList, NoteItem, InputArea } from "./styles";

// интерфейс прямо здесь
interface Note {
  id: string;
  text: string;
}

function Homework_09() {
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    if (!note.trim()) return;
    const newNote: Note = { id: uuidv4(), text: note };
    setNotes((prev) => [...prev, newNote]);
    setNote("");
  };

  return (
    <PageWrapper>
      <h2>Homework 09</h2>
      <InputArea>
        <Input value={note} onChange={(e) => setNote(e.target.value)} />
        <Button onClick={addNote}>Add</Button>
      </InputArea>
      <NotesList>
        {notes.map((n) => (
          <NoteItem key={n.id}>{n.text}</NoteItem>
        ))}
      </NotesList>
    </PageWrapper>
  );
}

export default Homework_09;
