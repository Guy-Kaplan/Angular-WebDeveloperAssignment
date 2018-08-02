import { Component, OnInit } from '@angular/core';
import { Pic } from '../../models/pic';
import { PicsService } from '../../services/pics.service';
// import { Observable } from 'rxjs';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

    public pics: Pic[];
    public top: number = 5;

    constructor(private picsService: PicsService) { }

    ngOnInit() {
        this.picsService.getAllPics().subscribe((pics) => {
            this.pics = pics;
            //console.log(this.pics);
            // for (let i = 0; i < 5; i++) {
            //     this.temp[i] = this.pics[i];
            // }
        });

    }

    public loadMore(): void {
        if (this.top!==5000) {
            this.top += 5;
        }
    }

    public loadLess(): void {
        if (this.top!==0) {
            this.top -= 5;
        }
    }

}

