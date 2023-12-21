import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import {NgOptimizedImage} from "@angular/common";
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PersonalInformationComponent,
    IntroductionComponent,
    SkillsComponent,
    ServiceCardComponent,
    LanguageCardComponent,
    ExperiencePageComponent,
    ListItemComponent,
    PortfolioComponent,
    ProjectSectionComponent,
    CertificationsComponent,
    FooterComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
