import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ExperiencePageComponent} from "./pages/experience-page/experience-page.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {CertificationsComponent} from "./pages/certifications/certifications.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'experience', component: ExperiencePageComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'certifications', component: CertificationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
