const fs = require('fs');
const chalk = require('chalk');
//console.log('this is notes.js');

const getNotes = () => {return 'My notes'}

const addNote = function(title, body){
    const notes = loadNotes();

    const duplicateNotes = notes.filter( function (note) {
        return note.title === title;
    })
    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New Note Added');
    } else {
        console.log('Note Title Taken');
    }
    

}

const removeNote = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })

    saveNotes(notesToKeep);
    if (notes.length === notesToKeep.length){
        console.log(chalk.red.inverse('No note has removed'));
    }else{
        console.log(chalk.green('Note has been removed'));
    }
    //console.log(title);
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON =  dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return []
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}