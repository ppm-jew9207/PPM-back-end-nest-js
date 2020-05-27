import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWTService } from '../jwt.service';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly jwtService: JWTService) {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true,
        secretOrKey: process.env.JWT_SECRET,
        ignoreExpiration: false
      }
      // async (req, payload, next) => await this.verify(req, payload, next),
    );
    // passport.use(this);
  }

  public async validate(payload: any, req: any, next: Function) {
    const user = await this.jwtService.validateUser(req);

    if (!user) {
      return next(new UnauthorizedException(), false);
    }
    next(null, user);
  }
}
