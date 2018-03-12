import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { ImageUploadFormComponent } from './image-upload-form/image-upload-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageUploadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
