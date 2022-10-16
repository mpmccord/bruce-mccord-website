import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CollaborationsComponent } from './collaborations/collaborations.component';
import { LinksComponent } from './links/links.component';
import { MediaComponent } from './media/media.component';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchComponent } from './research/research.component';
import { UpdatesComponent } from './updates/updates.component';
import { IndexComponent } from './index/index.component';
import { BrucemccordComponent } from './brucemccord/brucemccord.component';
import { PeopleComponent } from './people/people.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
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
    {path: 'testimonials', component: TestimonialsComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
