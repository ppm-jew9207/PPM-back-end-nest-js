// require('dotenv').config();
// import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// import { AppModule } from './app/app.module';
// import { AllExceptionsFilter } from './app/common/filters/all-exception.filter';
// import * as helmet from 'helmet';
// import * as rateLimit from 'express-rate-limit';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();

//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const bodyParser = require('body-parser');
//   app.use(bodyParser.json({ limit: '5mb' }));
//   app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
//   app.useGlobalFilters(new AllExceptionsFilter());

//   /* SECURITY */
//   app.use(helmet());

//   app.use(
//     rateLimit({
//       windowMs: 15 * 60 * 1000, // 15 minutes
//       max: 100, // limit each IP to 100 requests per windowMs
//       message: 'Too many requests from this IP, please try again later'
//     })
//   );
//   const createAccountLimiter = rateLimit({
//     windowMs: 60 * 60 * 1000, // 1 hour window
//     max: 3, // start blocking after 3 requests
//     message:
//       'Too many accounts created from this IP, please try again after an hour'
//   });
//   app.use('/api/auth/email/register', createAccountLimiter);

//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);

//   const options = new DocumentBuilder()
//     .setTitle('PPR BE')
//     .setDescription('PPR BE')
//     .setVersion('1.0')
//     .addBearerAuth(
//     { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
//     'JWT',
//     )
//     .build();
//   const document = SwaggerModule.createDocument(app, options);
//   SwaggerModule.setup('api', app, document);

//   // const port = process.env.port || process.env.PORT;
//   // const host = process.env.host || process.env.HOST;

//   async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
//     app.enableCors(); // protection
//     await app.listen(process.env.PORT || '80');
//   }
// }
// bootstrap();
// // async function bootstrap() {
// //   const app = await NestFactory.create(AppModule);
// //   await app.listen(process.env.PORT || 3000);
// // }
// // bootstrap();
// //   await app.listen(process.env.PORT, () => {
// //     console.log(
// //       'Listening at http://' + process.env.HOST + ':' + process.env.PORT + '/' + globalPrefix
// //     );
// //   });
// // }

// // bootstrap();

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AllExceptionsFilter } from './app/common/filters/all-exception.filter';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new AllExceptionsFilter());

  /* SECURITY */
  app.use(helmet());

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      message: 'Too many requests from this IP, please try again later'
    })
  );
  const createAccountLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 3, // start blocking after 3 requests
    message:
      'Too many accounts created from this IP, please try again after an hour'
  });
  app.use('/api/auth/register', createAccountLimiter);

  const options = new DocumentBuilder()
  .setTitle('PPR BE')
  .setDescription('PPR BE')
  .setVersion('1.0')
  .addBearerAuth(
  { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
  'JWT',
  )
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
