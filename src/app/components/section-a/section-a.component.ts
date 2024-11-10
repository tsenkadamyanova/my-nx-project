import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import {
  cubes,
  factorial,
  prodCubes,
  prodCubes2,
  prodFactorial,
  prodFactorial2,
  prodInts,
  prodInts2,
  prodSquares,
  prodSquares2,
  sumCubes,
  sumCubes2,
  sumCubes3,
  sumFactorial,
  sumFactorial2,
  sumInts,
  sumInts2,
  sumMap2,
  sumScquares2,
  sumSquares,
} from '@my-nx-project/core';

@Component({
  selector: 'app-section-a',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule],
  templateUrl: './section-a.component.html',
  styleUrl: './section-a.component.scss',
})
export class SectionAComponent {
  readonly showSum = sumInts(1, 5);
  readonly showSumSquares = sumSquares(1, 5);
  readonly showSumCubes = sumCubes(1, 5);
  readonly showSumFactorial = sumFactorial(1, 5);

  readonly showSum2 = sumInts2(1, 5);
  readonly showSumSquares2 = sumScquares2(1, 5);
  readonly showSumCubes2 = sumCubes2(1, 5);
  readonly showSumFactorial2 = sumFactorial2(1, 5);

  readonly showProdInts = prodInts(1, 5);
  readonly showProdSquares = prodSquares(1, 5);
  // in the example the result for prodSquares is 120 which isn't the correct result of 1*4*9*16*25 = 14400
  readonly showProdCubes = prodCubes(1, 5);
  readonly showProdFactorial = prodFactorial(1, 5);
  // in the example the result for prodFactorial is 3456 which isn't the correct product of
  // the fact(5)* fact(4)* fact(3)* fact(2)* fact(1) = 34560

  readonly showProdInts2 = prodInts2(1, 5);
  readonly showProdSquares2 = prodSquares2(1, 5);
  readonly showProdCubes2 = prodCubes2(1, 5);
  readonly showProdFactorial2 = prodFactorial2(1, 5);
  readonly showSumCubes3 = sumCubes3(1, 5);
  readonly showSumCubes4 = sumMap2(cubes)(1, 5);
  readonly showSumFactorial3 = sumMap2(factorial)(1, 5);
}
