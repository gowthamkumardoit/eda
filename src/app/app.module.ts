import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { EdaStepsComponent } from './eda-steps/eda-steps.component';
import { ResultComponent } from './result/result.component';
import { ResultDashboardComponent } from './result-dashboard/result-dashboard.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    UploadComponent,
    EdaStepsComponent,
    ResultComponent,
    ResultDashboardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
