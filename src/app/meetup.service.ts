import { Injectable } from '@angular/core';
import { Meetup } from './meetup.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MeetupService {

  meetups: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase)
  {
    this.meetups = database.list('meetups');
  }
  getMeetups()
  {
    return this.meetups;
  }
  addMeetup(newMeetup: Meetup)
  {
    this.meetups.push(newMeetup);
  }
  getMeetupById(meetupId: string)
  {
    return this.database.object('/meetups/'+ meetupId);
  }
}
