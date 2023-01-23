import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownMenuComponent {
  @Input()
  public title!: string;

  @Input()
  public dropdownItems: DropdownItem[] = [];

  @Output()
  public dropdownItemClick = new EventEmitter<DropdownItem>();

  public onDropdownItemClick(dropdownItem: DropdownItem) {
    this.dropdownItemClick.emit(dropdownItem);
  }
}

export interface DropdownItem {
  key: string;
  value: string;
}