import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-table',
  standalone: true,
  imports: [UiModule],
  templateUrl: './z-table.component.html',
  styleUrl: './z-table.component.scss',
})
export class ZTableComponent implements OnInit ,OnChanges, AfterViewInit{

  @Input() tableConfig: any;
  @Input() search: any;
  @Output() statusInfo = new EventEmitter();
  @Output() viewInfo = new EventEmitter();
  @Output() editInfo = new EventEmitter();
  @Output() deleteInfo = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('form') form: any;

  tableData: any;
  tableConfiguration: any;
  userId!: string;
  currentUser: any;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges() {
    this.createTableData(); //Initial this function will execute.
  }

  ngAfterViewInit() {
    if (this.tableConfig) {
      this.tableConfig.tableHeaders = this.tableConfig.tableHeaders.map((item: string) => item.toLowerCase()); // It will change the keys of the header to the lower case.
      this.tableConfig.tableData.map((item: object) => { 
        Object.keys(item).forEach(controlName => {
          return controlName.toLowerCase();  // It will change the value to the lower case.
        });
      })
    }
    this.createTableData();
    this.search?.subscribe((val: string) => {
      const filterValue = val;
      this.tableData.filter = filterValue?.trim().toLowerCase(); // It will re-render the table data according to the search value.
    });
  }

  // It will render the table with the data shared from the parent component.
  createTableData() {
    if (this.tableConfig) {
      this.tableConfiguration = {
        tableHeaders: this.tableConfig?.tableHeaders,
        tableData: this.tableConfig?.tableData
      }
      this.tableData = new MatTableDataSource<any>(this.tableConfiguration.tableData);
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;
    }
  }

  // It will emit the status output() to parent component.
  updateStatus(event: any) {
    this.statusInfo.emit(event);
  }

  // It will emit the view output() to parent component.
  viewRecord(data: any) {
    this.viewInfo.emit(data);
  }

  // It will emit the edit output() to parent component.
  editRecord(userData: any) {
    this.editInfo.emit(userData);
  }

  // It will emit the delete output() to parent component.
  deleteRecord(userData: any) {
    this.deleteInfo.emit(userData.id);
  }

  // It will update the table data.
  updateData(data: any) {
    let i = this.tableConfig.tableData.findIndex((res: any) => res.id === data.id);
    this.tableConfig.tableData.splice(i, 1);
    this.createTableData();
  }

}
