# google-gcs-examples

Simple example to demonstrate how to use Google Cloud Storage (GCS) service.

## Features

-   Upload file
-   Download file
-   Remove file
-   Get file informations

## Installation

```bash
$ yarn @rimiti/google-gcs-examples
```

## How to use it?

```
$ import * as gcs from '@rimiti/google-gcs-examples';

// Uploading file
gcs.upload(bucket, file)
  .then(() => console.log('Upload done.')
  .catch((e) => console.error('Error during upload', e);
  
// Downloading file
gcs.download(bucket, filename, destination)
  .then(() => console.log('Download done.')
  .catch((e) => console.error('Error during download', e);
  
// Removing file
gcs.remove(bucket, filename)
  .then(() => console.log('Remove done.')
  .catch((e) => console.error('Error during remove', e);
  
// Retrieving file information
gcs.getFileInformations(bucket, filename)
  .then((informations) => console.log(informations)
  .catch((e) => console.error('Error during retrieve', e);
```

## License

MIT © [Dimitri DO BAIRRO](https://github.com/rimiti)
