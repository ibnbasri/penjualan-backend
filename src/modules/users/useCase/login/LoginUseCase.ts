import { IUsers } from '../../repo/IUsers';

/* eslint-disable import/prefer-default-export */
export class LoginUseCase {
  private userRepo;

  constructor(IuserRepo: IUsers) {
    this.userRepo = IuserRepo;
  }

  public async execute(data: any) {}
}
