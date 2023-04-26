import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { UsersModule } from './users/users.module';
import { MenuModule } from './menu/menu.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    UsersModule,
    MenuModule,
    OrdersModule,
    AuthModule,
    AuthModule.forRoot({
      connectionURI: process.env.CONNECTION_URL,
      apiKey: process.env.API_KEY,
      appInfo: {
        appName: 'moveton',
        apiDomain: process.env.DOMAIN,
        websiteDomain: process.env.DOMAIN,
        apiBasePath: '/auth',
        websiteBasePath: '/auth',
      },
    }),
    SocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
