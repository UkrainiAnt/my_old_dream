import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatService {
	constructor(private prisma: PrismaService) {}

	async create(createChatDto: CreateChatDto, userIds: number[]) {
		const newChat = await this.prisma.chat.create({
			data: {
				...createChatDto,
				users: {
					connect: userIds.map((id) => ({ id })),
				},
			},
		});

		return newChat;
	}

	async findAll(userId: number) {
		const allChats = await this.prisma.chat.findMany({
			where: {
				users: {
					some: {
						id: userId,
					},
				},
			},

			include: {
				users: true,
				messages: {
					take: 1,
					orderBy: {
						id: 'desc',
					},
				},
			},
		});

		return allChats;
	}

	async getAllUserChats(userId: number) {
		console.log('started');
		const userChats = await this.prisma.chat.findMany({
			where: {
				users: {
					some: {
						id: userId,
					},
				},
			},

			include: {
				users: true,
			},
		});

		console.log('userChats');

		return userChats;
	}

	async findOne(id: number) {
		const currentChat = await this.prisma.chat.findFirst({
			where: {
				id,
			},
			include: {
				messages: true,
				users: true,
			},
		});

		return currentChat;
	}

	async update(id: number, updateChatDto: UpdateChatDto) {
		const updatedChat = await this.prisma.chat.update({
			data: updateChatDto,
			where: {
				id,
			},
		});

		return updatedChat;
	}

	async remove(id: number) {
		const deletedChat = await this.prisma.chat.delete({
			where: {
				id,
			},
		});
		return deletedChat;
	}
}
