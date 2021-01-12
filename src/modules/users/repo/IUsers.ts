/* eslint-disable no-unused-vars */
export interface IUsers {
  save(data: any): Promise<any>;
  findByUsername(username: string): Promise<any>;
  findById(_id: string): Promise<any>;
}
