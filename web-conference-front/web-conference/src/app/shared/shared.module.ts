import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IconsModule } from '@progress/kendo-angular-icons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import 'hammerjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputsModule,
    ButtonsModule,
    LabelModule,
    DateInputsModule,
    LayoutModule,
    IconsModule,
    PopupModule,
    GridModule,
    ChartsModule,
    TooltipModule,
    NotificationModule,
    DropDownsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    InputsModule,
    ButtonsModule,
    LabelModule,
    DateInputsModule,
    LayoutModule,
    IconsModule,
    PopupModule,
    GridModule,
    ChartsModule,
    TooltipModule,
    NotificationModule,
    DropDownsModule
  ],
})
export class SharedModule { }