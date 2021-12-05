// Add note

let addNote = function (title, text) {

    let id = uuidv4()
    let noteTitle = title
    let noteText = text

    if (title.length === 0) {
        noteTitle = 'No Title'
    }

    if (text.length === 0) {
        noteText = 'No Text'
    }

    notes.push({
        id: id,
        title: noteTitle,
        text: noteText
    })

    reRenderNotes(notes)
    
}

// Erase old render and rerender notes

let reRenderNotes = function (array) {
    document.querySelector('#notesContainer').innerHTML = ''
    renderNotes(array)
}

// Save notes on localStorage

let saveNotes = function (array) {
    localStorage.setItem('notes', JSON.stringify(array))
}

// Fetch notes from localStorage

let getSavedNotes = function () {

    let notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Render all notes

let renderNotes = function (array) {

    // Sort notes alphabetically
    let sortedRenderNotes = array.sort(function (a, b) {

        let titleA = a.title.toLowerCase()
        let titleB = b.title.toLowerCase()

        if (titleA < titleB) {
            return -1
        }

        if (titleA > titleB) {
            return 1
        }
        return 0
    })

    // Render notes

    sortedRenderNotes.forEach(function (object) {

        let noteContainer = document.createElement('div')
        let noteTitle = document.createElement('span')
        let readLink = document.createElement('a')
        let removeBtn = document.createElement('button')

        // Set elements to container div
        noteContainer.appendChild(noteTitle)
        noteContainer.appendChild(readLink)
        noteContainer.appendChild(removeBtn)

        // Give contents to each element
        noteTitle.textContent = object.title
        readLink.textContent = 'read'
        removeBtn.textContent = 'x'

        // Add event listener to remove button
        removeBtn.addEventListener('click', function (e) {
            removeNote(object.id)
            saveNotes(array)
            reRenderNotes(array)
        })

        // Append noteContainer to document
        document.querySelector('#notesContainer').appendChild(noteContainer)
    })
}

// Remove note

let removeNote = function (id) {
    let noteToRemoveIndex = notes.findIndex(function (note) {
        return note.id === id
    })
    notes.splice(noteToRemoveIndex, 1)
}