import { InjectionToken } from '@angular/core';

export const NAVIGATOR = new InjectionToken('[NAVIGATOR]: window.navigator object', {
    factory: () => window.navigator,
});
