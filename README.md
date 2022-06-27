### Deploy to Google Cloud Run Using Buildpacks

Google Cloud Build supports buildpacks natively which means the Pack tool does not need to be installed locally. 

Instead the *--pack* switch will trigger Cloud Build to use Buildpack as it builds the container image.

```
gcloud alpha builds submit --pack image=gcr.io/[project-id]/simpletodov2
```

NOTE

Note Cloud Build will **NOT** run the `npm build` script for a production React app. So your Application will be deployed in Dev mode.