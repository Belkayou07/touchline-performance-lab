import { Athlete, TestSession } from '../types';

export const seedAthletes: Athlete[] = [
 {id:'demo-test',name:'Test',position:'Right back',birthYear:2004,height:180,dominantFoot:'Right',color:'#b7f34a',initials:'TS'}
];

const weeks=['2026-04-19','2026-04-26','2026-05-03','2026-05-10','2026-05-17','2026-05-24','2026-05-31','2026-06-07','2026-06-14','2026-06-21','2026-06-28','2026-07-05'];
const readiness=[7,8,6,8,7,9,8,7,9,8,8,9];
const weight=[73.8,73.7,73.9,73.5,73.4,73.3,73.2,73.1,73.0,72.9,72.8,72.7];
const sprint10=[1.96,1.94,1.95,1.92,1.91,1.90,1.92,1.89,1.88,1.87,1.86,1.85];
const sprint30=[4.68,4.64,4.66,4.59,4.57,4.55,4.58,4.52,4.49,4.48,4.45,4.43];
const jump=[42,43,42,44,45,46,45,47,48,48,49,50];
const broadJump=[214,217,216,220,222,225,224,228,230,232,234,237];
const pushups=[32,34,33,36,38,39,40,42,43,45,46,48];
const plank=[82,87,85,92,96,101,104,108,113,118,123,130];
const beep=[9.8,10.0,9.9,10.2,10.3,10.5,10.5,10.7,10.8,11.0,11.1,11.3];
const restingHr=[61,60,62,59,59,58,58,57,56,56,55,54];

export const seedSessions: TestSession[] = weeks.map((date,i)=>({
 id:`demo-session-${i+1}`,athleteId:'demo-test',date,readiness:readiness[i],
 notes:i===0?'Baseline testing session':i===11?'Strong finish to the 12-week block':'Weekly demo assessment',
 values:{weight:weight[i],sprint10:sprint10[i],sprint30:sprint30[i],jump:jump[i],broadJump:broadJump[i],pushups:pushups[i],plank:plank[i],beep:beep[i],restingHr:restingHr[i]}
}));
