import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const designations = [
    {
    code: 'V1',
    formula: `V1`,
    result: `Init`
    },
    {
    code: 'V2',
    formula: `V2`,
    result: `Init`
    },
    {
    code: 'V3',
    formula: `V3 = V1 + 1`,
    result: `Init`
    },
    {
    code: 'V4',
    formula: `V4 = V2 + 1`,
    result: `Init`
    },
    {
    code: 'V5',
    formula: `V5 = V1 + V2`,
    result: `Init`
    },
    {
    code: 'V6',
    formula: `V6 = V1 + V5`,
    result: `Init`
    },
    {
    code: 'V7',
    formula: `V7 = V4 + V5`,
    result: `Init`
    },
  ]

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['code', 'formula', 'result'];
  dataSource = designations;
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */