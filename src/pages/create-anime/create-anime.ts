import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-create-anime',
  templateUrl: 'create-anime.html',
})
export class CreateAnimePage {

  @ViewChild('fileInput') fileInput;

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
        profilePic: [''],
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

  getPicture() {
    //Abre el explorador para buscar una imagen
    this.fileInput.nativeElement.click();
  }

  getProfileImageStyle() {
    // Retorna la ruta del valor para cargarlo en el css
    console.log('url(' + this.form.controls['profilePic'].value + ')');
    return 'url(' + this.form.controls['profilePic'].value + ')';
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result; // Procesa la imagen
      this.form.patchValue({'profilePic': imageData}) //Agrega los datos al campo profilePic
    }
    reader.readAsDataURL(event.target.files[0]);
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
