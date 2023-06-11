import { Component } from '@angular/core';
import { IntroComponent } from '../../components/intro/intro.component';
import { LocationComponent } from '../../components/location/location.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [IntroComponent, LocationComponent, ContactFormComponent],
})
export class ContactComponent {
  title = 'Contact Us';
}
