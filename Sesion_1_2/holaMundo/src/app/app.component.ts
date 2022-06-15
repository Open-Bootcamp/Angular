import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = '@masajo';

  /* Esta función se ejecutará cuando en el Hijo (Saludo Component) se pulse un botón */
  recibirMensajeDelHijo(evento: string){
    alert(evento);
  }

}
