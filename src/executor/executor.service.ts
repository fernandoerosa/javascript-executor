import { Injectable } from '@nestjs/common';

@Injectable()
export class ExecutorService {
  executeCode(code: string): any {
    try {
      const response = eval(code);
      return response;
    } catch (err) {
      return { error: `API Regra de Negócio Dinamica: ${err.message}`, status: 1001 };
    }
  }
}
