import { Injectable } from '@nestjs/common';

@Injectable()
export class ExecutorService {
  executeCode(code: string, variables: Record<string, any>): any {
    try {
      const keys = Object.keys(variables);
      const values = Object.values(variables);
  
      const fn = new Function(...keys, `"use strict"; return eval(\`${code}\`);`);
  
      return fn(...values);
    } catch (err) {
      return { error: `API Regra de Negócio Dinamica: ${err.message}`, status: 1001 };
    }
  }
}
