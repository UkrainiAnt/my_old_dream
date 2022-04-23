import { IsEmail, IsString } from 'class-validator';

export default class ConfirmationDto {
	@IsEmail()
	readonly email: string;

	@IsString()
	readonly code: string;
}
