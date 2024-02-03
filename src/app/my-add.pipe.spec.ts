import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('check addition using pipe',()=>{
      const obj=new MyAddPipe();
      obj.transform(8,"3");
      expect(obj.result).toBe(11);

  })
});
