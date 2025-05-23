import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-body',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app-body.component.html',
  styleUrl: './app-body.component.scss'
})
export class AppBodyComponent {
  firstName : string = '';
}
