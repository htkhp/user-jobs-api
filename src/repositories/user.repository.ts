import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from '../schemas';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: User): Promise<number> {
    const createdUser = await this.userModel.create(
      Object.assign(new User(), user),
    );

    return +createdUser._id;
  }

  async update(id: number, user: User): Promise<User> {
    await this.userModel.updateOne({ _id: id }, user).exec();

    const abc = await this.get(id);

    console.log(abc);

    return abc;
  }

  async findAll(): Promise<Array<User>> {
    return this.userModel.find().sort({ _id: 'asc' }).exec();
  }

  async get(id: number): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async delete(id: number): Promise<boolean> {
    return !!(await this.userModel.deleteOne({ _id: id }).exec());
  }

  async hasSubordinates(userId: number): Promise<boolean> {
    const docs = await this.userModel.count({ reports_to: userId }).exec();

    return docs > 0;
  }

  async hasWithJob(jobId: number): Promise<boolean> {
    const docs = await this.userModel.count({ job: jobId }).exec();

    return docs > 0;
  }
}
