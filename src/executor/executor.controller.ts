import { Controller, Post, Body } from '@nestjs/common';
import { ExecutorService } from './executor.service';

@Controller('execute')
export class ExecutorController {
  constructor(private readonly executorService: ExecutorService) {}

  @Post()
  async executeCode(@Body('code') code: string, @Body('variables') variables: any): Promise<any> {

    for (const [key, value] of Object.entries(variables)) {
      console.log(key);
    }

    return this.executorService.executeCode(code);
  }
}
