import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { DesignersComponent } from '../../components/designers/designers.component';
import { AdvantagesComponent } from '../../components/advantages/advantages.component';

@Component({
  standalone: true,
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  imports: [IntroComponent, DesignersComponent, AdvantagesComponent],
})
export class TeamComponent {
  title = 'Our Teams';
  source = '/assets/images/team/team-hero.webp 1x, /assets/images/team/team-hero@2x.webp 2x';
  srcImage = '/assets/images/team/team-hero.jpg';
  srcsetImage = '/assets/images/team/team-hero@2x.jpg 2x';
}
