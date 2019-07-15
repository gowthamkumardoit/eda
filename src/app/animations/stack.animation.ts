import {
    trigger,
    animate,
    style,
    group,
    animateChild,
    query,
    stagger,
    transition,
    state,
    keyframes
} from '@angular/animations';

export const Animations =
    trigger('listAnimation', [
        transition('* => *', [ // each time the binding value changes
            query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter', stagger('300ms', [
                animate('0.5s ease-in', keyframes([
                    style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                    style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
                    style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                ]))
            ]), { optional: true }),
            query(':leave', stagger('300ms', [
                animate('0.5s ease-in', keyframes([
                    style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                    style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
                    style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
                ]))
            ]), { optional: true })
        ])
    ]);

