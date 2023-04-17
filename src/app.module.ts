import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [UsersModule, MenuModule, OrdersModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
