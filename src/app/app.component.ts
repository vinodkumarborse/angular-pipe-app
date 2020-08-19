import { Component } from '@angular/core';
import { User } from "./user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [
    new User(1, 'Vinu', 'Borse', 30, 'Admin'),
    new User(2, 'Vinod', 'Borse', 20, 'User'),
  ];
}
