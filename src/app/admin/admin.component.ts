import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';
import { EditMemberComponent } from '../edit-member/edit-member.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
   providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  submitForm(firstName: string, lastName: string, email: string, address: string, description: string) {
    var newMember: Member = new Member(firstName,lastName,email,address,description);
    this.memberService.addMembers(newMember);
  }

}
