import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AddOfficeComponent } from './pages/add-office/add-office.component';
import { EditOfficeComponent } from './pages/edit-office/edit-office.component';
import { OfficeViewComponent } from './pages/office-view/office-view.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { MemberService } from './services/member.service';
import { OfficeService } from './services/office.service';
import { LoadingService } from './services/loading/loading.service';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddOfficeComponent,
    EditOfficeComponent,
    OfficeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [MemberService, OfficeService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
