import {
  Controller,
  Get,
  Param,
  Render,
  Headers,
  Response,
  UseInterceptors,
  Post,
  UseGuards,
  Res,
  Req
} from "@nestjs/common";
import { AppService } from "./app.service";
import { LoggingInterceptor } from "./interceptors/logging.interceptor";

import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "./auth/auth.guard";

import Session from "supertokens-node/recipe/session";

//import { SessionContainer } from 'supertokens-node/recipe/session';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  @Render("pages/index")
  root() {
    return {};
  }

  @Get("/index.hbs")
  @Render("pages/index")
  mainPage() {
    return {};
  }

  @Get("/authorized")
  @Render("pages/index")
  authorized(@Response() res) {
    res.render("pages/index.hbs", { login: "1" });
  }

  @Get('/reviews.hbs')
  @ApiBearerAuth()
  async new(@Req() req, @Res() res): Promise<any> {
    try {
      const session = await Session.getSession(req, res);

      if (session === undefined) {
        throw Error("Should never come here");
      }
      return res.render("pages/reviews");
    } catch (err) {
      return res.redirect("/");
    }
  }

  @Get("/news.hbs")
  @Render("pages/news")
  reviews() {
    return {};
  }
}
