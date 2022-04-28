export class CreateChatDto {
	id: number;
	isGroup: boolean;
	name?: string;
	picture?: string;
	userIds: number[];
}
