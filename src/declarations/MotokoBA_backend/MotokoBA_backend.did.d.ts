import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface ClientInfo {
  'direccion' : string,
  'nombre' : string,
  'usuario' : string,
  'apellido' : string,
  'correo' : string,
  'telefono' : bigint,
  'contrasena' : string,
}
export interface _SERVICE {
  'crearRegistro' : ActorMethod<
    [string, string, bigint, string, string, string, string],
    undefined
  >,
  'getID' : ActorMethod<[], number>,
  'getUser' : ActorMethod<[string], [] | [ClientInfo]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
