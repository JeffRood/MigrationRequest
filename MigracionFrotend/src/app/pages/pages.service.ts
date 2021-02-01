import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicResult } from '../Models/BasicResult';
import { IPerson } from '../Models/Person';
import { IRequest } from '../Models/Request';
import { APIURL } from '../Shared/urls';
@Injectable({
  providedIn: 'root'
})
export class PagesService {
  Usuario;
  PersonList: IPerson[] = [];
  constructor(private http: HttpClient) { }


  GetPersonsList(): Promise<IPerson[]>  {
    return new Promise((resolve, reject) => {      
      this.http.get(APIURL.Person.List).subscribe(success => {
        resolve(success as IPerson[]);
      }, () => {false} );
    }).then(x => this.PersonList = x as IPerson[]);
  }



  PostPersonCreate(Person :IPerson, AppendFile): Promise<BasicResult<IPerson>>  {

  
    let formData: FormData = new FormData();

     formData.append('name', Person.name.toString());
    formData.append( 'lastName', Person.lastName.toString());
    formData.append('birthday', Person.birthday.toString());
    formData.append('address', Person.address.toString());
    formData.append('passport', Person.passport.toString());

    formData.append('sex', Person.sex.toString());
    formData.append('File', AppendFile);

    return new Promise((resolve, reject) => {      
      this.http.post(APIURL.Person.Create, formData).subscribe(success => {
        resolve(success as BasicResult<IPerson>);
      }, () => {reject(null)} );
    });
  }

  PostPersonRemove(PerdonId: Number): Promise<BasicResult<IPerson>> {
    return new Promise((resolve, reject) => {      
      this.http.post(APIURL.Person.Remove + '?PersonId=' +PerdonId , PerdonId).subscribe(success => {
        resolve(success as BasicResult<IPerson>);
      }, () => {reject(null)} );
    });

  }

  
  PostPersonUpdate(Persons: IPerson): Promise<BasicResult<IPerson>> {
    return new Promise((resolve, reject) => {      
      this.http.post(APIURL.Person.Update , Persons).subscribe(success => {
        resolve(success as BasicResult<IPerson>);
      }, () => {reject(null)} );
    });

  }

  
  GetRequestsList(): Promise<IRequest[]>  {
    return new Promise((resolve, reject) => {      
      this.http.get(APIURL.Request.List).subscribe(success => {
        resolve(success as IRequest[]);
      }, () => {false} );
    });
  }



  PostRequestCreate(Request :IRequest): Promise<BasicResult<IRequest>>  {
    return new Promise((resolve, reject) => {      
      this.http.post(APIURL.Request.Create, Request).subscribe(success => {
        resolve(success as BasicResult<IRequest>);
      }, () => {reject(null)} );
    });
  }

  PostRequestRemove(RequestId: number): Promise<BasicResult<IRequest>> {
    debugger;
    let object = {
      RequestId: RequestId
    }
    return new Promise((resolve, reject) => {      
      this.http.post(APIURL.Request.Remove + '?RequestId=' + RequestId, object).subscribe(success => {
        resolve(success as BasicResult<IRequest>);
      }, () => {reject(null)} );
    });

  }

  
  PostRequestUpdate(Request: IRequest): Promise<BasicResult<IRequest>> {
    return new Promise((resolve, reject) => {      
      this.http.post(APIURL.Request.Remove, Request).subscribe(success => {
        resolve(success as BasicResult<IRequest>);
      }, () => {reject(null)} );
    });

  }

}


