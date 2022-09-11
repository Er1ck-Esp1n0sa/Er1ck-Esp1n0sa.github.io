import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillAndCompetencesComponent } from './skill-and-competences/skill-and-competences.component';
import { CertificadesComponent } from './certificades/certificades.component';
import { IdiomaComponent } from './idioma/idioma.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkExperienceComponent,
    SkillAndCompetencesComponent,
    CertificadesComponent,
    IdiomaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
