import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiModule } from '../../modules/ui/ui.module';
import { ZTableComponent } from '../z-table/z-table.component';
import { SearchPipe } from '../../pipes/search-pipe/search.pipe';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [UiModule, ZTableComponent, SearchPipe],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Output() emitIndexName = new EventEmitter;
  @Input() config: any;
  @Input() searchData!: string;
  selectedTab: number = 0;


  tableConfig: any;
  receivedTableData: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.receiveTableData(event);
  }
  
  receiveTableData(data: any) {
    this.receivedTableData = data;
  } 

  ngAfterViewInit() {
    // this.tableConfig = this.config;
  }

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedTab = tabChangeEvent.index;
    this.tableConfig = this.config;
    let data = {
      textLabel: tabChangeEvent.tab.textLabel,
      tabIndex: this.selectedTab
    }
    this.emitIndexName.emit(data);
  }
  
}



