import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExpressionComponent } from './expression.component';
import { HomeComponent } from './home.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    HomeComponent,
    ExpressionComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-nx-project';
}
