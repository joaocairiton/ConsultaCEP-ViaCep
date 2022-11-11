import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Cep {
    cep: string;
    logradouro: string;
    localidade: string;
    bairro: string;
    uf: string;
    ddd: string;
}



@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
   


  constructor(private http: HttpClient) { }

  getCEP(cep: Cep):Observable<Cep>{
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/` );
  }
  
 


  
}
