import { Directive, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Directive({
    selector: '.nav-link.dropdown-toggle'
})
export class DropdownToggleDirective {
    constructor(private navbar: NavbarComponent) { }

    @HostListener('click', ['$event']) onClick($event: any) {
        $event.preventDefault();
    }
}
