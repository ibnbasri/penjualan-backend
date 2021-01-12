import { v4 as uuidv4 } from 'uuid';
import { Identifier } from './Identifier';

/* eslint-disable import/prefer-default-export */
export class UniqueEntityID extends Identifier<string | number> {
  constructor(id?: string | number) {
    super(id || uuidv4());
  }
}
