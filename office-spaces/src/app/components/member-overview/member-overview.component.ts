import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Member } from 'src/app/models/member';
import { Office } from 'src/app/models/office';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { MemberService } from 'src/app/services/member.service';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-member-overview',
  templateUrl: './member-overview.component.html',
  styleUrls: ['./member-overview.component.css'],
})
export class MemberOverviewComponent implements OnInit {
  toggle: boolean[] = [];
  office: Office;
  show: boolean = false;
  @Input() member: Member;

  modalRef?: BsModalRef | null;
  modalRef2?: BsModalRef;
  modalRef3?: BsModalRef;
  modalRef4?: BsModalRef;

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
    private modalService: BsModalService,
    private memberService: MemberService,
    private loadingService: LoadingService,
    private officeService: OfficeService
  ) {}

  ngOnInit(): void {
    for (let i = 0; i < this.avatars.length; i++) {
      this.toggle.push(false);
    }

    for (let i = 0; i < this.avatars.length; i++) {
      if (this.member.avatar == this.avatars[i]) {
        this.toggle[i] = !this.toggle[i];
      }
    }
  }

  assignAvatar(i: number) {
    this.toggle = [];
    for (let i = 0; i < this.avatars.length; i++) {
      this.toggle.push(false);
    }
    this.toggle[i] = !this.toggle[i];
    this.member.avatar = this.avatars[i];
  }

  openModal1(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      id: 1,
      class: 'modal-lg modal-dialog-centered',
    });
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, {
      id: 2,
      class: 'modal-lg modal-dialog-centered',
    });
  }

  openModal3(template: TemplateRef<any>) {
    this.modalRef3 = this.modalService.show(template, {
      id: 3,
      class: 'modal-lg modal-dialog-centered',
    });
  }

  openModal4(template: TemplateRef<any>) {
    this.modalRef4 = this.modalService.show(template, {
      id: 4,
      class: 'modal-lg modal-dialog-centered',
    });
  }

  closeModal(modalId?: number) {
    this.modalService.hide(modalId);
  }

  async updateMember() {
    this.loadingService.show();
    try {
      await this.memberService.save(this.member);
      location.reload();
    } catch (err) {
      console.log(err);
    }
    this.loadingService.hide();
  }

  async deleteMember() {
    this.loadingService.show();
    try {
      await this.memberService.delete(this.member.id);
      this.office = await this.officeService.findById(this.member.officeId);
      this.office.members = this.office.members.filter(
        (x) => x != this.member.id
      );
      await this.officeService.save(this.office);
      location.reload();
    } catch (err) {
      console.log(err);
    }
    this.loadingService.hide();
  }
}
