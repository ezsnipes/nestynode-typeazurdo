import { Get, Controller } from '@nestjs/common';

@Controller()
export default class AppController {

  @Get()
  public controll(): string {
    return '<h1>Hello World!</h1>';
  }

}
