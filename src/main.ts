import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// import { provideHttpClient, withFetch } from '@angular/common/http';
// // הגדרת ה-HttpClient
// provideHttpClient(withFetch());


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { provideHttpClient, withFetch } from '@angular/common/http';

// // הגדרת ה-HttpClient עם fetch
// const config = {
//   ...appConfig,
//   providers: [
//     provideHttpClient(withFetch())
//   ]
// };

// bootstrapApplication(AppComponent, config)
//   .catch((err) => console.error(err));
