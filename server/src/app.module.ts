import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaController } from './prisma/prisma.controller';
import { PrismaService } from './prisma/prisma.service';
import { FileModule } from './file/file.module';
import { resolve } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FirebaseModule } from './firebase/firebase.module';
import { StripeModule } from 'nestjs-stripe';

import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MailModule } from './mail/mail.module';
import { MessageModule } from './message/message.module';
import { ChatModule } from './chat/chat.module';
import { ReactionModule } from './reaction/reaction.module';

import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from './middleware';
import { UserService } from './user/user.service';

@Module({
	imports: [
		MailerModule.forRoot({
			transport: {
				host: 'smtp.gmail.com',
				port: 1025,
				ignoreTLS: true,
				secure: false,
				auth: {
					user: process.env.USER_EMAIL,
					pass: process.env.USER_PASSWORD,
				},
			},
			defaults: {
				from: '"nest-modules" <modules@nestjs.com>',
			},
			template: {
				dir: __dirname + '/templates',
				adapter: new PugAdapter(),
				options: {
					strict: true,
				},
			},
		}),
		StripeModule.forRoot({
			apiKey: process.env.STRIPE_SECRET_KEY,
			apiVersion: '2020-08-27',
		}),
		ServeStaticModule.forRoot({
			rootPath: resolve(__dirname, 'static'),
		}),
		ConfigModule.forRoot({
			envFilePath: '.env',
		}),
		PrismaModule,
		AuthModule,
		UserModule,
		FileModule,
		FirebaseModule,
		MailerModule,
		MailModule,
		MessageModule,
		ChatModule,
		ReactionModule,
	],
	controllers: [PrismaController],
	providers: [PrismaService, UserService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(AuthMiddleware).forRoutes('(.*)');
	}
}
