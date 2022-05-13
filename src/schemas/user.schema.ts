import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

import { Job } from './job.schema';

export type UserDocument = User & Document;

@Schema({
  toJSON: {
    transform: (_doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class User {
  @Prop({ type: SchemaTypes.Number })
  _id: number;

  id: number;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ type: SchemaTypes.Number })
  job: number | Job;

  @Prop({ type: SchemaTypes.Number })
  reports_to: number | User;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.plugin(autoIncrement, {
  model: 'User',
  startAt: 5,
  unique: true,
});

export { UserSchema };
