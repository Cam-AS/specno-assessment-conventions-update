import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { Office } from 'src/app/models/office';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { MemberService } from 'src/app/services/member.service';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-office-view',
  templateUrl: './office-view.component.html',
  styleUrls: ['./office-view.component.css'],
})
export class OfficeViewComponent implements OnInit {
  toggle: boolean[] = [false, false, false, false, false, false, false];
  member: Member = new Member();
  members: Member[] = [];
  searchResults: Member[] = [];
  isFormValid: boolean = false;
  noResults: boolean = false;
  office: Office = new Office();
  officeId: string = '';
  search: string = '';
  avatars: string[] = [
    'assets/icons/astronaut1.svg',
    'assets/icons/astronaut2.svg',
    'assets/icons/astronaut3.svg',
    'assets/icons/astronaut4.svg',
    'assets/icons/astronaut5.svg',
    'assets/icons/astronaut6.svg',
    'assets/icons/astronaut7.svg',
  ];

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private router: Router,
    private loadingService: LoadingService,
    private officeService: OfficeService
  ) {}

  async ngOnInit() {
    this.loadingService.show();

    try {
      this.route.params.subscribe((params) => {
        this.officeId = params['officeId'];
      });

      this.office = await this.officeService.findById(this.officeId);
      this.members = await this.memberService.find({ officeId: this.officeId });
    } catch (err) {
      console.log(err);
    }

    this.loadingService.hide();
  }

  async addMember() {
    this.loadingService.show();

    try {
      if (!this.isValid()) {
        this.loadingService.hide();
        this.isFormValid = !this.isFormValid;
        setTimeout(() => {
          this.isFormValid = !this.isFormValid;
        }, 2500);
        return;
      }
      this.member.officeId = this.officeId;
      this.member = await this.memberService.save(this.member);

      this.office.members.push(this.member.id);
      await this.officeService.save(this.office);
      location.reload();
    } catch (err) {
      console.log(err);
    }

    this.loadingService.hide();
  }

  onSearchChange(searchValue: string): void {
    this.searchResults = this.members.filter((x) =>
      x.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (this.searchResults.length == 0) {
      this.noResults = !this.noResults;
    }
  }

  isValid(): boolean {
    return (
      this.member.name != '' &&
      this.member.surname != '' &&
      this.member.avatar != ''
    );
  }

  assignAvatar(i: number) {
    this.toggle = [false, false, false, false, false, false, false];
    this.toggle[i] = !this.toggle[i];
    this.member.avatar = this.avatars[i];
  }

  back() {
    this.router.navigate(['/']);
  }
}
