import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { Meetup } from '../meetup.model';
import { MeetupService} from '../meetup.service';

@Component({
  selector: 'app-upcoming-meetups',
  templateUrl: './upcoming-meetups.component.html',
  styleUrls: ['./upcoming-meetups.component.css'],
  providers: [MeetupService]
})

export class UpcomingMeetupsComponent implements OnInit {

  meetups: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private meetupService: MeetupService) { }

  ngOnInit() {
    this.meetups = this.meetupService.getMeetups();
  }

  goToDetailPage(clickedMeetup) {
    this.router.navigate(['meetups', clickedMeetup.$key]);
  }
}
