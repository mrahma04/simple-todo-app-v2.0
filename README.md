### Deploy to Google Cloud Run Using Buildpacks

Google Cloud Build supports buildpacks natively which means the Pack tool does not need to be installed locally. 

Instead the *--pack* switch will trigger Cloud Build to use Buildpack as it builds the container image.

```
gcloud alpha builds submit --pack image=gcr.io/[project-id]/simpletodov2
```

NOTE

Cloud Build will **NOT** run the `npm build` script for a production React app. So your Application will be deployed in Dev mode.

### Deploy to Google Cloud Run Using Dockerfile

This is the prototypical workflow of deploying a containerized applicatin to Cloud Run.

[Sample Config](https://cloud.google.com/community/tutorials/deploy-react-nginx-cloud-run)

Dockerfile -> Cloud Build -> Container Image Artifcant -> Container Registry -> Cloud Run

Create the Dockerfile and nginx.conf files. Then build the Docker container image using the following command:

```
gcloud builds submit --tag gcr.io/[cloud-run-500]/simpletodov4
```

NOTE

Cloud Build will deploy a production version of React using this method. It uses a two-stage build where the initial container contains the `/buid` folder which is then copied to a **nginx** container and then deployed.

### Notes

Might need to run `gcloud auth configure-docker` after setting up `gcloud`