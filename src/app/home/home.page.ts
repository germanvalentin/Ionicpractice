import { Component,OnInit } from '@angular/core';
import { AnotadorService } from 'src/app/services/anotador.service';
import {Gasto} from '../interfaces/gastos.interface';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  titulobuscar ='';
  gastos: Gasto[]=[];
  gastosfiltrado = this.gastos.filter(gasto => gasto.titulo.includes(this.titulobuscar));
  model: Gasto = {id: '', titulo: '', importe: '' , descripcion: '', fecha: '' , categoria: '',};

    constructor(private anotadorservice: AnotadorService)  { 
 
  }
  
    ngOnInit(): void {
    
      this.anotadorservice.getAllGasto().subscribe(resp =>{
  console.log(resp);
  this.gastos =resp;
      })
    }
   onSubmit() {
     console.log(this.model);
     this.anotadorservice.addGasto(this.model).subscribe(resp =>{
      console.log(resp);
    
   })}
   buscar($event: Event) {
 //   this.titulobuscar = $event.detail.value;
    console.log($event)
  }
}
    