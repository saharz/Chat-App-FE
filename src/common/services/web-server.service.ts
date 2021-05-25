import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebServerService {
  constructor(private http: HttpClient) { }

  public createRoom(roomName: string) {
    console.log('create a new room: ', roomName);
    // let res = this.http.post('http://localhost:4000/newRoom', {roomName: roomName}, {
    //   withCredentials: false
    // });
    // res.subscribe(result => {
    //   console.log(result);
    // });

      this.http.post('http://localhost:4000/newRoom', {roomName: roomName})
          .pipe(map(res => console.log(res)), catchError(err => throwError(err)));

      // this.http.post('http://localhost:4000/newRoom',
      //     {roomName: roomName},
      //     {
      //         headers: new HttpHeaders({
      //                 'Content-Type': 'application/json',
      //                 'X-Requested-With': 'XMLHttpRequest',
      //                 'MyClientCert': '',        // This is empty
      //                 'MyToken': ''              // This is empty
      //             }
      //         )
      //     }
      // ).pipe(map(res => console.log(res)), catchError(err => throwError(err)));
      // // res.subscribe(result => {
      // //   console.log(result);
      // // });
  }
}
