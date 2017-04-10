import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 4) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
 
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startIndex: startIndex,
            endIndex: endIndex
        };
    }
}