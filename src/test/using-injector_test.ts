import {
  inject
} from '@angular/core/testing';
import {
  APP_ID
} from '@angular/core';


xdescribe('default test injector', () => {
  it('should provide default id', inject([APP_ID], (id) => {
    expect(id).toBe('a');
  }));
});
