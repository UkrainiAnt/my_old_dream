import { IsArray, IsString, IsNumber } from 'class-validator';

export class CreateMessageDto {
	@IsString()
	readonly body: string;

	@IsArray()
	readonly additionData: string[];

	@IsNumber()
	readonly senderId: number;

	@IsNumber()
	readonly chatId: number;

	@IsString()
	readonly type: string;
}
