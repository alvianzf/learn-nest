import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PasswordlessDataDto } from './dto/passwordless-data.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(createUserDto: CreateUserDto): PasswordlessDataDto {
    const user = this.usersRepository.createUser(createUserDto);

    return this.toPasswordlessData(user);
  }

  findAll(): PasswordlessDataDto[] {
    return this.usersRepository
      .getAllUsers()
      .map((user) => this.toPasswordlessData(user));
  }

  findOne(id: number): PasswordlessDataDto {
    const user = this.usersRepository.getOneUser(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.toPasswordlessData(user);
  }

  update(id: number, updateUserDto: UpdateUserDto): PasswordlessDataDto {
    const user = this.usersRepository.updateUser(id, updateUserDto);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.toPasswordlessData(user);
  }

  remove(id: number): PasswordlessDataDto {
    const user = this.usersRepository.removeUser(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.toPasswordlessData(user);
  }

  private toPasswordlessData(user: User): PasswordlessDataDto {
    return {
      email: user.email,
      username: user.username,
    };
  }
}
