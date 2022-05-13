import { Module } from '@nestjs/common';

import { CommonModule } from '../../modules';

import { JobController } from './job.controller';
import { JobDomain } from './job.domain';

@Module({
  imports: [CommonModule],
  controllers: [JobController],
  providers: [JobDomain],
})
export class JobModule {}
