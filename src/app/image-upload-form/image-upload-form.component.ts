import { Component, OnInit } from '@angular/core';
import { ImguploadserviceService } from 'app/imguploadservice.service';
// import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrls: ['./image-upload-form.component.css']
})
export class ImageUploadFormComponent implements OnInit {
     public base64textString:String="";
   public caption: string;
   public image: any;
   result = [];
   selctedFile: File = null;
   // imgForm: ngForm;
   constructor(private httpservice: ImguploadserviceService) {}

  ngOnInit() {
  }
  onFileSelect(event){
    console.log(event);
    this.selctedFile = <File>event.target.files[0];
    // ....
    let reader = new FileReader();
// if(event.target.files && event.target.files.length > 0) {
// // let file = event.target.files[0];
// this.selctedFile = <File>event.target.files[0];
// reader.readAsDataURL(this.selctedFile);
// reader.onload = () => {
// this.imgForm.get('image').setValue({
// filename: this.selctedFile.name,
// filetype: this.selctedFile.type,
// value: reader.result.split(',')[1]
// })
// };
// }


// var files = evt.target.files;
//       var file = files[0];

    if (event.target.files && this.selctedFile) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

        reader.readAsBinaryString(this.selctedFile);
    }

    // ................
  }
  // ..........
  _handleReaderLoaded(readerEvt) {
var binaryString = readerEvt.target.result;
      this.base64textString= btoa(binaryString);
      console.log( this.base64textString);
}


  // ...........
  sbumitted = false;
onSubmit() {
    alert("helloo");
    debugger
    const data = this.base64textString
    //
    // fd.append('image', this.selctedFile, this.selctedFile.name);
    this.httpservice.uploadImage(data)

    // console.log(fd);
    .subscribe(
    (response) => {
      console.log(response);
    });

  // this.submitted = true;
 }
}
