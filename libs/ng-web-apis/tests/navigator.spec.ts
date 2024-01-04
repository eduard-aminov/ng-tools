import { TestBed } from '@angular/core/testing';
import { NAVIGATOR } from '../src';

describe('WINDOW', () => {
    it('injects navigator object ', function () {
        TestBed.configureTestingModule({});

        expect(TestBed.inject(NAVIGATOR)).toBe(window.navigator);
    });
});
