import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
// import { Ng4FilesModule } from './ng4-files';



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
    // Ng4FilesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
