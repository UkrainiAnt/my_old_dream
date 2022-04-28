import { Injectable } from '@nestjs/common';
import { CreateReactionDto } from './dto/create-reaction.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReactionService {
	constructor(private prisma: PrismaService) {}

	async create(createReactionDto: CreateReactionDto) {
		const newReaction = await this.prisma.reaction.create({
			data: createReactionDto,
		});

		return { event: 'createReaction', data: newReaction };
	}

	async remove(id: number) {
		const deletedReaction = await this.prisma.reaction.delete({
			where: {
				id,
			},
		});

		return { event: 'removeReaction', data: deletedReaction };
	}
}
