
//SENDING FIRST CHANGES TO GITHUB.....

let fish = "first try at changing final project";
//SENDING FIRST CHANGES TO GITHUB.....



let Notes = [];

function addNote() {
	//check if value is not empty
	//get value from input
	let newNote = document.getElementById('newNote').value;
	//check if value is not empty
	if (newNote !== ''){
		//add value to array
		Notes.push(newNote);
		console.log(Note);
		//removes value from input
		document.getElementById('newNote').value = '';
		displayNote();
	}
}


function displayNote(){
	//Section to display quantity
	document.getElementById('quantityDisplay').innerHTML  = 'Quantity: ' + notes.length;
	//'Quantity: ${notes.length}'

	//Section to display note array
	document.getElementById('NotesDisplay').innerHTML = '';
		//for each note in my notes array, display that note
	for(let i = 0; i < note.length; i++){
		document.getElementById('notesDisplay').innerHTML += `<h4>${note[i]}</h4>
		<input type="button"
		 value="DELETE" onclick="deleteNotes(${i})" /> 
		<hr/>`;
		//'<h4>'+ notes[i] +'</h4> <hr/>'
	}
}




function deleteNote(index){
	//1st arg is the index
	//2nd arg number of element remove
	//removes 1 shoe at position index
	note.splice(index, 1);

	displayNotes();

}
