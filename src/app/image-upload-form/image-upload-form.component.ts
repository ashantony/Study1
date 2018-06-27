import {Component, OnInit} from '@angular/core';
import {ImguploadserviceService} from 'app/imguploadservice.service';

// import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-image-upload-form',
  templateUrl: './image-upload-form.component.html',
  styleUrls: ['./image-upload-form.component.css']
})
export class ImageUploadFormComponent implements OnInit {
  public base64textString: string = '';
  public caption: string;
  public image: any;
  result = [];
  selectedFile: File = null;

  // imgForm: ngForm;
  constructor(private httpservice: ImguploadserviceService) {
  }

  ngOnInit() {
  }

  onFileSelect(event) {
    this.selectedFile = <File>event.target.files[0];

    if (event.target.files && this.selectedFile) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.selectedFile);
    }
    // ................
  }

  // ..........
  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }
  // ...........

  onSubmit(e) {
    // debugger;
    const imageData = this.base64textString;
    console.log(imageData);
    //
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    const payload = {
      'data': imageData,
      'format': 'jpg',
      'width': 500,
      'height': 500
    };
    this.httpservice.uploadImage(payload)
      .subscribe((response: any) => {
        this.result = response;
        console.log(this.result, "this.urlthis.url>>>>");
        // const newImgData = this.result.url;
      });
        // this.submitted = true;
  }

  // clearFile(this.submitted = true){
  //   alert("heloo");
  // }
}
