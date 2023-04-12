import {
  Controller,
  Get,
  Param,
  Render,
  Headers,
  Response,
  UseInterceptors,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('pages/index')
  root() {
    return {};
  }

  @Get('/index.hbs')
  @Render('pages/index')
  mainPage() {
    return {};
  }

  @Get('/authorized')
  @Render('pages/index')
  authorized(@Response() res) {
    res.render('pages/index.hbs', { login: '1' });
  }

  @Get('/reviews.hbs')
  @Render('pages/reviews')
  news() {
    return {};
  }

  @Get('/news.hbs')
  @Render('pages/news')
  reviews() {
    return {};
  }
}
