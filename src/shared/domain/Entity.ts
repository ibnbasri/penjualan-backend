import { UniqueEntityID } from './UniqueEntityID';

/* eslint-disable no-use-before-define */
const isEntity = (v: any): v is Entity<any> => v instanceof Entity;

/* eslint-disable import/prefer-default-export */
export abstract class Entity<T> {
  protected readonly _id: UniqueEntityID;

  protected readonly props: T;

  constructor(props: T, id?: UniqueEntityID) {
    this._id = id || new UniqueEntityID();
    this.props = props;
  }

  equals(obj: Entity<T>): Boolean {
    if (obj === null || obj === undefined) return false;
    if (this === obj) return true;
    if (!isEntity(obj)) return false;
    return this._id.equals(obj._id);
  }
}
