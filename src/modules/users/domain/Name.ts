import { Result } from '../../../shared/core/Result';
import { Guard } from '../../../shared/core/Guard';
import { ValueObject } from '../../../shared/domain/ValueObject';

interface NameProps {
  name: string;
}

/* eslint-disable import/prefer-default-export */
export class Name extends ValueObject<NameProps> {
  get value() {
    return this.props.name;
  }

  /* eslint-disable no-useless-constructor */
  constructor(props: NameProps) {
    super(props);
  }

  public static create(props: NameProps) {
    const nameResult = Guard.againstNullOrUndefinedBulk(props.name, 'name');
    if (!nameResult.succeeded) {
      return Result.fail<Name>(nameResult.message);
    }
    return Result.ok<Name>(new Name(props));
  }
}
