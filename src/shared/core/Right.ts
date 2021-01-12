import { Left } from './Left';
import { Either } from './interface';
/* eslint-disable import/prefer-default-export */
export class Right<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  /* eslint-disable class-methods-use-this */
  isRight(): this is Left<L, A> {
    return false;
  }

  isLeft(): this is Right<L, A> {
    return true;
  }
}

export const right = <L, A>(a: A): Either<L, A> => new Right<L, A>(a);
