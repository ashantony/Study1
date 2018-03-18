import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImguploadserviceService {
  api = 'http://demo8205703.mockable.io/';
  constructor(private httpClient: HttpClient) { }

  uploadImage(){
  return this.httpClient.post(this.api + 'imageUpload');
  }

}
