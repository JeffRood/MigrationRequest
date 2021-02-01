import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IPerson } from 'src/app/Models/Person';
import { IRequest } from 'src/app/Models/Request';
import { PagesService } from '../pages.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  RequestForm: FormGroup;
  RequestList: IRequest[] = [];
  isLoading: boolean = false;
  constructor(public pagesServices: PagesService,  public fb: FormBuilder,  public toast: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.BuildRequestForm();
    this.ListRequest();
    if ( this.pagesServices.PersonList.length == 0) {
      
      this.pagesServices.GetPersonsList();
    }
  }

  simpleAlert(RequestId){
    Swal.fire({
      title: 'Seguro desea eliminar la Solicitud?',
      text: 'Se eliminaran los datos de su solicitud!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, eliminar'
    }).then((result) => {
      if (result.value) {
        this.RemoveRequest(RequestId)
        Swal.fire(
          'Eliminado!',
          'Solicitud eliminada correctamente.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se ha eliminado la solicitud :)',
          'error'
        )
      }
    })
  }
  ListRequest() {
    this.pagesServices.GetRequestsList().then(x => 
      {
    this.RequestList = x
    this.isLoading = false;
           
      });
  }

  BuildRequestForm() {
    this.RequestForm = this.fb.group({
      id: ["", Validators.required],
      PersonId: ["", Validators.required],
      StatusId: ['', Validators.required],
      CreationDate: ["", Validators.required]

    });
  }

  ReturnRequest() {
    let form = this.RequestForm.controls;
    let result: IRequest = {
      personId : form.PersonId.value,
      statusId : 1,
      creationDate : new Date()
    }

    return result;
  }

CreateRequest(){

this.pagesServices.PostRequestCreate(this.ReturnRequest()).then(x => {
  if (x.success) {
    this.toast.success('Solicitud creada correctamente ');
    this.clearModal();
    this.ListRequest();
  } else this.toast.error('No se ha podido crear la Solicitud intente mas tarde')  
});

}

clearModal() {
  document.getElementById("cancelarRequestModal").click();
  this.RequestForm.reset();
  this.BuildRequestForm();
}

  UpdateRequest() {
    this.pagesServices.PostRequestUpdate(this.ReturnRequest()).then( x => {
   if (x.success) {
     this.toast.success('Solicitud creada correctamente ')
   } else this.toast.error('No se ha podido Actualizar la persona intente mas tarde')  
    });

  }

  RemoveRequest(RequestId) {
    
    this.pagesServices.PostRequestRemove(RequestId).then( x => {
   if (x.success) {
     this.clearModal();
     this.ListRequest();
   } else this.toast.error('No se ha podido Eliminar la persona intente mas tarde')  
    });

  }
}
