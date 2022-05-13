import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { isNil, isEmpty } from 'lodash'

import { User } from '../../schemas'

import { CreateOrUpdateUserDto } from './dto'
import { UserDomain } from './user.domain'

@Controller('users')
export class UserController {
  constructor(private readonly user: UserDomain) {}

  @Get(':id?')
  async get(@Param('id') id?: string): Promise<Array<User> | User> {
    if (!isNil(id) && !isEmpty(id)) return this.user.get(+id)

    return this.user.findAll()
  }

  @Post()
  async create(@Body() user: CreateOrUpdateUserDto): Promise<number> {
    return this.user.create(user)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: CreateOrUpdateUserDto): Promise<User> {
    if (isNil(id) || isEmpty(id)) throw new Error(`User's id is required`)

    return this.user.update(+id, user)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    if (isNil(id) || isEmpty(id)) throw new Error(`User's id is required`)

    return this.user.delete(+id)
  }
}
