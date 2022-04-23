import { Controller } from '@nestjs/common';
import { MailService } from './mail.service';
import { Post, Body } from '@nestjs/common';
import { ConfirmationDto } from './dto';

@Controller('mail')
export class MailController {
	constructor(private mailService: MailService) {}

	@Post('code')
	sendMail(@Body() data: ConfirmationDto) {
		return this.mailService.sendMail(data);
	}
}
