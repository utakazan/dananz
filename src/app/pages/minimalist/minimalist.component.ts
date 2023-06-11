import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { OverviewComponent } from '../../components/overview/overview.component';

@Component({
  standalone: true,
  selector: 'app-minimalist',
  templateUrl: './minimalist.component.html',
  styleUrls: ['./minimalist.component.scss'],
  imports: [IntroComponent, OverviewComponent],
})
export class MinimalistComponent {
  title = 'Minimalist Room';
  source = '/assets/images/minimalist/minimalist-hero.webp 1x, /assets/images/minimalist/minimalist-hero@2x.webp 2x';
  srcImage = '/assets/images/minimalist/minimalist-hero.jpg';
  srcsetImage = '/assets/images/minimalist/minimalist-hero@2x.jpg 2x';
}
