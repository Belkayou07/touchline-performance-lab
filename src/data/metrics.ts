import { MetricDefinition } from '../types';
export const metrics: MetricDefinition[] = [
 {key:'weight',name:'Body weight',short:'Weight',unit:'kg',category:'Body',direction:'lower',hint:'Same time of day, before training'},
 {key:'sprint10',name:'10 m sprint',short:'10 m',unit:'s',category:'Speed',direction:'lower',hint:'Best of 3 attempts'},
 {key:'sprint30',name:'30 m sprint',short:'30 m',unit:'s',category:'Speed',direction:'lower',hint:'Best of 3 attempts'},
 {key:'jump',name:'Vertical jump',short:'Vert.',unit:'cm',category:'Power',direction:'higher',hint:'Best of 3 attempts'},
 {key:'broadJump',name:'Standing broad jump',short:'Broad',unit:'cm',category:'Power',direction:'higher',hint:'Best of 3 attempts'},
 {key:'pushups',name:'Push-ups',short:'Push-ups',unit:'reps',category:'Strength',direction:'higher',hint:'Strict reps in 60 seconds'},
 {key:'plank',name:'Front plank',short:'Plank',unit:'s',category:'Strength',direction:'higher',hint:'Stop when form breaks'},
 {key:'beep',name:'Beep test',short:'Beep',unit:'level',category:'Endurance',direction:'higher',hint:'Final completed shuttle level'},
 {key:'restingHr',name:'Resting heart rate',short:'Rest HR',unit:'bpm',category:'Recovery',direction:'lower',hint:'Measure after waking, before standing'}
];
