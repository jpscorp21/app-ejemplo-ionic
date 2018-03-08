import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverMenuPage } from '../popover-menu/popover-menu';


@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})


export class PopoverPage {

  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public popoverCtrl: PopoverController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  popoverPresent(ev) {
    let popover = this.popoverCtrl.create(PopoverMenuPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    })
  }

}
