import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {

    public listings = [];

    public product: any;

    public departments = [
        {
            'name': 'Hardware',
            'id': 168145,
            'results': [],
            'paging': {}
        },
        {
            'name': 'E-Liquid',
            'id': 168148,
            'results': [],
            'paging': {}
        },
        {
            'name': 'Accessories',
            'id': 168151,
            'results': [],
            'paging': {}
        },
        {
            'name': 'Wax and Dry Herb',
            'id': 168154,
            'results': [],
            'paging': {}
        },
        {
            'name': 'White Horse Product',
            'id': 168163,
            'results': [],
            'paging': {}
        },
        {
            'name': 'Coils',
            'id': 168166,
            'results': [],
            'paging': {}
        },
        {
            'name': 'CBD Oil',
            'id': 168838,
            'results': [],
            'paging': {}
        }
    ];

    public new_listings: Object;
    public featured_listings: Object;

  constructor() { }

}
