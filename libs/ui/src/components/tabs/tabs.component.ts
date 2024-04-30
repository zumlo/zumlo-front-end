import { Component, Input } from '@angular/core';
import { UiModule } from '../../modules/ui/ui.module';
import { tabGroup } from '../../utils/tabs';
import { ZTableComponent } from '../z-table/z-table.component';

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [UiModule, ZTableComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input() config: any;
  configs: any =  tabGroup
  tableConfig: any;
  receivedTableData: any[]=[];
  constructor(){}

  ngOnInit(): void {
    this.receiveTableData(event);
  }
  receiveTableData(data: any) {
    this.receivedTableData = data;
  }
}
