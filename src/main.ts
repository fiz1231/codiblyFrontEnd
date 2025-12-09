import { bootstrapApplication } from '@angular/platform-browser';

import { Endpoint1 } from './app/endpoint1/endpoint1';
import { Endpoint2 } from './app/endpoint2/endpoint2';



bootstrapApplication(Endpoint1)
  .catch(err => console.error(err));

  bootstrapApplication(Endpoint2)
  .catch(err => console.error(err));
