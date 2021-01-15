import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private wp_token: string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjFcL3dvcmRwcmVzcyIsImlhdCI6MTYxMDA4Njc5NywibmJmIjoxNjEwMDg2Nzk3LCJleHAiOjE2MTA2OTE1OTcsImRhdGEiOnsidXNlciI6eyJpZCI6MX19fQ.39c3Sw9J9g_QnqdltCW2F4-DbE_mzEQnmy6VaGRfr8A";
  
  private _url: string = "http://127.0.0.1/wordpress/wp-json/wc/v2/products";

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get<any>(this._url, {
      responseType: 'json',
      headers : { Authorization: `Bearer ${this.wp_token}` }
    });
  }

  get(id: number){
    return this.http.get<any>(`${this._url}/${id}`, {
      responseType: 'json',
      headers : { Authorization: `Bearer ${this.wp_token}` }
    });
  }

}
