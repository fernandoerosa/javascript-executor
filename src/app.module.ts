import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExecutorModule } from './executor/executor.module';

@Module({
  imports: [ExecutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
