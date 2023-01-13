import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftSideNavComponent {
  public isNestedMenuActive = false;

  constructor(private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {

  }

  public onMenuLinkClick(event: MouseEvent) {
    this.isNestedMenuActive = !this.isNestedMenuActive;
  }

}
