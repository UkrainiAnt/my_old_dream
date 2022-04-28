import {
	WebSocketGateway,
	SubscribeMessage,
	MessageBody,
} from '@nestjs/websockets';
import { ReactionService } from './reaction.service';
import { CreateReactionDto } from './dto/create-reaction.dto';

@WebSocketGateway()
export class ReactionGateway {
	constructor(private readonly reactionService: ReactionService) {}

	@SubscribeMessage('createReaction')
	create(@MessageBody('data') createReactionDto: CreateReactionDto) {
		return this.reactionService.create(createReactionDto);
	}

	@SubscribeMessage('removeReaction')
	remove(@MessageBody('data') id: number) {
		return this.reactionService.remove(id);
	}
}
