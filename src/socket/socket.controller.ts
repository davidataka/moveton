import { Controller, Get, Render } from '@nestjs/common';

@Controller('socket')
export class SocketController {
  @Get('')
  @Render('pages/chat')
  mainPage() {
    return {};
  }
}
