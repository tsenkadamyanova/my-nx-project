import { evaluate } from '@alansuprnation/evaluator';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { StorageService } from '../../services/storage.service';
import { StatusLedComponent } from '../status-led/status-led.component';

import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';

const EXPRESSION = 'expressions';

type HistoryResult = {
  expression: string;
  value: number;
};

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, StatusLedComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent implements OnInit {
  constructor(private readonly storage: StorageService) {}

  readonly expression = evaluate('1+2+sin(24+cos(23))');

  readonly name = new FormControl('');

  // TODO : revise this subjects
  readonly result$ = new BehaviorSubject<number | null>(null);
  readonly success$ = new BehaviorSubject<boolean | null>(null);

  readonly destroyRef = inject(DestroyRef);

  readonly message$ = this.success$.pipe(
    map((result) => (result ? `Valid expression` : 'Invalid expression')),
    takeUntilDestroyed()
  );

  get history() {
    return this.getHistory();
  }

  ngOnInit() {
    this.name.valueChanges
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.validate();
      });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (!this.name.value) {
      return;
    }
    this.addToStorage();
  }

  validate() {
    if (!this.name.value) {
      return;
    }
    const checkValue = evaluate(this.name.value);
    const { success } = checkValue;

    this.success$.next(success);

    if (success) {
      this.result$.next(checkValue.value);
    }
  }

  clear() {
    this.storage.clearData();
  }

  appendInput(value: string) {
    this.name.setValue(this.name.value + value);
  }
  clearValue() {
    this.name.setValue('');
  }

  private addToStorage() {
    const expression = this.name.value;
    const history = this.getHistory();

    if (!expression) {
      return;
    }

    this.result$
      .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (!value) {
          return;
        }

        this.saveHistoryToStorage(
          history && history.length
            ? [{ expression, value }, ...history]
            : [{ expression, value }]
        );
      });

    this.updateValue(expression);
  }

  private updateValue(current: string) {
    const getExpression = this.getHistory().find(
      ({ expression }) => expression === current
    );
    this.name.setValue(`${current}=${getExpression?.value}`);
  }

  private getHistory(): HistoryResult[] {
    return JSON.parse(this.storage.getData(EXPRESSION) || '[]');
  }
  private saveHistoryToStorage(data: HistoryResult[]) {
    this.storage.saveData(EXPRESSION, JSON.stringify(data));
  }
}
