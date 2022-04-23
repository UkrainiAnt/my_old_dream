import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfirmationDto } from './dto';

@Injectable()
export class MailService {
	constructor(private readonly mailerService: MailerService) {}

	public sendMail(dto: ConfirmationDto): void {
		console.log('mail sended ' + dto.email, dto.code);
		this.mailerService
			.sendMail({
				to: dto.email, // list of receivers
				from: process.env.USER_EMAIL, // sender address
				subject: 'Verification code ' + dto.code, // Subject line
				text: 'verification code is ' + dto.code, // plaintext body
				html: '<b>welcome</b>', // HTML body content
			})
			.then(() => {
				return 'done';
			})
			.catch(() => {});
	}
}
