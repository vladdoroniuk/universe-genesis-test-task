import { Module } from '@nestjs/common';
import { EmailSubscriptionController } from './email-subscription.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { PrometheusModule } from '@app/prometheus/prometheus.module';
import {
  CreateEmailSubscriptionHandler,
  DeleteEmailSubscriptionHandler,
} from './commands/handlers';

@Module({
  imports: [CqrsModule, PrometheusModule],
  controllers: [EmailSubscriptionController],
  providers: [CreateEmailSubscriptionHandler, DeleteEmailSubscriptionHandler],
})
export class EmailSubscriptionModule {}
