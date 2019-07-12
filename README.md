# Consultorio Buena Sonrisa
Debemos realizar un sistema según las necesidades y deseos del cliente, para eso tenemos una
breve descripción de lo que el cliente nos comenta acerca de su negocio.
“La clínica Buena Sonrisa, especialista en salud dental, cuenta actualmente con siete consultorios (más otros tres que están en construcción), dos laboratorios (uno especializado en diagnóstico por imágenes, y otro en mecánica dental), y una sala de espera general. Está abierta al público de lunes a viernes en el horario de 8:00 a 19:00, y los
sábados en el horario de 8:00 a 14:00. Trabajan en ella profesionales de diversas especialidades, que ocupan los consultorios acorde a su disponibilidad, y reciben en ellos pacientes con turno para consulta o tratamiento. Dichos turnos son asignados de forma centralizada por el área de recepción, que recibe las solicitudes ersonalmente, por teléfono, por e-mail o a través del sitio web de la clínica. La duración mínima de un turno es de 15 minutos.” Estamos necesitando un sistema para que cada uno de los tipos de usuarios realicen las tareas que se detallan a continuación. 


Condiciones para aprobación directa
subido a la web
login
readme
estilos
Imágenes
1 -Poder registrarse como usuario con imagen
2- pedir un turno
3- ser atendido por el profesional.
4- que el profesional guarde una reseña
5- que el usuario pueda ver la reseña.
6-Que el usuario puede cargar la encuesta de satisfacción.

ng build --prod; cp -R dist/parcial2/* firebase/public/; cd firebase ; firebase deploy ;


* Usuario
 - email : string 
 - nombre: string 
 - rol : string 

Adminitrador : Usuario
Clientes: Usuario
Especialistas: Usuario  
Recepcionista: Usuario

Encuesta : 
  - turno: string ID 
  - experiencia : string 66  
Turno ( lav 8 a 19 , s 8 a 14 15 min  ): 
  - inicio:Time   
  - especialista:string ( UID)
  - cliente : string ( UID)
  - resena: string 66  
+ Reservar(cliente, especialista, time)  
+ Disponibles(Dia)
+ Tomados(especialista,Dia)





CASOS DE USO : 
CLIENTE: 
- TURNOS: Ver turnos pedidos y pedir nuevo turno 
- ENCUESTA 
RECEPCIONISTA : 
- TURNOS : verlos y cancelarlos , pedir turnos por un paciente 
- Mostrar consultorio 
ESPECIALISTA: 
- TURNOS: Ver los turnos filtrados por fecha destinados a el Marcar asistencia del turno y marcar 
- 

REGLAS : 
service cloud.firestore {
  match /databases/{database}/documents {
 
    match /usuarios/{userId} {
        allow read, write: if isOwner(userId);
        allow read, write: if isAdmin();
    }
    
    match /turnos/{documents=**} {
        allow read, write: if isAdmin();
    }

    // Reusable function to determine document ownership
    function isOwner(userId) {
        return request.auth.uid == userId
    }
    
    function isAdmin() {
        return request.auth.uid == 'Ju0ppORcdhSVzs4EoXcVKZeDWR33'
    }
  }
}

#DEPLOY 
cp -R dist/parcial2/* firebase/public/; cd firebase ; firebase deploy ; 

Guia: src/docs/Lab 4-Buena Sonrisa.pdf
Hosting URL: https://sonrisastp-8a3c9.firebaseapp.com

{
  "hosting": {
    "site": "tpsonrisas",
    "public": "public",
    ...
  }
}
