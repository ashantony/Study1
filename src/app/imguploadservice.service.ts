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
                        .set('Content-Type', 'application/json');  // For Example - Uploading I don't know, normal API request
                        // .set('something', other thing) // if you have more than one headers you can chain  in like this, beware the semi colon.
                        // last set will have the semicolon
                        // One thing HttpHeaders are immutable ie, you cannot change 'header' once created
                        // You cannot modify the 'header' object... purinchitha?

  return this.httpClient.post(this.api + 'imageUpload',data? data: null,
                {
                  headers: header,
                  withCredentials: true ,// this is useful when you require cookie for authentication
                  responseType: 'json' // your expected response type
                });
  }



}
