import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term: number): any {
        return items.filter(item =>
            item.id <= term);
    }

}
// return items.filter(country =>
//     country.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
//     country.nativeName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
//     country.capital.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
//     String(country.population).toLowerCase().indexOf(searchText.toLowerCase()) !== -1);