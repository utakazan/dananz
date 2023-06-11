import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { CustomizationComponent } from '../../components/customization/customization.component';
import { AdvantagesComponent } from '../../components/advantages/advantages.component';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [IntroComponent, CustomizationComponent, AdvantagesComponent],
})
export class AboutComponent {
  title = 'About';
  source = '/assets/images/about/teamwork.webp 1x, /assets/images/about/teamwork@2x.webp 2x';
  srcImage = '/assets/images/about/teamwork.jpg';
  srcsetImage = '/assets/images/about/teamwork@2x.jpg 2x';
}
