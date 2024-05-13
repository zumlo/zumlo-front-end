import { Component } from '@angular/core';
import {
  TabsComponent,
  tabGroup,
  TableDataService,
  dropdown,
  DynamicFieldDirective,
  ZFormCreationService,
} from '@zumlo/ui';
import { FormControl, FormGroup } from '@angular/forms';
import { UiModule } from 'libs/ui/src/modules/ui/ui.module';
import { SeekerListingCardComponent } from '../seeker-listing-card/seeker-listing-card.component';
import { SeekerFilterComponent } from '../seeker-filter/seeker-filter.component';
import { debounceTime } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'z-seeker-listing-grid',
  standalone: true,
  imports: [
    TabsComponent,
    UiModule,
    DynamicFieldDirective,
    SeekerListingCardComponent,
    SeekerFilterComponent,
  ],
  templateUrl: './seeker-listing-grid.component.html',
  styleUrl: './seeker-listing-grid.component.scss',
})
export class SeekerListingGridComponent {
  config: any = tabGroup;
  seekerData: any = [];
  depressionData: any = [];
  insomniaData: any = [];
  tableConfig: any;
  form!: FormGroup;
  configs: any = dropdown;
  isValid: boolean = false;
  showTabs: boolean = true;
  showFilter: boolean = false;
  searchValue = new FormControl('');
  searchData!: string;
  tabChanges: any = [];
  isSeekerData: boolean = false;
  index: number = 0;
  details: any = [];
  filters!: any

  constructor(
    private service: TableDataService,
    formCreator: ZFormCreationService
  ) {
    this.form = formCreator.getFormGroup(this.configs);

    this.service.getHealthConditions().subscribe((response: any) => {
      response;
    });
    this.getSeekerData();
  }

  getSeekerData() {
    let httpParams = new HttpParams();
    if(this.filters) {
      let param = this.filters;
      Object.keys(param).forEach(function (key) {
        if(param[key] != null && param[key] != '') {
          httpParams = httpParams.append(key, param[key]);
        }
      });
    }
    this.service.getSeekerData(httpParams).subscribe((res: any) => {
      if (res) {
        this.details = res;
        res.filter((res: any) => {
          if (res.Healthconditions[0] == 'Anxiety') {
            this.seekerData.push(res);
            this.getData(this.seekerData);
          }
        });
      }
    });
  }

  getData(event: any) {
    let tableColumns!: any[];
    if (event.length > 0) {
      tableColumns = Object?.keys(event[0])?.filter((x: any) => {
        if (x != 'image') return x;
      });
      tableColumns.push('action');
    }
    this.tableConfig = { tableHeaders: tableColumns, tableData: event };
    this.config[this.index].tableConfig = this.tableConfig;
    this.isSeekerData = true;
  }

  valueChanged(event: any) {
    this.isValid = event.value.checked;
  }

  toggleView() {
    this.showTabs = !this.showTabs;
  }

  emitIndexName(data: any) {
    this.index = data.tabIndex;
    this.tabChanges = [];
    this.searchValue.reset('');

    this.details.filter((res: any) => {
      if (res.Healthconditions[0] == data?.textLabel) {
        this.tabChanges.push(res);
        this.getData(this.tabChanges);
      }
    });
  }

  setFilter(e:any) {
    console.log('applyFilter', e);
    this.filters = e.value
    this.getSeekerData();
  }

  searchString$ = this.searchValue.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((search: any) => {
      this.searchData = search;
    });
}
