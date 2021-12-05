const notes = getSavedNotes()

// Render all notes

renderNotes(notes)

// Add note

document.querySelector('#addNoteForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let noteTitle = e.target.elements.noteTitleInput.value
    let noteText = e.target.elements.noteTextInput.value
    addNote(noteTitle, noteText)
    saveNotes(notes)
    e.target.elements.noteTitleInput.value = ''
    e.target.elements.noteTextInput.value = ''
})

