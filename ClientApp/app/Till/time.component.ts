import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
    selector: "current-time",
    template: "{{ now |date: 'dd. MMMM yyyy hh:mm:ss' }}"
})
export class TimeComponent {
    public now: Date = new Date();
    constructor() {
        setInterval(() => {
            this.now = new Date();
        }, 1000);
    }
}