import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AddnoteProvider {
	notes:any[]=[];
	id:number = 0;
	constructor(private storage:Storage) {
		this.storage.get("id").then((val)=>{
			if(val) this.id=val;
			else{
				this.id = 0;
				this.storage.set("id",this.id);
			}
		});	
		this.storage.get("notes").then((vals)=>{
			if(vals) this.notes = vals;
		});
	}
	saveNote(note:any){
		note.id = this.id;
		this.id+=1;
		this.storage.set("id",this.id);
		note.date = new Date();
		this.notes.push(note);
		this.setNotes();
	}
	editNote(note:any,data){
		let tN = this.notes.filter((n)=> n.id == note.id)[0];
		tN.title = data.title;
		tN.details = data.details;
		tN.type = data.type;
		this.setNotes();
	}
	deleteNote(note:any){
		let tN = this.notes.filter((n)=> n.id == note.id)[0];
		this.notes.splice(this.notes.indexOf(tN),1);
		this.setNotes();
	}
	clearNotes(){
		this.id = 0;
		this.storage.clear();
		this.notes = [];
	}
	getNotes(){
		return this.storage.get("notes");
	}
	setNotes(){
		this.storage.set("notes",this.notes);
	}

}
