const noteId = location.hash.substring(1)

const notes = getSavedNotes()

const note = notes.find(function (note) {
    return noteId === note.id
})

if (note === undefined) {
    location.assign('/index.html')
}

// Add content to input fields
document.querySelector('#titleEditInput').value = note.title
document.querySelector('#textEditInput').value = note.text

// Event listener for save note
document.querySelector('#editForm').addEventListener('submit', function (e) {
    e.preventDefault()
    let titleFromEdit = e.target.elements.titleEditInput.value
    let textFromEdit = e.target.elements.textEditInput.value
    saveNotesFromEdit(noteId, titleFromEdit, textFromEdit)
    location.assign('/index.html')
})