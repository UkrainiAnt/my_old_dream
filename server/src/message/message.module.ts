import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageGateway } from './message.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	providers: [MessageGateway, MessageService],
	imports: [PrismaModule],
})
export class MessageModule {}
