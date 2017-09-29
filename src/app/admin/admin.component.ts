import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';
import { EditMemberComponent } from '../edit-member/edit-member.component';
import { MeetupService } from '../meetup.service';
import { Meetup } from '../meetup.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
   providers: [MemberService,MeetupService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService, private meetupService: MeetupService) { }

  ngOnInit() {
  }
  submitForm(firstName: string, lastName: string, email: string, address: string, description: string) {
    var newMember: Member = new Member(firstName,lastName,email,address,description);
    this.memberService.addMembers(newMember);
  }
  submitMeetup(title: string, author: string, description: string, location: string, date: string) {
      var newMeetup: Meetup = new Meetup(title,author,description,location,date);
      this.meetupService.addMeetups(newMeetup);
  }

}
