import { Component, ViewEncapsulation } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  standalone:true,
  selector: 'org-nx-welcome',
  templateUrl: './main.component.html',
  styleUrls: ['./main.components.scss'],
  imports: [HeroComponent],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
