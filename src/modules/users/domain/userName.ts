import { Result } from '../../../shared/core/Result';
import { Guard } from '../../../shared/core/Guard';
import { ValueObject } from '../../../shared/domain/ValueObject';

interface UsernameProps {
  username: string;
}

/* eslint-disable import/prefer-default-export */
export class UserName extends ValueObject<UsernameProps> {
  public static maxLength: number = 15;

  public static minLength: number = 2;

  get value() {
    return this.props.username;
  }

  /* eslint-disable no-useless-constructor */
  constructor(props: UsernameProps) {
    super(props);
  }

  public static create(props: UsernameProps) {
    const usernameResult = Guard.againstNullOrUndefinedBulk(
      props.username,
      'username',
    );

    if (!usernameResult.succeeded) {
      return Result.fail<UserName>(usernameResult.message);
    }

    const minLengthResult = Guard.againstAtLeast(
      this.minLength,
      props.username,
    );
    if (minLengthResult.succeeded === false) {
      return Result.fail<UserName>(minLengthResult.message);
    }
    return Result.ok<UserName>(new UserName(props));
  }
}
