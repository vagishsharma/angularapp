import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
