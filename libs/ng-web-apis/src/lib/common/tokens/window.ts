import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const WINDOW = new InjectionToken('[WINDOW]: window object', {
    factory: () => inject(DOCUMENT)?.defaultView ?? null,
});
