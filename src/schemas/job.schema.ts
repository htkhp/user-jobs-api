import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';

export type JobDocument = Job & Document;

@Schema({
  toJSON: {
    transform: (_doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class Job {
  @Prop({ type: SchemaTypes.Number })
  _id: number;

  id: number;

  @Prop()
  description: string;
}

const JobSchema = SchemaFactory.createForClass(Job);

JobSchema.plugin(autoIncrement, {
  model: 'Job',
  startAt: 4,
  unique: true,
});

export { JobSchema };
