import { Body, Controller, Post } from '@nestjs/common';
import { ExecutorService } from './executor.service';

@Controller('execute')
export class ExecutorController {
  constructor(private readonly executorService: ExecutorService) {}

  @Post()
  async executeCode(@Body('code') code: string, @Body('variables') variables: any): Promise<any> {
    let result = this.executorService.executeCode(code, variables);
    console.log(result);

    return result;
  }
}
