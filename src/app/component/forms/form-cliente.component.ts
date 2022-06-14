import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteTO } from 'src/app/models/cliente-to';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})

export class FormClienteComponent implements OnInit {
  cliente!: ClienteTO;
  formCliente: FormGroup;
  msgError: string = "";
  constructor(private clienteService:ClienteService,private router:Router) { 
    this.formCliente = new FormGroup({
      'firstName': new FormControl(), 
      'lastName': new FormControl(),
      'email': new FormControl(),
      'phone': new FormControl(),
      'address': new FormControl(),
    });
  }

  ngOnInit(): void {
    this.cliente=new ClienteTO();
    }

  guardar():void{
    console.log(this.formCliente.value);
    this.cliente=this.formCliente.value;
    this.clienteService.guardar(this.cliente)
      .subscribe(data => {
        console.log("Cliente -AGREGADO-");
        this.router.navigate(['/clientes']);
      },error => {
        this.eventErrors(error);
      });
  }
  eventErrors(error: { status: number; error: { description: string; }; }){
    console.error('Fallo el consumo', error.status);
    if(error.status == 409){
      this.msgError =  error.error.description;
    }else{
      this.msgError =  "Ocurrio un error al procesar su petición";
    }
    
  }
}
