import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ImguploadserviceService {

  //
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  api = 'http://demo8205703.mockable.io/';
  constructor(private httpClient: HttpClient) { }

  uploadImage(data){
    let header = new HttpHeaders()
                        .set('Content-Type', 'application/json');
  return this.httpClient.post(this.api + 'imageUpload',data? data: null,
                {
                  headers: header,
                  withCredentials: true ,
                  responseType: 'json' 
                });
  }



}
