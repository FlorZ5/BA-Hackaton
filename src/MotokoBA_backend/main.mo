import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Nat32 "mo:base/Nat32";
import Nat64 "mo:base/Nat64";
import Debug "mo:base/Debug";

actor ClientRegistry {

  type Id = Nat32;

  type ClientInfo = {
    nombre : Text;
    apellido : Text;
    telefono : Nat64;
    correo : Text;
    direccion : Text;
    usuario : Text;
    contrasena : Text;
  };

  stable var ID: Id = 0;
  let IDGenerate = HashMap.HashMap<Text, ClientInfo>(0, Text.equal, Text.hash);

  private func generaID() : Nat32 {
		ID += 1;
		return ID;
	};

  public query func getID() : async Nat32 {
		return ID;
	};

  public shared func crearRegistro(nombre : Text, apellido : Text, telefono : Nat64, correo : Text, direccion : Text, usuario : Text, contrasena : Text) : async () {
		let register = { nombre=nombre; apellido=apellido; telefono=telefono; correo=correo; direccion=direccion; usuario=usuario; contrasena=contrasena};

		IDGenerate.put(Nat32.toText(generaID()), register);
		
		Debug.print("¡Usuario registrado correctamente! ID: " # Nat32.toText(ID));
		return ();
	};

  public query func getUser (id: Text) : async ? ClientInfo {
		let user: ?ClientInfo = IDGenerate.get(id);
		return user;
	};

};
