import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { NavComponent } from './components/nav/nav.component';

@Component({
  standalone: true,
  imports: [RouterModule, CalculatorComponent, NavComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-nx-project';
}
