import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * Async modal dialog service
 * DialogService make this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm.
 */
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }

  /**
   * Ask user to confirm an action. `message` explains the action and chouces.
   * Returns observable resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it Ok?');

    return of(confirmation);
  }
}
