import { evaluate } from '@alansuprnation/evaluator';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-expression',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expression.component.html',
  styleUrl: './expression.component.scss',
})
export class ExpressionComponent {
  readonly name = new FormControl('');

  readonly result$ = new BehaviorSubject<boolean | null>(null);

  readonly message$ = this.result$.pipe(
    map((result) => (result ? 'Valid expression' : 'Invalid expression'))
  );

  onSubmit(event: Event) {
    console.log('submit', event);
  }
  validate(_event: Event) {
    const checkValue = evaluate(this.name.value || '');

    this.result$.next(checkValue.success);
  }
}
