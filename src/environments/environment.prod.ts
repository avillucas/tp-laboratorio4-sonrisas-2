// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyCiop5VHmLFwjEmAKaPCAJKJBmRJlj-Y_4',
    authDomain: 'sonrisastp-8a3c9.firebaseapp.com',
    databaseURL: 'https://sonrisastp-8a3c9.firebaseio.com',
    projectId: 'sonrisastp-8a3c9',
    storageBucket: 'gs://sonrisastp-8a3c9.appspot.com',
    messagingSenderId: '202373428554',
    appId: '1:202373428554:web:7b80147a04a39969'
  },
  usuarios: [
    { email: 'administrador@test.com', password: 'administrador131313' },
    { email: 'especialista@test.com', password: 'especialista131313' },
    { email: 'recepcionista@test.com', password: 'recepcionista131313' },
    { email: 'cliente@test.com', password: 'cliente131313' },
  ],
  db: {
    usuarios: 'usuarios',
    encuestas: 'encuestas',
    turnos: 'turnos',
  },
  collections: {
    usuarios: {
      turnos: 'turnos',
      reservas: 'reservas'
    }
  },
  storage: {
    profileFolder: 'profile'
  },
  clinica: {
    tiempoMinimoConsulta: 15,
    lav: {
      inicio: 8,
      fin: 19,
    },
    sab: {
      inicio: 8,
      fin: 14,
    }
  },
  router: {
    params: {
      fechaTurnos: 'fecha'
    }
  },
  encuesta: {
    puntajeMaximo: 10
  },
  default: {
    usuarios: {
      // tslint:disable-next-line: max-line-length
      profileImage: 'https://firebasestorage.googleapis.com/v0/b/sonrisastp-8a3c9.appspot.com/o/profile%2FpvQTtd6ZZAhloYgSTM1ZXIvjbUp2?alt=media&token=ae10dc80-beaf-462d-8432-38d68c2a9b99'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
