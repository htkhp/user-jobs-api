import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'

import { JobRepository, UserRepository } from '../../repositories'
import { User } from '../../schemas'

import { CreateOrUpdateUserDto } from './dto'

@Injectable()
export class UserDomain {
  constructor(private readonly userRepository: UserRepository, private readonly jobRepository: JobRepository) {}

  async create(user: CreateOrUpdateUserDto): Promise<number> {
    await this.validateUser(user)

    return this.userRepository.create(user as User)
  }

  async update(id: number, user: CreateOrUpdateUserDto): Promise<User> {
    await Promise.all([this.get(id), this.validateUser(user)])

    return this.userRepository.update(id, user as User)
  }

  async findAll(): Promise<Array<User>> {
    return this.userRepository.findAll()
  }

  async get(id: number): Promise<User> {
    const user = await this.userRepository.get(id)

    if (!user) throw new NotFoundException('User not found')

    return user
  }

  async delete(id: number): Promise<boolean> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_user, hasSubordinates] = await Promise.all([this.get(id), this.userRepository.hasSubordinates(id)])

    if (hasSubordinates)
      throw new BadRequestException('Cannot delete user that has subordinates. Set new upper users first.')

    return this.userRepository.delete(id)
  }

  private async validateUser(user: CreateOrUpdateUserDto): Promise<void> {
    await Promise.all([this.validateUpperUser(user.reports_to), this.validateJob(user.job)])
  }

  private async validateUpperUser(id: number): Promise<void> {
    const user = await this.userRepository.get(id)

    if (!user) throw new NotFoundException('Upper user not found')
  }

  private async validateJob(id: number): Promise<void> {
    const user = await this.jobRepository.get(id)

    if (!user) throw new NotFoundException('Job not found')
  }
}
