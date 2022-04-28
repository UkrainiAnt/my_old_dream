import { IsString } from 'class-validator';

export class CreateReactionDto {
	@IsString()
	readonly body: string;
}
