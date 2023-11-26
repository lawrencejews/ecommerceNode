### FitnessApp
![Fitness Application](fitnessApp.png)
- Sign up to cloudflare for hosting account `cloudflare.com`.
- On the Dashboard access the workers and pages section.
- Click pages and the connect with your github or gitlab account.
- Select the repo you wish to deploy and press begin set-up.
- Select the branch, build command `npm run build` and output directory `dist`.
- Add Node version for your project in the Environment variables-advanced`NODE_VERSION = 16.20.2`.
- Save and deploy.
LINK: https://fitnessapp-8jp.pages.dev/

#### DockerFile / dockerignore
- For React-Vite remember to expose the PORT in vite.config.ts
- Create an account with dockerhub to push all your images later.
- Build the image: docker build -t your-name-on-docker-hub/fitness-application:latest
- Run the created image: `docker build -t lubs/fitness-application-hub:latest . `
- Push the image to dockerhub: `docker push lubs/fitness-application-hub:latest `.
