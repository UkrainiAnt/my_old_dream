import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Put,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chat')
export class ChatController {
	constructor(private readonly chatService: ChatService) {}

	@Post('create')
	create(
		@Body('data') createChatDto: CreateChatDto,
		@Body('userIds') userIds: number[],
	) {
		return this.chatService.create(createChatDto, userIds);
	}

	@Get(':userId/chats')
	getAllUsersChats(@Param('userId') id: string) {
		return this.chatService.getAllUserChats(+id);
	}

	@Get('all/:userId')
	findAll(@Param('userId') id: string) {
		return this.chatService.findAll(+id);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.chatService.findOne(+id);
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() updateChatDto: UpdateChatDto) {
		return this.chatService.update(+id, updateChatDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.chatService.remove(+id);
	}
}
