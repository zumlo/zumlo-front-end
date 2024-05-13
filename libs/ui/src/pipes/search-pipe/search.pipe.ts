import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(items: any, searchText: string): any[] {
    let tableColumns!: any[];
    let tableData!: any[];
    if (!items) return [];
    if (!searchText) return items;

    let obj = items?.tableData.filter((item: any) => {
      return Object.keys(item).some((key) => {
        return String(item[key])
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
    });
    if (obj.length > 0) {
      tableData = obj
      tableColumns = Object?.keys(obj[0])?.filter((x: any) => {
        if (x != 'image') return x;
      });
      tableColumns.push('action');
    }
    let data: any = {
      tableHeaders: tableColumns,
      tableData: tableData,
    }
    return data
  }
}
