import { MongoDbConnector } from './../connectors/mongodb.connector';
import { model, Document, Schema } from 'mongoose';

const authorSchema = new Schema({
  fullName: { type: Schema.Types.String, required: true, unique: true },
  createdBy: Schema.Types.String,
}, MongoDbConnector.globalSchemaOptions());

export class Author {
  _id: string;
  fullName: string;
  createdBy: string;

  constructor(init?: Partial<Author>) {
    Object.assign(this, init);
  }
}

export const AuthorModel = model<Author & Document>('Author', authorSchema);
