import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
