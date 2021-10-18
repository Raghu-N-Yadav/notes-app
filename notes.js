const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');
//console.log('this is notes.js');

const getNotes = () => {return 'My notes'}

const addNote = (title, body)=> {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // })
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote){
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

const removeNote = (title)=> {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>{
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

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.blue('Your Notes'));

    notes.forEach(note => console.log(note.title));
}

const readNotes = (title) =>{
    const notes = loadNotes();

    const myNote = notes.find(note => note.title === title);
    if(myNote){
        console.log(chalk.magenta('Found this Title'));
        console.log(myNote);
    }else{
        console.log(chalk.red('No Note with this Title'));
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = ()=>{
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
    removeNote : removeNote,
    listNotes: listNotes,
    readNotes:readNotes
}