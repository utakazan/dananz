import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: [CommonModule],
})
export class IntroComponent {
  @Input() title?: string;
  @Input() source?: string;
  @Input() srcImage?: string;
  @Input() srcsetImage?: string;
}
