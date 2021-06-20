import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  constructor(private _http: HttpClient) { }

  public async get(path:string) {
    try {
      let result = await this._http.get(`http://localhost:3000/${path}`).toPromise()
      return {
        success: true,
        message: "successful",
        data: result 
      }
    } catch(e) {
      return {
        success: false,
        message: e.error ? e.error.message : e.message ? e.message : e.toString()
      }
    }
  }

  public async put(path:string, data: any) {
    try {
      let result = await this._http.put(`http://localhost:3000/${path}`,data).toPromise()
      return {
        success: true,
        message: "successful",
        data: result 
      }
    } catch(e) {
      return {
        success: false,
        message: e.error ? e.error.message : e.message ? e.message : e.toString()
      }
    }
  } 
  
  public async post(path:string, data: any) {
    try {
      let result = await this._http.post(`http://localhost:3000/${path}`,data).toPromise()
      return {
        success: true,
        message: "successful",
        data: result 
      }
    } catch(e) {
      return {
        success: false,
        message: e.error ? e.error.message : e.message ? e.message : e.toString()
      }
    }
  }
}
