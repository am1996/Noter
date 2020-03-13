import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddnoteProvider } from '../../providers/addnote/addnote';

@Component({
	selector: 'page-edit',
	templateUrl: 'edit.html',
})
export class EditPage {
	note:any;
	constructor(public navCtrl: NavController, public navParams: NavParams,private noteProvider:AddnoteProvider) {
		this.note = this.navParams.get("note");
	}

	ionViewDidLoad() {}
	editNote(data){
		this.noteProvider.editNote(this.note,data);
		this.navCtrl.popToRoot();
	}

}
