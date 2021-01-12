import { Right } from './Right';
import { Either } from './interface';

export class Left<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  /* eslint-disable class-methods-use-this */
  isLeft(): this is Left<L, A> {
    return true;
  }

  /* eslint-disable class-methods-use-this */
  isRight(): this is Right<L, A> {
    return false;
  }
}

export const left = <L, A>(a: A): Either<L, A> => new Left<L, A>(a);
