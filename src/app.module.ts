/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './domain/user';
import { JobModule } from './domain/job';
import { CommonModule } from './modules';

const url = process.env.MONGO_URL || 'localhost';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${url}:27017?serverSelectionTimeoutMS=2000&authSource=admin`,
      {
        dbName: 'user-jobs-api',
        auth: {
          username: process.env.MONGO_INITDB_ROOT_USERNAME,
          password: process.env.MONGO_INITDB_ROOT_PASSWORD,
        },
      },
    ),
    CommonModule,
    UserModule,
    JobModule,
  ],
})
export class AppModule {}
