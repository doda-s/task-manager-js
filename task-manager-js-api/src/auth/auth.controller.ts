import { 
    Body, 
    Controller, 
    Get, 
    HttpCode, 
    HttpStatus, 
    Post, 
    Request, 
    UseGuards, 
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserAuthDto } from 'src/users/dto/UserAuth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: UserAuthDto) {
        // Retorna o usuário autenticado
        return this.authService.signIn(signInDto)
    }

    @Post('register')
    @UsePipes(new ValidationPipe()) // Ativa a validação do CreateUserDto
    signUp(@Body() signUpDto: UserAuthDto) {
        return this.authService.signUp(signUpDto)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
