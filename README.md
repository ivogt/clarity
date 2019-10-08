# Clarity

This project serves Angular UI and has server side implementation with IoC pattern.


## Installing / Getting started

### 1. Download & extract or clone the repository
### 2. Install and run MongoDB
* Should listen on default port (27017)

### 3. Open project directory to install the dependencies

```sh
    nvm use
    npm install
```

### 4. Run the app

```sh
    npm start
```
## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Structure 

```
├── README.md
├── angular.json
├── browserslist
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── karma.conf.js
├── package-lock.json
├── package.json
├── server
│   ├── application
│   │   ├── applicationProvider.js
│   │   └── services
│   │       ├── githubService
│   │       │   ├── constants
│   │       │   │   ├── errorMessages.js
│   │       │   │   └── query.js
│   │       │   ├── githubGraphqlService.js
│   │       │   ├── githubService.js
│   │       │   └── index.js
│   │       ├── servicesProvider.js
│   │       └── userService
│   │           ├── constants
│   │           │   └── errorMessages.js
│   │           ├── index.js
│   │           ├── userService.js
│   │           └── validationFuncs
│   │               └── index.js
│   ├── config
│   │   ├── corsConfig.js
│   │   ├── dbConfig.js
│   │   ├── index.js
│   │   ├── routesConfig.js
│   │   ├── serverConfig.js
│   │   └── sessionConfig.js
│   ├── persistence
│   │   ├── mongoose
│   │   │   ├── context
│   │   │   │   ├── context.js
│   │   │   │   └── contextProvider.js
│   │   │   ├── data
│   │   │   │   ├── data.js
│   │   │   │   └── dataProvider.js
│   │   │   ├── repositories
│   │   │   │   ├── baseRepository.js
│   │   │   │   ├── repositoriesProvider.js
│   │   │   │   └── userRepository.js
│   │   │   ├── schemas
│   │   │   │   └── userSchema.js
│   │   │   └── specifications
│   │   │       ├── order
│   │   │       │   ├── multipleOrder.js
│   │   │       │   └── orderBy.js
│   │   │       ├── specificationsProvider.js
│   │   │       └── where
│   │   │           ├── clause.js
│   │   │           └── operators.js
│   │   └── persistenceProvider.js
│   ├── presentation
│   │   ├── app.js
│   │   ├── appProvider.js
│   │   ├── controllers
│   │   │   ├── controllersProvider.js
│   │   │   └── userController.js
│   │   ├── middlewares
│   │   │   ├── errors
│   │   │   │   ├── errors.js
│   │   │   │   └── index.js
│   │   │   ├── middlewares.js
│   │   │   └── middlewaresProvider.js
│   │   ├── presentationProvider.js
│   │   ├── routes
│   │   │   ├── routesProvider.js
│   │   │   └── userRoutes.js
│   │   └── utils
│   │       ├── index.js
│   │       ├── toDetailsViewModel.js
│   │       ├── toReposViewModel.js
│   │       └── toUserViewModel.js
│   ├── scripts
│   │   └── ADD_GUEST_USER.js
│   ├── server.js
│   └── utils
│       ├── createContainer.js
│       ├── customErrors
│       │   ├── NotFoundError.js
│       │   ├── ValidationError.js
│       │   └── index.js
│       ├── index.js
│       └── logger.js
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.less
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   └── container
│   │   │       ├── application
│   │   │       │   ├── applicationProvider.js
│   │   │       │   └── services
│   │   │       │       ├── servicesProvider.js
│   │   │       │       └── userService
│   │   │       │           ├── constants
│   │   │       │           │   └── errorMessages.js
│   │   │       │           ├── index.js
│   │   │       │           ├── userService.js
│   │   │       │           └── validationFuncs
│   │   │       │               └── index.js
│   │   │       ├── config
│   │   │       │   ├── dbConfig.js
│   │   │       │   ├── index.js
│   │   │       │   ├── routesConfig.js
│   │   │       │   └── serverConfig.js
│   │   │       ├── container.component.html
│   │   │       ├── container.component.less
│   │   │       ├── container.component.spec.ts
│   │   │       ├── container.component.ts
│   │   │       ├── index.ts
│   │   │       ├── persistence
│   │   │       │   ├── mongoose
│   │   │       │   │   ├── context
│   │   │       │   │   │   ├── context.js
│   │   │       │   │   │   └── contextProvider.js
│   │   │       │   │   ├── data
│   │   │       │   │   │   ├── data.js
│   │   │       │   │   │   └── dataProvider.js
│   │   │       │   │   ├── repositories
│   │   │       │   │   │   ├── baseRepository.js
│   │   │       │   │   │   ├── repositoriesProvider.js
│   │   │       │   │   │   └── userRepository.js
│   │   │       │   │   ├── schemas
│   │   │       │   │   │   └── userSchema.js
│   │   │       │   │   └── specifications
│   │   │       │   │       ├── order
│   │   │       │   │       │   ├── multipleOrder.js
│   │   │       │   │       │   └── orderBy.js
│   │   │       │   │       ├── specificationsProvider.js
│   │   │       │   │       └── where
│   │   │       │   │           ├── clause.js
│   │   │       │   │           └── operators.js
│   │   │       │   └── persistenceProvider.js
│   │   │       ├── presentation
│   │   │       │   ├── app.js
│   │   │       │   ├── appProvider.js
│   │   │       │   ├── controllers
│   │   │       │   │   ├── controllersProvider.js
│   │   │       │   │   └── userController.js
│   │   │       │   ├── middlewares
│   │   │       │   │   ├── middlewares.js
│   │   │       │   │   ├── middlewaresProvider.js
│   │   │       │   │   ├── secondPhaseMiddlewares.js
│   │   │       │   │   └── secondPhaseMiddlewaresProvider.js
│   │   │       │   ├── presentationProvider.js
│   │   │       │   ├── routes
│   │   │       │   │   ├── routesProvider.js
│   │   │       │   │   └── userRoutes.js
│   │   │       │   └── utils
│   │   │       │       ├── index.js
│   │   │       │       └── toUserViewModel.js
│   │   │       ├── server.js
│   │   │       └── utils
│   │   │           ├── createContainer.js
│   │   │           ├── customErrors
│   │   │           │   ├── NotFoundError.js
│   │   │           │   ├── ValidationError.js
│   │   │           │   └── index.js
│   │   │           ├── index.js
│   │   │           └── logger.js
│   │   ├── models
│   │   │   ├── readme.model.ts
│   │   │   ├── repo.model.ts
│   │   │   └── user.model.ts
│   │   ├── routes
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.less
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   └── index.ts
│   │   │   ├── errorRemote
│   │   │   │   ├── errorRemote.component.html
│   │   │   │   ├── errorRemote.component.less
│   │   │   │   ├── errorRemote.component.spec.ts
│   │   │   │   ├── errorRemote.component.ts
│   │   │   │   └── index.ts
│   │   │   ├── login
│   │   │   │   ├── index.ts
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.less
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   └── repo-details
│   │   │       ├── index.ts
│   │   │       ├── repo-details.component.html
│   │   │       ├── repo-details.component.less
│   │   │       ├── repo-details.component.spec.ts
│   │   │       └── repo-details.component.ts
│   │   └── services
│   │       ├── auth
│   │       │   ├── auth-guard.service.ts
│   │       │   ├── auth.service.spec.ts
│   │       │   ├── auth.service.ts
│   │       │   ├── http-error.interceptor.ts
│   │       │   ├── http.interceptor.ts
│   │       │   └── index.ts
│   │       └── github
│   │           ├── github.service.spec.ts
│   │           ├── github.service.ts
│   │           └── index.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.less
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```
