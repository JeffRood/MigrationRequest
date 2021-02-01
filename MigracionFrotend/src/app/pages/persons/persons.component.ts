import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPerson } from 'src/app/Models/Person';
import { PagesService } from '../pages.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  PersonForm: FormGroup;
  isLoading: boolean = false;
  public file: File;
  constructor(public pagesServices: PagesService,  public fb: FormBuilder,  public toast: ToastrService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.BuildPersonForm();   
      this.pagesServices.GetPersonsList();
    this.isLoading = false;

  }
  simpleAlert(PersonId){
    Swal.fire({
      title: 'Seguro desea eliminar esta persona?',
      text: 'Se eliminaran los datos de esta persona!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, eliminar'
    }).then((result) => {
      if (result.value) {
        this.RemovePerson(PersonId)
        Swal.fire(
          'Eliminado!',
          'Persona Eliminada correctamente.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'No se ha eliminado la persona :)',
          'error'
        )
      }
    })
  }


  BuildPersonForm() {
    this.PersonForm = this.fb.group({
      iD: ["", Validators.required],
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      birthday: ["", Validators.required],
      passport: ["", Validators.required],
      address: [""],
      sex: ["", [Validators.required, Validators.email]],
      photo: ["", Validators.required],
      TituloFormulario: ['Crear Persona']
    });
  }

  ReturnPerson() {
    let form = this.PersonForm.controls;
    let result: IPerson = {
      name : form.name.value,
      lastName : form.lastName.value,
      passport : form.passport.value,
      address : form.address.value,
      sex : form.sex.value,
      photo : form.photo.value,
      birthday : form.birthday.value, 

    }

    return result;
  }

CreatePerson() {
  this.pagesServices.PostPersonCreate(this.ReturnPerson(), this.file).then( x => {
    if (x.success) {
      this.toast.success(x.message);
      this.clearModal();
      this.pagesServices.GetPersonsList();
    } else this.toast.error('No se ha podido Actualizar la persona intente mas tarde')  
     });
}
  UpdatePerson() {
    this.pagesServices.PostPersonUpdate(this.ReturnPerson()).then( x => {
   if (x.success) {
     this.toast.success(x.message)
   } else this.toast.error('No se ha podido Actualizar la persona intente mas tarde')  
    });

  }

  RemovePerson(PersonId) {
    this.pagesServices.PostPersonRemove(PersonId).then( x => {
   if (x.success) {
     this.clearModal();
     this.pagesServices.GetPersonsList();
   } else this.toast.error('No se ha podido Eliminar la persona intente mas tarde')  
    });

  }

  getArchivo(event) {
    const formato = event.target.files[0].name.slice(-4);
    this.file = <File>event.target.files[0];
  }



  clearModal() {
    document.getElementById("cancelarMenuModal").click();
    this.PersonForm.reset();
    this.BuildPersonForm();
  }
}
