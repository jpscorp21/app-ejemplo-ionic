import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-create-anime',
  templateUrl: 'create-anime.html',
})
export class CreateAnimePage {

  item: any;

  isReadyToSave: boolean;

  form: FormGroup;
  titulo: string;
  num_episodio: number;
  genero: string[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public formBuilder: FormBuilder) {

      this.form = formBuilder.group({
        titulo: ['', Validators.required],
        num_episodio: ['', Validators.required],
        genero: ['', Validators.required]
      });

      this.form.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.form.valid;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAnimePage');
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  add() {
    if (!this.form.valid) {
      return;
    } else {
      this.viewCtrl.dismiss(this.form.value);
    }
  }

}
