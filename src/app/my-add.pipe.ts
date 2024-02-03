import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  result=0;
  transform(value: number,param:string): number 
  {
    let add=parseFloat(param);
    this.result= value+add;
    return this.result;
    
  }

}
