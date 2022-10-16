import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us/about-us.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { ResearchComponent } from './research/research.component';
import { PublicationsComponent } from './publications/publications.component';
import { MediaComponent } from './media/media.component';
import { UpdatesComponent } from './updates/updates.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LinksComponent } from './links/links.component';
import { IndexComponent } from './index/index.component';
import {HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrucemccordComponent } from './brucemccord/brucemccord.component';
import { PeopleComponent } from './people/people.component';
import {Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const appRoutes: Routes = [
  { path: 'aboutUs', component: AboutUsComponent },
    { path: 'index', component: IndexComponent},
    { path: 'collaborations', component: CollaborationsComponent },
    {path: 'links', component: LinksComponent},
    {path: 'media', component: MediaComponent},
    {path: 'publications', component: PublicationsComponent},
    {path: 'research', component: ResearchComponent},
    {path: 'updates', component: UpdatesComponent},
    {path: 'brucemccord', component: BrucemccordComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'testimonials', component: TestimonialsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CollaborationsComponent,
    ResearchComponent,
    PublicationsComponent,
    MediaComponent,
    UpdatesComponent,
    TestimonialsComponent,
    LinksComponent,
    IndexComponent,
    SidenavListComponent,
    BrucemccordComponent,
    PeopleComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
