import {ArrowDownRight,ArrowUpRight,Minus} from 'lucide-react';
export const Card=({children,className=''}:{children:React.ReactNode;className?:string})=><section className={`card ${className}`}>{children}</section>;
export function Delta({value,good}:{value?:number;good?:boolean}){if(value==null||value===0)return <span className="delta neutral"><Minus size={13}/> No change</span>;const Icon=value>0?ArrowUpRight:ArrowDownRight;return <span className={`delta ${good?'good':'bad'}`}><Icon size={13}/>{Math.abs(value).toFixed(2)}</span>}
export const Empty=({text}:{text:string})=><div className="empty">{text}</div>;
