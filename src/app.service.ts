import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly apiKey: string = process.env.API_KEY ?? '';

  getHello(): string {
    return `Hello ${this.apiKey}!`;
  }
}
