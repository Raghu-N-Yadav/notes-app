const fs = require('fs');
//console.log('this is notes.js');

const getNotes = () => {return 'My notes'}

const addNote = function(title, body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter( function (note) {
        return note.title === title;
    })

    if (duplicateNotes.lenght == 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('new Note Added');
    }else{
        console.log('Note Title Taken');
    }

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON =  dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote
}