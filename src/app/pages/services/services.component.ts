import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { AchievementComponent } from '../../components/achievement/achievement.component';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  standalone: true,
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports: [IntroComponent, AchievementComponent, ProductComponent],
})
export class ServicesComponent {
  title = 'Services';
  source = '/assets/images/services/furniture-hero.webp 1x, /assets/images/services/furniture-hero@2x.webp 2x';
  srcImage = '/assets/images/services/furniture-hero.jpg';
  srcsetImage = '/assets/images/services/furniture-hero@2x.jpg 2x';
}
