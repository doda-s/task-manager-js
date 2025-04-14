import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserAuthDto } from 'src/users/dto/UserAuth.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async signIn(userDto: UserAuthDto) { // Promise<{ access_token: string }>
        // Verifica se o username informado é válido e se a senha
        // é compatível. Caso não seja, lança uma UnauthorizedException().
        // Se for, retorna um access token JWT.
        const user = await this.usersService.getUserByUsername(userDto.username)

        if (user?.password !== userDto.password) {
          throw new UnauthorizedException("Senha inválida!");
        }
        const payload = { sub: user?._id, username: user.username };
        return { access_token: await this.jwtService.signAsync(payload) }
    }

    async signUp(createUserDto: UserAuthDto) {
      this.usersService.createUser(createUserDto);
      return this.signIn(createUserDto);
    }

    getJwtSecret(): string | undefined {
        return this.configService.get<string>('JWT_SECRET');
    }
}
