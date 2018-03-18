import { Component, OnInit } from '@angular/core';
import { ImguploadserviceService } from 'app/imguploadservice.service';

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrls: ['./image-upload-form.component.css']
})
export class ImageUploadFormComponent implements OnInit {

   public caption: string;
   public image: any;
   result = [];
   selctedFile: File = null;
   constructor(private httpservice: ImguploadserviceService) {}

  ngOnInit() {
  }
  onFileSelect(event){
    console.log(event);
    this.selctedFile = <File>event.target.files[0];
  }
  sbumitted = false;
onSubmit() {
    alert("helloo");
    const fd = new FormData;
    fd.append('image', this.selctedFile, this.selctedFile.name);
    this.httpservice.uploadImage().subscribe(
    (response) => {
      console.log(response);
    }
    );

  // this.submitted = true;
 }
}
