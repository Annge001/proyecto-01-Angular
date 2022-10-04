import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() addUsuario: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
/*
  formulario = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.min(21), Validators.max(99), this.validarEdad()]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    habilidades: new FormArray([new FormControl()])
  })



  submitForm(): void {
    console.log(this.formulario.value);
    this.formulario.reset();
    this.addUsuario.emit(this.formulario.value);
  }

  get habilidades(): FormArray {
    return this.formulario.get('habilidades') as FormArray;
  }

  agregarHabilidad(): void {
    this.habilidades.push(new FormControl());
  }

  validarEdad(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return (!Number.isInteger(parseInt(control.value))) ? { errorEdad: true } : null;
    }
  }*/
}


