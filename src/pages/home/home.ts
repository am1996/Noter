import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddnotePage } from '../addnote/addnote';
import { DetailsPage } from '../details/details';
import { AddnoteProvider } from '../../providers/addnote/addnote';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	notes:any[];
	constructor(public navCtrl: NavController,private noteProvider:AddnoteProvider) {
	}
	ionViewWillEnter(){
		this.loadNotes();
	}
	addNote(){
		this.navCtrl.push(AddnotePage);
	}
	loadNotes(){
		this.noteProvider.getNotes().then((val)=>{
			this.notes = val;
		});
	}
	deleteNote(note,e){
		e.stopPropagation();
		this.noteProvider.deleteNote(note);
		this.notes = this.noteProvider.notes;
	}
	clearNotes(){
		this.noteProvider.clearNotes();
		this.notes = [];
	}
	visitDetail(note){
		this.navCtrl.push(DetailsPage,{
			note:note
		});
	}
	visitEdit(note,e){
		e.stopPropagation();
		this.navCtrl.push(EditPage,{
			note:note
		});
	}

}
