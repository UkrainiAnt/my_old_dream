import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatModule } from 'src/chat/chat.module';

@Module({
	providers: [UserService, PrismaService],
	controllers: [UserController],
	imports: [AuthModule, PrismaModule, ChatModule],
})
export class UserModule {}
