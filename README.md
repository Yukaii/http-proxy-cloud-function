# Simple http-proxy on GCP

## Deployment

```bash
gcloud functions deploy http-proxy \
  --gen2 \
  --runtime=nodejs18 \
  --region=asia-east1 \
  --source=. \
  --entry-point=handler \
  --trigger-http \
  --allow-unauthenticated
```

## Usage

For example, if the deployed URL is: `https://my-proxy.run.app`, then you can use it like this:

```bash
curl -H "X-Target: https://example.com" https://my-proxy.run.app/subpath-for-example-com
```
