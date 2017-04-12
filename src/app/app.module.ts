import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './template/page-not-found/page-not-found.component';

// Módulos de la aplicación
import { LoginModule } from './modules/login/login.module';
import { SignupModule } from './modules/signup/signup.module';
import { ForgotPasswordModule } from './modules/forgot-password/forgot-password.module';
import { RestorePasswordModule } from './modules/restore-password/restore-password.module';
import { SmartCitiesModule } from './modules/smart-cities/smart-cities.module';

// Servicios de la aplicación
import { RemoteConnectionService } from './core/services/remote-connection/remote-connection.service';
import { LoginService } from './core/services/login/login.service';
import { RecoveryPasswordService } from './core/services/recovery-password/recovery-password.service';
import { UserProfileService } from './core/services/user-profile/user-profile.service';
import { VehicleService } from './core/services/vehicle/vehicle.service';
import { GroupService } from './core/services/group/group.service';
import { NotificationTypeService } from './core/services/notification-type/notification-type.service';
import { UserService } from './core/services/user-service/user-service.service';
import { CountryService } from './core/services/country/country.service';
import { RegionService } from './core/services/region/region.service';
import { LocalityService } from './core/services/locality/locality.service';
import { SignupService } from './core/services/signup/signup.service';
// Guards para los routes
import { LoggedInGuard } from './core/services/login/logged-in.guard';
import { LoggedInAdmin } from './core/services/login/logged-in-admin.guard';
import { LoggedInSA} from './core/services/login/logged-in-sa.guard';
import { LoggedInTransportAdmin} from './core/services/login/logged-in-transport-admin.guard';


// Rutas
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    LoginModule,
    SignupModule,
    ForgotPasswordModule,
    RestorePasswordModule,
    SmartCitiesModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    RemoteConnectionService,
    LoginService,
    RecoveryPasswordService,
    UserProfileService,
    LoggedInGuard,
    LoggedInAdmin,
    LoggedInSA,
    LoggedInTransportAdmin,
    VehicleService,
    GroupService,
    NotificationTypeService,
    CountryService,
    RegionService,
    LocalityService,
    SignupService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
