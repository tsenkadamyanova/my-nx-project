import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  choice,
  choiceN,
  doUntil,
  parseCharacter,
  parseCloseParenthesis,
  parseCloseParenthesis2,
  parseNumber,
  parseOpenParenthesis,
  parseOpenParenthesis2,
  parseOperator,
  zip,
} from '@my-nx-project/core';

@Component({
  selector: 'app-section-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-b.component.html',
  styleUrl: './section-b.component.scss',
})
export class SectionBComponent {
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
