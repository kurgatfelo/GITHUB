import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Repo } from '../repo';
import { User } from '../user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repo : Repo;

  constructor( private http : HttpClient ) {
    this.repo = new Repo('', '', '', '');
   };
   displayRepo(user:any) {
    interface apiResponse {
      html_url:string
      name:string,
      description:string,
      language:string
    }
    
    
    let url = environment.apiUrl  + user + '/repos';
    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResponse>(url).toPromise().then(response => {
        this.repo = response!;
        console.log(this.repo)
        resolve(null)
  
      }, error => {
        reject();
        console.log(error)
      })
  
    });
    return promise
  }
  

  
  
}
