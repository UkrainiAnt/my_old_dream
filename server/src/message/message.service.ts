import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

import { Server } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessageService {
	@WebSocketServer() server: Server;

	constructor(private prisma: PrismaService) {}

	async create(createMessageDto: CreateMessageDto) {
		const newMessage = await this.prisma.message.create({
			data: createMessageDto,
			include: {
				sender: true,
			},
		});

		return { event: 'createMessage', data: newMessage };
	}

	async findAll(chatId: number) {
		const allMessages = await this.prisma.message.findMany({
			where: {
				chatId,
			},
			include: {
				sender: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
		});

		return { event: 'findAllMessages', data: allMessages };
	}

	async findOne(id: number) {
		const message = await this.prisma.message.findFirst({
			where: {
				id,
			},
			include: {
				sender: true,
			},
		});
		return { event: 'findOneMessage', data: message };
	}

	async update(id: number, updateMessageDto: UpdateMessageDto) {
		try {
			const newMessage = await this.prisma.message.update({
				where: { id },
				data: updateMessageDto,
				include: {
					sender: true,
				},
			});
			return { event: 'updateMessage', data: newMessage };
		} catch (error) {
			console.log(error);
		}

		return { data: 'object not found', event: 'removeMessage' };
	}

	async remove(id: number) {
		try {
			const deletedMessage = await this.prisma.message.delete({
				where: { id },
			});

			return { data: deletedMessage, event: 'removeMessage' };
		} catch (error) {
			console.log(error);
		}

		return { data: 'object not found', event: 'removeMessage' };
	}
}
