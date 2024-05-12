import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n select
  public name: string = 'Steven';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female'
  }

  //i18nPlural

  public clients: string[] =['Maria','Pedro','Fernando','Hernando','Martha','Melissa','Natalia','Juan'];

  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  //KeyValuePipe

  public person = {
    name: 'Steven',
    age: 26,
    address: 'Bucaramanga, Santander'
  }

  //Async Pipe

  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:',value))
  );

}
