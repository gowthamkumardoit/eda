import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PORT, URL} from './app.constant';

@Injectable({
  providedIn: 'root'
})
export class UploadApiService {
  url = URL;
  port = PORT;
  constructor(private http: HttpClient) { }

  uploadFile(files) {
    
    const formData: FormData = new FormData();
    formData.append('file', files, files.name);
    console.log(formData);
    this.http.post(`${this.url}:${this.port}/upload`, formData).subscribe((data) => {
      console.log(data);
    });
  }
}
