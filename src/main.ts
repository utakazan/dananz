import { importProvidersFrom } from '@angular/core';
import { RouterModule, TitleStrategy } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';

import { TitleService } from './app/services/title.service';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    {
      provide: TitleStrategy,
      useClass: TitleService,
    },
  ],
}).catch((err) => console.error(err));
