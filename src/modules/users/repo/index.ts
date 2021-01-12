import UserMongo from './UserMongo';
import { UserImp } from './implements/UserImp';

const userRepo = new UserImp(UserMongo);

/* eslint-disable import/prefer-default-export */
export { userRepo };
