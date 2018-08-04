import { Component, OnInit } from '@angular/core';
import { Pic } from '../../models/pic';
import { PicsService } from '../../services/pics.service';

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
        });

    }

    public loadMore(): void {
        if (this.top !== 500) {
            this.top += 5;
        }
    }

    public loadLess(): void {
        if (this.top !== 5) {
            this.top -= 5;
        }
    }

    public toMin(): void {
        this.top = 5;
    }

    public toMax(): void {
        this.top = 500;
    }

    public toMid(): void {
        this.top = 250;
    }

}

