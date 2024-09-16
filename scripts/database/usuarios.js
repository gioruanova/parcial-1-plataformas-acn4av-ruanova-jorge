export const esMedicosList = [
  { id: 3000, nombre: "Dr. Pedro Lopez", especialidad: "Cardiología" },
  { id: 3001, nombre: "Dra. Maria Garcia", especialidad: "Neurología" },
  { id: 3002, nombre: "Dr. Luis Gomez", especialidad: "Gastroenterología" },
];

export const usuariosList = [
  {
    id: 1000,
    dni: "32952245",
    nombre: "Jorge",
    apellido: "Ruanova",
    email: "jorge.ruanova@gmail.com",
    password: "123456",
    esAdmin: true,
    esMedico: false,
  },
  {
    id: 2000,
    dni: "555",
    nombre: "Maria",
    apellido: "Garcia",
    email: "maria.garcia@gmail.com",
    password: "555",
    esAdmin: false,
    esMedico: false,
  },
  {
    id: 3000,
    dni: "777",
    nombre: "Pedro",
    apellido: "Lopez",
    email: "pedro.lopez@gmail.com",
    password: "777",
    esAdmin: false,
    esMedico: true,
  },
];
