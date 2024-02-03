import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult',
  standalone: true
})
export class MyMultPipe implements PipeTransform {

  result=0;
  transform(value: number,param:string): number 
  {
    let mul=parseFloat(param);
    this.result=value * mul;
    return this.result;
  }

}
