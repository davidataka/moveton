import { Module } from '@nestjs/common';
import { AppGateway } from './socket.gateway';
import { SocketController } from './socket.controller';

@Module({
  imports: [],
  controllers: [SocketController],
  providers: [AppGateway],
})
export class SocketModule {}
