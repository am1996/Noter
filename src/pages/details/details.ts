import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddnoteProvider } from '../../providers/addnote/addnote';
import { EditPage } from '../edit/edit';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
	note:any;
	constructor(public navCtrl: NavController, public navParams: NavParams,private noteProvider:AddnoteProvider) {
		this.note = this.navParams.get("note");
	}
	ionViewDidLoad(){}
	deleteNote(note){
		this.noteProvider.deleteNote(note);
		this.navCtrl.popToRoot();
	}
	goToEdit(note){
		this.navCtrl.push(EditPage,{
			note:note
		});
	}

}
