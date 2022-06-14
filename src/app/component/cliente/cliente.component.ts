import { Component, OnInit } from '@angular/core';
import { ClienteTO } from 'src/app/models/cliente-to';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: ClienteTO[] = [];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.clienteService.obtenerClientes().subscribe(
      client=>this.clientes=client
    );
  }

  eliminar(cliente:ClienteTO):void{
    console.group("ELIMINADO");
    this.clienteService.eliminarCliente(cliente.id).subscribe(
      res=>this.clienteService.obtenerClientes().subscribe(
        Response=>this.clientes=Response
      )
    );
  }
}
