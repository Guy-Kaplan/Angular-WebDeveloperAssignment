import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContainerComponent } from '../components/container/container.component';
import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { FilterPipe } from '../pipes/filter.pipe';
import { ThumbnailComponent } from '../components/thumbnail/thumbnail.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        ContainerComponent,
        FilterPipe,
        ThumbnailComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
