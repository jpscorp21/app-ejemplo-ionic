import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-popover-menu',
  templateUrl: 'popover-menu.html',
})
export class PopoverMenuPage {

  background: string;
  contentEle: any;
  textEle: any;
  fontFamily: any;

  colors = {
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;
      this.textEle = this.navParams.data.textEle;

      this.background = this.getColorName(this.contentEle.style.backgroundColor);
      this.setFontFamily();
    }
  }

  getColorName(background: string) {
    let colorName = 'white';

    if (!background) return 'white';

    for (let key in this.colors) {
      if (this.colors[key].bg == background) {
        colorName = key; //Se guarda el color de fondo actual
      }
    }
  }

  setFontFamily() {
    //Si existe el tipo de fondo en el componente
    if (this.textEle.style.fontFamily) {
      this.fontFamily = this.textEle.style.fontFamily.replace(/'/g, "");
    }
  }

  changeBackground(color) {
    this.background = color;
    this.contentEle.style.backgroundColor = this.colors[color].bg;
    this.textEle.style.color = this.colors[color].fg;
  }

  changeFontSize(direction) {
    this.textEle.style.fontSize = direction;
  }

  changeFontFamily() {
    if (this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
  }

}
