## Tasks

- [x] Analyze business requirements and technical details
- [x] Clarify questions with the customer
- [x] Create system design diagram
- [x] Create entity relationship diagram
- [x] Setup NestJS monorepo
- [x] Create Prisma schema file based on ERD
- [x] Create Dockerfile for service and worker
- [x] Create docker-compose.yml file
- [x] Find external BTC-to-UAH API
- [x] Setup Prometheus, Pushgateway, Redis, PostgreSQL
- [ ] Create endpoints
  - [x] GET /rate
  - [ ] POST /rate
  - [ ] GET /emails
  - [ ] POST /emails
  - [ ] DELETE /emails
  - [ ] GET /metrics
- [ ] Create metrics
  - [x] subscribe email count
  - [ ] unsubscribe email count
  - [ ] send email count
  - [ ] send email error count
  - [ ] exchange rate gauge
- [ ] Use CQRS + event sourcing patterns
- [ ] Use Nodemailer for mailing
- [ ] Use Bull for task queuing
- [ ] Use Cron for task scheduling
- [ ] Use Pino for logging
- [ ] Add unit tests

## System Design Diagram

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: light)">
    <img src="./images/system_design.svg">
  </picture>
</p>

## Entity Relationship Diagram

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: light)">
    <img src="./images/erd.svg">
  </picture>
</p>

## Useful Articles

- https://www.bemyaficionado.com/design-a-notification-system
- https://blog.risingstack.com/node-js-performance-monitoring-with-prometheus/
