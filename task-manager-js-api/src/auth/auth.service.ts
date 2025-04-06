import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async signIn(username: string, pass: string): Promise<{ access_token: string }> {
        // Verifica se o username informado é válido e se a senha
        // é compatível. Caso não seja, lança uma UnauthorizedException().
        // Se for, retorna um access token JWT.
        const user = await this.usersService.getUser(username);

        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.userId, username: user.username };
        return { access_token: await this.jwtService.signAsync(payload) }
    }

    async signUp(username: string, pass: string) {
        if (await this.usersService.getUser(username)) {
            throw new ConflictException("Username is already in use.");
        }
        await this.usersService.addUser(username, pass);
        return {
            message: "User created successfully!"
        }
    }

    getJwtSecret(): string | undefined {
        return this.configService.get<string>('JWT_SECRET');
    }
}
