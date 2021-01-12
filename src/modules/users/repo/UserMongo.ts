import { Document, model, Schema } from 'mongoose';

export interface UserDocuments extends Document {
  name: string;
  username: string;
  password: string;
  roles: string;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  roles: { type: String, required: true },
});

export default model<UserDocuments>('Users', UserSchema);
