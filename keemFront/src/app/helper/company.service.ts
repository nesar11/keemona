import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  uri = 'http://localhost:3200/api/companies';

  constructor( private http: HttpClient) { }
  getCompany(){
    return this.http.get(`${this.uri}`);
  }
  getCompanyById(id: string){
    return this.http.get(`${this.uri}/${id}`);
  }

  deleteCompany(id: string){
    return this.http.delete(`${this.uri}/${id}`);
  }
}
