import { Route } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SectionAComponent } from './components/section-a/section-a.component';
import { SectionBComponent } from './components/section-b/section-b.component';

export const appRoutes: Route[] = [
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'section-a',
    component: SectionAComponent,
  },
  { path: 'section-b', component: SectionBComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
];
