import { CanActivateFn } from '@angular/router';

export const editorProductosGuard: CanActivateFn = (route, state) => {
  const rol = localStorage.getItem('rol')
  if (rol == 'administrador') {
    return true;
  } else {
    return false;
  }

};
