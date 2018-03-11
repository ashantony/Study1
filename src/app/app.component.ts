import { Component } from '@angular/core';
// import { ImageUploadFormComponent } from './image-upload-form/image-upload-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image Gallery';
  showForm = false;

  popUpImageUploadForm(){
  // alert("heloo");
  this.showForm = true;

  }

}
