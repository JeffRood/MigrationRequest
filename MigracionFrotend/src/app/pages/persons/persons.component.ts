import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPerson } from 'src/app/Models/Person';
import { PagesService } from '../pages.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  PersonForm: FormGroup;
  PersonList: IPerson[] = [];
  public file: File;
  constructor(public pagesServices: PagesService,  public fb: FormBuilder,  public toast: ToastrService) { }

  ngOnInit(): void {
    this.ListPerson();
    this.BuildPersonForm();
  }

  ListPerson() {
    this.toast.success("Hola")
    this.pagesServices.GetPersonsList().then(x => this.PersonList = x);
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
      this.ListPerson();

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

  RemovePerson() {
    this.pagesServices.PostPersonRemove(this.ReturnPerson().Id).then( x => {
   if (x.success) {
     this.toast.success(x.message)
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
