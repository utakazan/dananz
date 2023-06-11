import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-designers',
  templateUrl: './designers.component.html',
  styleUrls: ['./designers.component.scss'],
  imports: [CommonModule],
})
export class DesignersComponent {
  list = [
    '/assets/images/team/designer-1.png',
    '/assets/images/team/designer-2.png',
    '/assets/images/team/designer-3.png',
    '/assets/images/team/designer-4.png',
    '/assets/images/team/designer-5.png',
    '/assets/images/team/designer-6.png',
    '/assets/images/team/designer-7.png',
    '/assets/images/team/designer-8.png',
  ];
}
