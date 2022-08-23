import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('firstController')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ShowHelloWorld')
  getHello(): string {
    return this.appService.getHello();
  }
}
