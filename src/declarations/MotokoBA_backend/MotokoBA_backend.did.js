export const idlFactory = ({ IDL }) => {
  const ClientInfo = IDL.Record({
    'direccion' : IDL.Text,
    'nombre' : IDL.Text,
    'usuario' : IDL.Text,
    'apellido' : IDL.Text,
    'correo' : IDL.Text,
    'telefono' : IDL.Nat64,
    'contrasena' : IDL.Text,
  });
  return IDL.Service({
    'crearRegistro' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat64, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [],
        [],
      ),
    'getID' : IDL.Func([], [IDL.Nat32], ['query']),
    'getUser' : IDL.Func([IDL.Text], [IDL.Opt(ClientInfo)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
