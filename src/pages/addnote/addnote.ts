import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddnoteProvider } from '../../providers/addnote/addnote';

@Component({
  selector: 'page-addnote',
  templateUrl: 'addnote.html',
})
export class AddnotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private noteProvider:AddnoteProvider) {}

  ionViewDidLoad(){

  }
  saveNote(note){
  	this.noteProvider.saveNote(note);
  	this.navCtrl.popToRoot();
  }
}
