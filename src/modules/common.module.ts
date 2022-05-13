import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { JobRepository, UserRepository } from '../repositories';
import { User, UserSchema, Job, JobSchema } from '../schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Job.name, schema: JobSchema },
    ]),
  ],
  providers: [JobRepository, UserRepository],
  exports: [JobRepository, UserRepository],
})
export class CommonModule {}
