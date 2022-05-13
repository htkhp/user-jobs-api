import { Module } from '@nestjs/common';

import { CommonModule } from '../../modules';

import { UserController } from './user.controller';
import { UserDomain } from './user.domain';

@Module({
  imports: [CommonModule],
  controllers: [UserController],
  providers: [UserDomain],
})
export class UserModule {}
