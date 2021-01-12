import { IUsers } from '../IUsers';
import UserMongo from '../UserMongo';

/* eslint-disable import/prefer-default-export */
export class UserImp implements IUsers {
  private model;

  constructor(models: typeof UserMongo) {
    this.model = models;
  }

  async findByUsername(username: string) {
    return this.model.findOne({ username });
  }

  async findById(_id: string) {
    return this.model.findOne({ _id });
  }

  async save(data: any) {
    return this.model.create({ ...data });
  }
}
