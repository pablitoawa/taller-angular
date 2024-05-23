import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { editorProductosGuard } from './editor-productos.guard';

describe('editorProductosGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => editorProductosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
