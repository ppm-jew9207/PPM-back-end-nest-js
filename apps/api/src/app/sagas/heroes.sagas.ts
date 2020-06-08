import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { ProjectCreated } from '../domains/projects/events/project-created.event';

const itemId = '0';

@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(ProjectCreated),
        delay(1000),
        map(event => {
          console.log(clc.redBright('Inside [HeroesGameSagas] Saga'));
          return null;
        }),
      );
  }
}
