import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DropdownItem } from 'src/app/core/components/dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCardComponent {
  @Input()
  public title!: string;
  @Input()
  public iconUrl!: string;
  @Input()
  public iconClass!: string;
  @Input()
  public header!: string;
  @Input()
  public subHeader!: {
    percent: number;
    isIncrease: boolean;
  };

  public filter: string = DateFilter.today;
  public filterData: DropdownItem[] = [
    { key: DateFilter.today, value: DateFilter.today },
    { key: DateFilter.month, value: DateFilter.month },
    { key: DateFilter.year, value: DateFilter.year }
  ];

  public onDropdownItemClick(item: DropdownItem) {
    console.log("Selected Filter!!", item);
  }

}

export enum DateFilter {
  today = "Today",
  month = "This Month",
  year =  "This Year"
}
