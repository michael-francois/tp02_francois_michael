import { Component } from '@angular/core';
import { Client } from 'interfaces/Client';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent {

  lastName: string = '';
  firstName: string = '';
  address: string = '';
  zipCode: string = '';
  city: string = '';
  country: string = '';
  email: string = '';
  civility: string = '';
  login: string = '';
  password: string = '';

  onSubmit() {
    new Client(
      this.lastName, this.firstName, this.address,
      this.zipCode, this.city, this.country,
      this.email, this.civility,
      this.login, this.password);
  }
}
