import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessages } from './Control-Messages/control-messages.component';
// import { PhonePipePipe } from './phone-pipe.pipe';
// import { DocumentoPDFPipe } from './documento-pdf.pipe';
// import { NullFieldPipe } from './null-field.pipe';
// import { AngularDraggableModule } from 'angular2-draggable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ValidationService } from './Control-Messages/validation.service';
import { LoadingModule } from './Loading/loading.module';
import { CheckVoidPipe } from './Pipe/ValueVoid.pipe';
import { PhonePipePipe } from './Pipe/phone-pipe.pipe';
import { CedulaPipePipe } from './Pipe/CardDominicanIdentification.pipe';
import { CompleteTracking } from './Pipe/Complete.pipe';
import { GroupByPipe } from './Pipe/groupBy.pipe';
import { DateSpanishFormatPipe } from './Pipe/datetimeSpanish.pipe';
import { HeaderComponent } from './header/header.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
    declarations: [    
      ControlMessages,
      CheckVoidPipe,
      PhonePipePipe,
      CedulaPipePipe,
      CompleteTracking,
      GroupByPipe,
      DateSpanishFormatPipe,
      HeaderComponent
    ],
    imports: [
      LoadingModule,
      CommonModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      RouterModule,
      FormsModule,
      NgSelectModule
  
    ],
    exports: [
      ControlMessages,
      LoadingModule,
      CheckVoidPipe,
      PhonePipePipe,
      CedulaPipePipe,
      CompleteTracking,
      GroupByPipe,
      DateSpanishFormatPipe,
      HeaderComponent,
      NgSelectModule
    ],
    providers: [
      ValidationService
    ]
  })
  export class SharedModule { }
  