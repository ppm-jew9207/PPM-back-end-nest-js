import {
  Module,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthController } from './auth.controller';
import { UserSchema } from '../models/users/user.schema';
import { EmailVerificationSchema } from '../auth/schemas/emailverification.schema';
import { ForgottenPasswordSchema } from './schemas/forgottenpassword.schema';
import { ConsentRegistrySchema } from './schemas/consentregistry.schema';
import { UsersService } from '../models/users/users.service';
import { JWTService } from './jwt.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { LoggerMiddleware } from '../common/middlewares/logger.middleware';
import { ViewModels } from '../helpers/constants';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    MongooseModule.forFeature([
    { name: 'User', schema: UserSchema },
    { name: ViewModels.EMAIL_VERIFICATION, schema: EmailVerificationSchema },
    { name: ViewModels.FORGOTTEN_PASSWORD, schema: ForgottenPasswordSchema },
    { name: ViewModels.CONSENT_REGISTRY, schema: ConsentRegistrySchema },
  ])],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JWTService, JwtStrategy],
})
export class AuthModule {}
