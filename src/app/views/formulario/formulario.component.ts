import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/servico/consulta.service';

@Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
    cep: any;
    logradouro: any;
    localidade: any;
    bairro: any;
    uf: any;
    ddd: any;

    constructor(private service: ConsultaService) {}

    ngOnInit(): void {}

    buscaCEP() {
        this.service.getCEP(this.cep).subscribe((data) => {
            this.cep = data.cep;
            this.logradouro = data.logradouro;
            this.localidade = data.localidade;
            this.bairro = data.bairro;
            this.uf = data.uf;
            this.ddd = data.ddd;

            console.log(this.bairro);
        });
    }
    blur(event: any) {
        this.buscaCEP();

        console.log(this.buscaCEP);
    }
}
