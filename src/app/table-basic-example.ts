import {Component} from '@angular/core';
import * as math from 'mathjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const designations = [
    {
    code: 'V1',
    formula: `V1 = 1`,
    result: `INIT`,
    expected: '1',
    expected2: '2',
    
    },
    {
    code: 'V2',
    formula: `V2 = 1`,
    result: `INIT`,
    expected: '1',
    expected2: '1',
    },
    {
    code: 'V3',
    formula: `V3 = V1 + 1`,
    result: `INIT`,
    expected: '2',
    expected2: '3',
    },
    {
    code: 'V4',
    formula: `V4 = V2 + 1`,
    result: `INIT`,
    expected: '2',
    expected2: '2',
    },
    {
    code: 'V5',
    formula: `V5 = V1 + V2`,
    result: `INIT`,
    expected: '2',
    expected2: '3',
    },
    {
    code: 'V6',
    formula: `V6 = V1 + V5`,
    result: `INIT`,
    expected: '3',
    expected2: '5',
    },
    {
    code: 'V7',
    formula: `V7 = V4 + V5`,
    result: `INIT`,
    expected: '4',
    expected2: '5',
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
  displayedColumns: string[] = ['code', 'formula', 'result', 'expected', 'expected2'];
  dataSource = designations;
  parser = math.parser();

  evaluate = (designations: any[], intent?: number) : any[] => {
    let leftToDo: any[] = [];
    let occurence = intent ? intent : 1;


    designations.forEach( d => {
      try {
      d.result = this.parser.evaluate(d.formula)
      } catch (e) {
        leftToDo.push(d)
      }
    })

    if(occurence > 10) { 
      return leftToDo 
      }
    if ( leftToDo.length > 0) {
      return this.evaluate(leftToDo, occurence + 1 )
    } 
    return []
    
  }

  evaluate2 = (designation: any, newFormula?:string) : void => {
    let nextToDo: any[] = [];

  	const expression = newFormula ? 
    `${designation.code} = ${newFormula}` : 
    designation.formula

    this.parser.evaluate(expression);

    
    
  }

  refresh = () => {
    console.log(this.evaluate(this.shuffle(this.dataSource)))
  }

  set1 = () => 
  {
    this.dataSource.find( d => d.code === 'V1')!.formula = `V1 = 1`;
    this.refresh()
  }

  set2 = () => 
  {
    this.dataSource.find( d => d.code === 'V1')!.formula = `V1 = 2`;
    this.refresh()
  }

  shuffle = (array: any[]) => {
    const shuffled = array.sort(() => Math.random() - 0.5);
    return shuffled;
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */