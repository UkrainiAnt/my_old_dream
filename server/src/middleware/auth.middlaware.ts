import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { NestMiddleware, HttpStatus, Injectable } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { UserService } from '../user/user.service';

@Injectable()
export default class AuthMiddleware implements NestMiddleware {
	constructor(
		private configService: ConfigService,
		private userService: UserService,
	) {}

	async use(req: Request, res: Response, next: NextFunction) {
		const authHeaders = req.headers.authorization;

		if (authHeaders && (authHeaders as string).split(' ')[1]) {
			const token = (authHeaders as string).split(' ')[1];
			const decoded: any = jwt.verify(
				token,
				this.configService.get('JWT_SECRET'),
			);

			req.user = decoded;
			next();
		}
	}
}
