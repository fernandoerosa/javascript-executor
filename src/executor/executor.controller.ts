import { Controller, Post, Body } from '@nestjs/common';
import { ExecutorService } from './executor.service';

@Controller('execute')
export class ExecutorController {
  constructor(private readonly executorService: ExecutorService) {}

  @Post()
  async executeCode(@Body('code') code: string): Promise<any> {
    return this.executorService.executeCode(code);
  }
}
