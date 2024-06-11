import { Injectable } from '@nestjs/common';

@Injectable()
export class ExecutorService {
  executeCode(code: string): any {
    try {
      return eval(code);
    } catch (err) {
      return { error: err.message };
    }
  }
}
