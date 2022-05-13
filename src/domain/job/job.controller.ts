import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { isNil, isEmpty } from 'lodash';

import { Job } from '../../schemas';

import { CreateOrUpdateJobDto } from './dto';
import { JobDomain } from './job.domain';

@Controller('jobs')
export class JobController {
  constructor(private readonly job: JobDomain) {}

  @Get(':id?')
  async get(@Param('id') id?: string): Promise<Array<Job> | Job> {
    if (!isNil(id) && !isEmpty(id)) return this.job.get(+id);

    return this.job.findAll();
  }

  @Post()
  async create(@Body() job: CreateOrUpdateJobDto): Promise<number> {
    return this.job.create(job);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() job: CreateOrUpdateJobDto,
  ): Promise<Job> {
    if (isNil(id) || isEmpty(id)) throw new Error(`Job's id is required`);

    return this.job.update(+id, job);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    if (isNil(id) || isEmpty(id)) throw new Error(`Job's id is required`);

    return this.job.delete(+id);
  }
}
