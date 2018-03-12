import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrls: ['./image-upload-form.component.css']
})
export class ImageUploadFormComponent implements OnInit {

   public caption: string;
   public image: any;
   result = [];
   constructor(private httpservice: HttpService) {}

  ngOnInit() {
  }
  sbumitted = false;
onSubmit() {
    alert("helloo");
    this.httpservice.uploadImage().subscribe(
    (response.any) => this.result = response;
    );

  // this.submitted = true;
 }
}
