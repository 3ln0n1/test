import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { ClienteTO } from '../models/cliente-to';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http: HttpClient) { }


  private _hostUrl = `${environment.uri._url}`

  private _guardarCliente = `${this._hostUrl}/add`
  private _obtenerClientes = `${this._hostUrl}/clientes`
  private _modificarCliente = `${this._hostUrl}/update`
  private _obtenerCliente = `${this._hostUrl}/cliente`
  private _eliminarCliente = `${this._hostUrl}/delete`

  guardar(cliente: ClienteTO): Observable<ClienteTO> {
    return this._http.post<ClienteTO>(this._guardarCliente, cliente);
  }

  obtenerClientes():Observable<ClienteTO[]>{
    return this._http.get<ClienteTO[]>(this._obtenerClientes);
  }

  obtenerCliente(id:number):Observable<ClienteTO>{
    return this._http.get<ClienteTO>(this._obtenerCliente+'/'+id);
  }

  eliminarCliente(id:number):Observable<ClienteTO>{
    return this._http.delete<ClienteTO>(this._eliminarCliente+'/'+id);
  }
}
