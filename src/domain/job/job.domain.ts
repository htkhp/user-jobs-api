import { Injectable, NotFoundException } from '@nestjs/common';

import { JobRepository, UserRepository } from '../../repositories';
import { Job } from '../../schemas';

import { CreateOrUpdateJobDto } from './dto';

@Injectable()
export class JobDomain {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jobRepository: JobRepository,
  ) {}

  async create(job: CreateOrUpdateJobDto): Promise<number> {
    return this.jobRepository.create(job as Job);
  }

  async update(id: number, job: CreateOrUpdateJobDto): Promise<Job> {
    return this.jobRepository.update(id, job as Job);
  }

  async findAll(): Promise<Array<Job>> {
    return this.jobRepository.findAll();
  }

  async get(id: number): Promise<Job> {
    const job = await this.jobRepository.get(id);

    if (!job) throw new NotFoundException('Job not found');

    return job;
  }

  async delete(id: number): Promise<boolean> {
    if (await this.userRepository.hasWithJob(id))
      throw new Error(
        'Cannot delete job that has users. Set new job to the users.',
      );

    return this.jobRepository.delete(id);
  }
}
