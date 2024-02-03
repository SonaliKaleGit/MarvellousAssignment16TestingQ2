import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('check multiplication using pipe',()=>{
    const obj=new MyMultPipe();
    obj.transform(7,"3");
    expect(obj.result).toBe(21);

})
});
