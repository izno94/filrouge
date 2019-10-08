import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioOneComponent } from './portfolio-one/portfolio-one.component';
import { PortfolioUpdateComponent } from './portfolio-update/portfolio-update.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { LocalService } from './service/local.service';
import { NewPortFolioComponent } from './new-port-folio/new-port-folio.component';
import { MorePipe } from './more.pipe';
import { ArticlesOnlineService } from './service/articlesonline.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    PortfolioOneComponent,
    PortfolioUpdateComponent,
    NotfoundComponent,
    ContactComponent,
    HomepageComponent,
    ArticleComponent,
    NewPortFolioComponent,
    MorePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component : HomepageComponent},
      {path: 'article/:id', component : ArticleComponent},
      {path: 'portfolio/update/:id', component: PortfolioUpdateComponent},
      {path: 'portfolio/new', component:  NewPortFolioComponent},
      {path: 'portfolio/:id', component : PortfolioOneComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'contact', component: ContactComponent},
      {path: '**', component : NotfoundComponent}

  ]),
  HttpClientModule,
  FormsModule

  ],
  providers: [LocalService,
    ArticlesOnlineService

],
  bootstrap: [AppComponent]
})
export class AppModule { }
