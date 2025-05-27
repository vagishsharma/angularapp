import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngmodel-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ngmodel-page.component.html',
  styleUrl: './ngmodel-page.component.scss'
})
export class NgmodelPageComponent {
  twowaybind: string = '';
}
