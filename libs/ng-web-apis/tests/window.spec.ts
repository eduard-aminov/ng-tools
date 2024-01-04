import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../src/lib/common';

describe('WINDOW', () => {
    it('injects window object ', () => {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(WINDOW)).toBe(window);
    });

    it('returns null if no window object', () => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: DOCUMENT,
                    useValue: {
                        querySelectorAll: () => [],
                    },
                },
            ],
        });

        expect(TestBed.inject(WINDOW)).toBeNull();
    });
});
