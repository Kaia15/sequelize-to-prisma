# PSQL & Mailhog core api endpoints

## Overview
- This repository provides me a chance to learn about Prisma ORM and Mailhog services integrated into basic server in Node.

### How do I set up: 
- `git clone https://github.com/Kaia15/sequelize-to-prisma.git`
- `npm install`
- Refer to Docker documentation https://docs.docker.com/get-started/overview/, install Docker.

## Database
###  Set up database
1. Refer to Postgresql documentation https://www.postgresql.org/, set up Postgresql and local database at your local.
2. To connect your local database,
   Step 1: add (modify) .env file:
  ```
  DATABASE_URL="postgresql://your-user:your-password@localhost:5432/your-database?schema=public"
  MAILHOG_HOST = 'localhost'
  MAILHOG_PORT = 1025
  ```
  Step 2: modify your schema.prisma
  - Modify your User model (or any other model) (if you want).
3. Refer to Prisma documentation https://www.prisma.io/docs/getting-started, install prisma-client, and prisma-cli for later use.
4. Run and seed some samples (with existing database you created with your terminal or SQL command prompt).
- Some useful commands:
  ```
  npx prisma migrate reset
  npx prisma migrate dev
  ```
5. Use some psql commands to check whether database exists (or new records were added from previous step).
   ```
   psql -U {your-user} {your-database}
   Enter password for user {your-user}: {your password}

   SELECT * FROM {table1};
   ...
   ```

### Migrations 
- This is used for the case that you already had your server with different ORMs (Sequelize, TypeORM, etc) => change to Prisma.
- Refer to this link: https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgresql, follow step by step to add prisma to your exisiting project (for relational db).
- At this step, there could be some errors since migration file does not work as expected. (migration exists in your directory but still not found). Some bugs from this problem can be found and solved here: https://github.com/prisma/prisma/issues/14762. 

## Mailhog
### Intro: 
- Mailhog is a dummy SMTP server which provides users email testing service with PORT=1025.
- To use mailhog service, we also need NodeMailer, a node package connecting our node server and smtp server under the hood of transporter to send emails.
### Set up mailhog:
- Create a mailhog image in Docker:
  Step 1: Pull mailhog
  ```
  docker pull mailhog/mailhog
  ```
  Step 2: Run mailhog with ports
  ```
  docker run -d -p 127.0.0.1:8025:8025 -p 1025:1025 --name=mailhog mailhog/mailhog
  ```
  At this step, there could be some errors. To avoid those, we can try
  ```
  docker stop mailhog
  docker rm mailhog
  ```
  and re-run from first step.
  Step 3: Check whether mailhog image exists in docker:
  ```
  docker ps
  ```
- Open url http://127.0.0.1:8025 to see there exists any emails sent at your local Mailhog UI.

## Run 
- To run our api(s), enter:
  ```
  npm run start
  ```
- Send some api requests in Postman (now, only POST method uses email sending service, you can modify other methods [GET, DELETE, PUT] and add too).

