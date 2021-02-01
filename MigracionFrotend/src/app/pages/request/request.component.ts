import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPerson } from 'src/app/Models/Person';
import { IRequest } from 'src/app/Models/Request';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  RequestForm: FormGroup;
  RequestList: IRequest[] = [];
  
  constructor(public pagesServices: PagesService,  public fb: FormBuilder,  public toast: ToastrService) { }

  ngOnInit(): void {
  }


  ListPerson() {
    this.pagesServices.GetRequestsList().then(x => this.RequestList = x);
  }

  BuildPersonForm() {
    this.RequestForm = this.fb.group({
      iD: ["", Validators.required],
      PersonId: ["", Validators.required],
      StatusId: ["", Validators.required],
      CreationDate: ["", Validators.required]

    });
  }

  ReturnRequest() {
    let form = this.RequestForm.controls;
    let result: IRequest = {
      personId : form.PersonId.value,
      statusId : form.StatusId.value,
      creationDate : form.CreationDate.value
    }

    return result;
  }


  UpdatePerson() {
    this.pagesServices.PostRequestUpdate(this.ReturnRequest()).then( x => {
   if (x.success) {
     this.toast.success(x.message)
   } else this.toast.error('No se ha podido Actualizar la persona intente mas tarde')  
    });

  }

  RemovePerson() {
    this.pagesServices.PostPersonRemove(this.ReturnRequest().Id).then( x => {
   if (x.success) {
     this.toast.success(x.message)
   } else this.toast.error('No se ha podido Eliminar la persona intente mas tarde')  
    });

  }
}
