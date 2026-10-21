import { Component, signal } from '@angular/core';
import { User } from './component/user/user';
import { Admin } from './component/admin/admin';

@Component({
  selector: 'app-root',
  imports: [User, Admin],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tutorial1');
}
