export type Direction = 'lower' | 'higher';
export type MetricKey = 'weight'|'sprint10'|'sprint30'|'jump'|'broadJump'|'pushups'|'plank'|'beep'|'restingHr';
export interface MetricDefinition { key: MetricKey; name: string; short: string; unit: string; category: string; direction: Direction; hint: string }
export interface Athlete { id:string; name:string; position:string; birthYear:number; height:number; dominantFoot:'Right'|'Left'|'Both'; color:string; initials:string }
export interface TestSession { id:string; athleteId:string; date:string; readiness:number; notes:string; values:Partial<Record<MetricKey,number>> }
export type Page = 'overview'|'athletes'|'testing'|'history'|'progress'|'records'|'settings';
