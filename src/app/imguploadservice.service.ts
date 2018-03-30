import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ImguploadserviceService {

  //
  // const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  api = 'https://m9bxpvlij9.execute-api.ap-south-1.amazonaws.com/api/';

  constructor(private httpClient: HttpClient) {
  }

  uploadImage(data) {
    const header = new HttpHeaders({})
      .set('Content-Type', 'application/json');
    return this.httpClient.post(this.api, data ? data : null,
      {
        headers: header,
        // withCredentials: true,
        responseType: 'json'
      }
    )
  }


}
