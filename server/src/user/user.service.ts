import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from 'src/auth/dto';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getAllUsers(userId: number): Promise<User[]> {
		return await this.prisma.user.findMany({
			where: {
				NOT: {
					id: userId,
				},
			},
		});
	}

	async searchUsers(search: string) {
		return await this.prisma.user.findMany({
			where: {
				OR: [
					{
						name: {
							contains: search,
						},
					},
					{
						email: {
							contains: search,
						},
					},
				],
			},
		});
	}

	async deleteUser(userId: number): Promise<User> {
		return await this.prisma.user.delete({
			where: { id: userId },
		});
	}

	async getUserStats(userId: number): Promise<User> {
		const userWithStats = await this.prisma.user.findFirst({
			where: {
				id: userId,
			},
			include: {
				_count: {},
			},
		});
		return userWithStats;
	}

	async getUserById(userId: number): Promise<User> {
		const currentUser = await this.prisma.user.findUnique({
			where: {
				id: userId,
			},
		});

		return currentUser;
	}

	async updateUser(dto: UpdateUserDto, id: number) {
		console.log(dto, id);
		return await this.prisma.user.update({
			where: {
				id: id,
			},
			data: {
				picture: dto.picture,
				name: dto.name,
			},
		});
	}
}
