import { AuthDto } from './dto/auth.dto';
import { Controller } from '@nestjs/common';
import { Body, HttpCode, Post } from '@nestjs/common/decorators';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
