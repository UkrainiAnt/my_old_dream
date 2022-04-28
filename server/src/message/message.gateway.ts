import {
	WebSocketGateway,
	SubscribeMessage,
	MessageBody,
} from '@nestjs/websockets';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

import {
	WebSocketServer,
	OnGatewayConnection,
	OnGatewayDisconnect,
	OnGatewayInit,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
	cors: {
		origin: '*',
	},
})
export class MessageGateway
	implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
	constructor(private readonly messageService: MessageService) {}

	@WebSocketServer() server: Server;

	afterInit(server: any) {
		console.log('init gateway');
	}
	handleDisconnect(client: any) {
		console.log('server disconnected');
	}
	handleConnection(client: any, ...args: any[]) {
		console.log('handle connects');
	}

	@SubscribeMessage('createMessage')
	create(@MessageBody('data') createMessageDto: CreateMessageDto) {
		console.log('data');
		return this.messageService.create(createMessageDto);
	}

	@SubscribeMessage('findAllMessages')
	findAll(@MessageBody('data') chatId: number) {
		return this.messageService.findAll(chatId);
	}

	@SubscribeMessage('findOneMessage')
	findOne(@MessageBody('data') id: number) {
		return this.messageService.findOne(id);
	}

	@SubscribeMessage('updateMessage')
	update(@MessageBody('data') updateMessageDto: UpdateMessageDto) {
		return this.messageService.update(updateMessageDto.id, updateMessageDto);
	}

	@SubscribeMessage('removeMessage')
	remove(@MessageBody('data') id: number) {
		return this.messageService.remove(id);
	}
}
