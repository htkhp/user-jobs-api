import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Job, JobDocument } from '../schemas';

@Injectable()
export class JobRepository {
  constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

  async create(job: Job): Promise<number> {
    const createdJob = await this.jobModel.create(
      Object.assign(new Job(), job),
    );

    return +createdJob._id;
  }

  async update(id: number, job: Job): Promise<Job> {
    const updatedJob = await this.jobModel.create(
      Object.assign(new Job(), job),
    );

    await this.jobModel.updateOne({ _id: id }, updatedJob).exec();

    return { ...updatedJob, _id: id };
  }

  async get(id: number): Promise<Job> {
    return this.jobModel.findById(id).exec();
  }

  async findAll(): Promise<Array<Job>> {
    return this.jobModel.find({}).sort({ _id: 'asc' }).exec();
  }

  async delete(id: number): Promise<boolean> {
    return !!(await this.jobModel.deleteOne({ _id: id }).exec());
  }
}
