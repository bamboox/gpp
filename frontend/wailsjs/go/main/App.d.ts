// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {config} from '../models';
import {data} from '../models';

export function Add(arg1:string):Promise<string>;

export function Del(arg1:string):Promise<string>;

export function List():Promise<Array<config.Peer>>;

export function PingAll():Promise<void>;

export function SetPeer(arg1:string,arg2:string):Promise<string>;

export function Start():Promise<string>;

export function Status():Promise<data.Status>;

export function Stop():Promise<string>;