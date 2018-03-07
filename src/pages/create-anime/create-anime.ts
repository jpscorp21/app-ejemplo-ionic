import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { DataService } from '../../services/data.service';

@IonicPage()
@Component({
  selector: 'page-create-anime',
  templateUrl: 'create-anime.html',
})
export class CreateAnimePage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  form: FormGroup;

  //Crea las instancias en el constructor
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public formBuilder: FormBuilder,
              public camera: Camera,
              public data: DataService) {

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

  //Carga una imagen
  getPicture() {
    //Comprueba si la camara esta instalada
    if (Camera.installed()) {
      console.log(Camera.platforms);
      //Toma una foto con unos parametros
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        //Agrega el dato de la imagen en un formulario
        this.form.patchValue({'profilePict': 'data:image/jpg;base64,' + data})
      }).catch(err => this.data.error("Activa la camara para tomar una foto"));
    } else{
      //O sino abre el explorador para buscar una imagen
      this.fileInput.nativeElement.click();
    }

  }

  //retorna la ruta de imagen
  getProfileImageStyle() {
    // Retorna la ruta del valor para cargarlo en el css
    console.log('url(' + this.form.controls['profilePic'].value + ')');
    return 'url(' + this.form.controls['profilePic'].value + ')';
  }

  //Procesa la imagen cuando se carga una imagen para la web
  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result; // Procesa la imagen
      this.form.patchValue({'profilePic': imageData}) //Agrega los datos al campo profilePic
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  //Cierra el modal
  cancel() {
    this.viewCtrl.dismiss();
  }

  //Agrega la imagen
  add() {
    //Solo si valida el formulario se va a poder cargar
    if (!this.form.valid) {
      return;
    } else {
      this.viewCtrl.dismiss(this.form.value);
    }
  }

}
