import { Injectable } from '@angular/core'
import { window } from '@angular/platform-browser/src/facade/browser';
import { assign } from 'lodash';

@Injectable()
export class SweetAlertService {
  constructor() {}

  swal() {
    return window.Sweetalert2(...Array.from(arguments));
  }

  prompt(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Submit',
      input: 'text'
    };
    return window.Sweetalert2(assign(baseOptions, options));
  }

  confirm(options) {
    const baseOptions = {
      showCancelButton: true,
      confirmButtonText: 'Confirm',
      type: 'warning'
    };
    return window.Sweetalert2(assign(baseOptions, options));
  }

  alert(options) {
    const baseOptions = {
      confirmButtonText: 'OK',
      type: 'info'
    };
    return window.Sweetalert2(assign(baseOptions, options));
  }

  question(options) {
    return this.alert(assign({ type: 'question' }, options));
  }

  success(options) {
    return this.alert(assign({ type: 'success' }, options));
  }

  error(options) {
    return this.alert(assign({ type: 'error' }, options));
  }

  warn(options) {
    return this.alert(assign({ type: 'warn' }, options));
  }

  info(options) {
    return this.alert(assign({ type: 'info' }, options));
  }
  
}
