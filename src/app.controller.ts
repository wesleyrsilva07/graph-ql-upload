import { Controller, Get, Post, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('email')
  // @Render('form')
  // exibirForm() {
  //   //
  // }

  // @Post('enviar-email')
  // enviarEmail(@Request() req) {
  //   return this.appService.enviarEmail(
  //     req.body.email,
  //     req.body.mensagem,
  //   );
  // }
}
