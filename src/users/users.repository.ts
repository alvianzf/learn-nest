import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  private users: User[] = [
    {
      id: 1,
      email: 'andi@example.com',
      username: 'andi',
      password: 'rahasia123',
    },
    {
      id: 2,
      email: 'budi@example.com',
      username: 'budi',
      password: 'rahasia456',
    },
    {
      id: 3,
      email: 'citra@example.com',
      username: 'citra',
      password: 'rahasia789',
    },
  ];

  private nextId = 4;

  getAllUsers() {
    return this.users;
  }

  getOneUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(dto: CreateUserDto): User {
    const user = { ...dto, id: this.nextId++ };

    this.users.push(user);
    return user;
  }

  updateUser(id: number, dto: UpdateUserDto): User | undefined {
    const user = this.getOneUser(id);

    if (!user) {
      return undefined;
    }

    Object.assign(user, dto);
    return user;
  }

  removeUser(id: number): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);

    if (index === -1) {
      return undefined;
    }

    return this.users.splice(index, 1)[0];
  }
}
