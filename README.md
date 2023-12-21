# BREADFAST

Here is the short and sweet spec of Breadfast coding test task app.

## Tech Stack used in Breadfast coding test

- [React Native CLI] - Used to define app screens and access native feature.
- [React Navigation] - Used to define stack screen.

## Screenshots - of all screens

Here you can include screenshots of your project.

<p float="left">
   <img src="/src/assets/images/1.png" width="200" />
   <img src="/src/assets/images/2.png" width="200" /> 
   <img src="/src/assets/images/3.png" width="200" />
   <img src="/src/assets/images/4.png" width="200" />
</p>

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Assets foldeer contains all the image, svgs and fonts.
  - `navigation`: Folder to store the navigators.
    - `Root` : Root stack of all navigation
    - `StackName` : Screen name constants
    - `types` : Navigation types
  - `screens`: Folder that contains all your application screens.
    - `Screen`: Screen folder contains below files.
      - `screen.tsx`
      - `Screen_styles.ts`
      - `utils` : contains respective screens data, hooks and functions
  - `App.tsx`: Main component that starts your whole app.
  - `index.ts`: Entry point of your application as per React-Native standards.
