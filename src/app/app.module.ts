import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserService } from './user-service/user.service';
import { RepoService } from './repo-service/repo.service';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepositoriesComponent,
    SearchFormComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
    
  ],
  providers: [
    UserService,
    RepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
