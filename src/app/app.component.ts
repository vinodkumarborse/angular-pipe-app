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
    new User(3, 'Krish', 'Nikam', 17, 'User'),
    new User(4, 'Pranjal', 'Patil', 5, 'Guest'),
    new User(5, 'Tanmay', 'Nikam', 15, 'User')
  ];
}
