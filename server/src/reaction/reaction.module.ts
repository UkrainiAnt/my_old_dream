import { Module } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { ReactionGateway } from './reaction.gateway';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	providers: [ReactionGateway, ReactionService],
	imports: [PrismaModule],
})
export class ReactionModule {}
