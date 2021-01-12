import { Result } from 'src/shared/core/Result';
import { AggregateRoot } from 'src/shared/domain/AggregateRoot';
import { UniqueEntityID } from 'src/shared/domain/UniqueEntityID';

interface UserProps {
  name: string;
  username: string;
  password: string;
  roles: string;
}

/* eslint-disable import/prefer-default-export */
export class Users extends AggregateRoot<UserProps> {
  get name() {
    return this.props.name;
  }

  get username() {
    return this.props.username;
  }

  get password() {
    return this.props.password;
  }

  get roles() {
    return this.props.roles;
  }

  /* eslint-disable no-useless-constructor */
  constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityID) {}
}
