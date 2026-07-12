import { Athlete, TestSession } from '../types';
export const seedAthletes: Athlete[]=[
 {id:'ayoub',name:'Ayoub',position:'Right back',birthYear:2004,height:180,dominantFoot:'Right',color:'#b7f34a',initials:'AB'},
 {id:'brother',name:'Brother',position:'Central midfielder',birthYear:2007,height:176,dominantFoot:'Right',color:'#6ee7f9',initials:'BR'}
];
const weeks=['2026-05-31','2026-06-07','2026-06-14','2026-06-21','2026-06-28','2026-07-05'];
export const seedSessions:TestSession[]=weeks.flatMap((date,i)=>[
 {id:`a${i}`,athleteId:'ayoub',date,readiness:[7,8,6,8,9,8][i],notes:'',values:{weight:73.4-i*.12,sprint10:1.92-i*.025,sprint30:4.62-i*.035,jump:43+i*1.1,broadJump:218+i*2.4,pushups:35+i*2,plank:88+i*5,beep:10.2+i*.2,restingHr:58-i*.6}},
 {id:`b${i}`,athleteId:'brother',date,readiness:[8,7,8,7,8,9][i],notes:'',values:{weight:67.8+i*.06,sprint10:1.87-i*.018,sprint30:4.49-i*.028,jump:46+i*.7,broadJump:224+i*1.8,pushups:31+i*1.6,plank:95+i*4,beep:10.8+i*.16,restingHr:56-i*.4}}
]);
