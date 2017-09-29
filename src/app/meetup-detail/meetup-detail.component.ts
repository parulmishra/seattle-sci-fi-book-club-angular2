import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Meetup } from '../meetup.model';
import { MeetupService } from '../meetup.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-meetup-detail',
  templateUrl: './meetup-detail.component.html',
  styleUrls: ['./meetup-detail.component.css'],
  providers: [MeetupService]
})
export class MeetupDetailComponent implements OnInit {
  meetupId: string;
  meetupToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private meetupService: MeetupService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.meetupId = urlParameters['id'];
    });

    this.meetupToDisplay = this.meetupService.getMeetupById(this.meetupId);
  }
}
