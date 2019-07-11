import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// DEMO PAGES

// Dashboards

import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';

// Pages

import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';
import { RegisterBoxedComponent } from './DemoPages/UserPages/register-boxed/register-boxed.component';

// Elements

import { StandardComponent } from './DemoPages/Elements/Buttons/standard/standard.component';
import { DropdownsComponent } from './DemoPages/Elements/dropdowns/dropdowns.component';
import { CardsComponent } from './DemoPages/Elements/cards/cards.component';
import { ListGroupsComponent } from './DemoPages/Elements/list-groups/list-groups.component';
import { TimelineComponent } from './DemoPages/Elements/timeline/timeline.component';
import { IconsComponent } from './DemoPages/Elements/icons/icons.component';

// Components

import { AccordionsComponent } from './DemoPages/Components/accordions/accordions.component';
import { TabsComponent } from './DemoPages/Components/tabs/tabs.component';
import { CarouselComponent } from './DemoPages/Components/carousel/carousel.component';
import { ModalsComponent } from './DemoPages/Components/modals/modals.component';
import { ProgressBarComponent } from './DemoPages/Components/progress-bar/progress-bar.component';
import { PaginationComponent } from './DemoPages/Components/pagination/pagination.component';
import { TooltipsPopoversComponent } from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Tables

import { TablesMainComponent } from './DemoPages/Tables/tables-main/tables-main.component';

// Widgets

import { ChartBoxes3Component } from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import { ControlsComponent } from './DemoPages/Forms/Elements/controls/controls.component';
import { LayoutComponent } from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import { ChartjsComponent } from './DemoPages/Charts/chartjs/chartjs.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { IngresoComponent } from './paginas/ingreso/ingreso.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { TurnosComponent } from './paginas/turnos/turnos.component';
import { AuthGuard } from './guards/auth.guard';
import { IsClienteGuard } from './guards/is-cliente.guard';
import { IsEspecialistaGuard } from './guards/is-especialista.guard';
import { TurnosEspecialistaComponent } from './paginas/turnos-especialista/turnos-especialista.component';
import { TurnosRecepcionistaComponent } from './paginas/turnos-recepcionista/turnos-recepcionista.component';
import { IsRecepcionistaGuard } from './guards/is-recepcionista.guard';
import { IsAdminGuard } from './guards/is-admin.guard';
import { ProfileComponent } from './paginas/profile/profile.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { EspecialistasComponent } from './paginas/especialistas/especialistas.component';
import { NotfoundComponent } from './paginas/notfound/notfound.component';
import { ErrorComponent } from './paginas/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      { path: '', component: DashboardComponent, canActivate: [AuthGuard], data: { extraParameter: 'dashboardsMenu' } },
      { path: 'turnos', component: TurnosComponent, canActivate: [AuthGuard, IsClienteGuard] },
      { path: 'turnos-especialista', component: TurnosEspecialistaComponent, canActivate: [AuthGuard, IsEspecialistaGuard] },
      { path: 'turnos-recepcionista', component: TurnosRecepcionistaComponent, canActivate: [AuthGuard, IsRecepcionistaGuard] },
      { path: 'mi-cuenta', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard, IsAdminGuard] },
      { path: 'especialistas/:UID', component: EspecialistasComponent, canActivate: [AuthGuard, IsAdminGuard] },
      { path: 'especialistas', component: EspecialistasComponent, canActivate: [AuthGuard, IsAdminGuard] },

      // Dashboads

      { path: 'a', component: AnalyticsComponent, data: { extraParameter: 'dashboardsMenu' } },

      // Elements

      { path: 'elements/buttons-standard', component: StandardComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/dropdowns', component: DropdownsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/icons', component: IconsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/cards', component: CardsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/list-group', component: ListGroupsComponent, data: { extraParameter: 'elementsMenu' } },
      { path: 'elements/timeline', component: TimelineComponent, data: { extraParameter: 'elementsMenu' } },

      // Components

      { path: 'components/tabs', component: TabsComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/accordions', component: AccordionsComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/modals', component: ModalsComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/progress-bar', component: ProgressBarComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/carousel', component: CarouselComponent, data: { extraParameter: 'componentsMenu' } },
      { path: 'components/pagination', component: PaginationComponent, data: { extraParameter: 'componentsMenu' } },

      // Tables

      { path: 'tables/bootstrap', component: TablesMainComponent, data: { extraParameter: 'tablesMenu' } },

      // Widgets

      { path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: { extraParameter: 'pagesMenu3' } },

      // Forms Elements

      { path: 'forms/controls', component: ControlsComponent, data: { extraParameter: 'formElementsMenu' } },
      { path: 'forms/layouts', component: LayoutComponent, data: { extraParameter: 'formElementsMenu' } },

      // Charts

      { path: 'charts/chartjs', component: ChartjsComponent, data: { extraParameter: '' } },

    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      { path: 'registro', component: RegistroComponent },
      { path: 'ingreso', component: IngresoComponent },
      // User Pages

      // {path: 'pages/login-boxed', component: LoginBoxedComponent, data: {extraParameter: ''}},
      // {path: 'pages/register-boxed', component: RegisterBoxedComponent, data: {extraParameter: ''}},
      // {path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''}},
    ]
  },
  //  {path: '**', redirectTo: ''}
  { path: '**', component: NotfoundComponent },
  { path: 'error', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
