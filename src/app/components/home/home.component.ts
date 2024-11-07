import { evaluate } from '@alansuprnation/evaluator';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

import {
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
  cubes,
  parseNumber,
  parseOperator,
  parseOpenParenthesis,
  parseCloseParenthesis,
  parseCharacter,
  parseOpenParenthesis2,
  parseCloseParenthesis2,
  choice,
  choiceN,
  zip,
  doUntil,
} from '@my-nx-project/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CalculatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly expression = evaluate('1+2+sin(24+cos(23))');
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

  readonly parserTest = parseNumber('123');
  readonly parserTest2 = parseNumber('1 + 2');
  readonly parserTest3 = parseNumber('+ 2');

  readonly parserOperatorTest = parseOperator('+');
  readonly parserOperatorTest2 = parseOperator('1 +');
  readonly parserOperatorTest3 = parseOperator('+ 2');

  readonly parseOpenParenthesis = parseOpenParenthesis('(');
  readonly parseOpenParenthesis2 = parseOpenParenthesis('= (');
  readonly parseOpenParenthesis3 = parseOpenParenthesis(')');

  readonly parseCloseParenthesis = parseCloseParenthesis(')');
  readonly parseCloseParenthesis2 = parseCloseParenthesis('+ )');
  readonly parseCloseParenthesis3 = parseCloseParenthesis('()');

  readonly parseOpenParenthesisParseCharacter2 = parseOpenParenthesis2('(');
  readonly parseCloseParenthesisParseCharacter2 = parseCloseParenthesis2(')');

  readonly choice = choice(parseNumber, parseOperator)('1 + 2');
  readonly choice2 = choice(parseNumber, parseOperator)('+2');
  readonly choice3 = choice(parseNumber, parseOperator)('(+');

  readonly parseOperator2 = choice(
    parseCharacter('+', 'OPERATOR'),
    parseCharacter('-', 'OPERATOR')
  )('+');

  readonly choiceN = choiceN([
    parseNumber,
    parseOpenParenthesis,
    parseOperator,
  ])('1 + 2');

  readonly choiceN2 = choiceN([
    parseNumber,
    parseOpenParenthesis,
    parseOperator,
  ])(')1 + 2(');

  readonly zip = zip(parseNumber, parseOperator)('1+');
  readonly zip2 = zip(parseNumber, parseOperator)('+1');
  readonly zip3 = zip(parseNumber, parseOperator)('1+2+3');

  readonly doUntil = doUntil(choiceN([parseNumber, parseOperator]))('1+2');

  readonly doUntil2 = doUntil(choiceN([parseNumber, parseOperator]))('1+(');
}
