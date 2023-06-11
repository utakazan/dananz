import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { FurnitureComponent } from '../../components/furniture/furniture.component';
import { ProductComponent } from '../../components/product/product.component';
import { MaterialComponent } from '../../components/material/material.component';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeroComponent, AboutComponent, FurnitureComponent, ProductComponent, MaterialComponent],
})
export class HomeComponent {}
