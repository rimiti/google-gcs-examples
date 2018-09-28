// @flow
import Storage from "@google-cloud/storage";
import type { GcsInfo } from "./types";

const storage = new Storage({
  credentials: {
    type: "service_account",
    project_id: "example-5435816",
    private_key_id: "yourPrivateKeyId",
    private_key: "yourPrivateKey",
    client_email: "dimitri.dobairro@dimsolution.com",
    client_id: "123456789",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://accounts.google.com/o/oauth2/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/avatar-importation%40example-5435816.iam.gserviceaccount.com"
  }
});

/**
 * @description Upload file into a bucket.
 * @param bucket (ex: avatar-importation)
 * @param file (ex: file.txt)
 * @returns {Promise<void>}
 */
export function upload(bucket: string, file: string): Promise<void> {
  return storage
    .bucket(bucket)
    .upload(file)
    .then(() => {
      console.log(
        `[com/gcs] - ${file} file has been successfully uploaded into ${bucket} bucket.`
      );
      return Promise.resolve();
    })
    .catch(e => {
      console.error(
        `[com/gcs] - error during ${file} upload into ${bucket} bucket:`,
        e
      );
      return Promise.reject(e);
    });
}

/**
 * @description Download file from bucket.
 * @param bucket (ex: avatar-importation)
 * @param filename (ex: file.txt)
 * @param destination (ex: ./local/path/to/file.txt)
 * @returns {Promise<void>}
 */
export function download(
  bucket: string,
  filename: string,
  destination: string
): Promise<void> {
  return storage
    .bucket(bucket)
    .file(filename)
    .download({ destination })
    .then(() => {
      console.log(
        `[com/gcs] - file ${filename} download from ${bucket} and saved to ${destination}.`
      );
      return Promise.resolve();
    })
    .catch(e => {
      console.error(
        `[com/gcs] - error during ${filename} download, from ${bucket}, saved to ${destination}:`,
        e
      );
      return Promise.reject(e);
    });
}

/**
 * @description Remove file from bucket.
 * @param bucket (ex: avatar-importation)
 * @param filename (ex: file.txt)
 * @returns {Promise<void>}
 */
export function remove(bucket: string, filename: string): Promise<void> {
  return storage
    .bucket(bucket)
    .file(filename)
    .delete()
    .then(() => {
      console.log(`[com/gcs] - file ${filename} removed from ${bucket}.`);
      return Promise.resolve();
    })
    .catch(e => {
      console.error(
        `[com/gcs] - error during ${filename} deleting, from ${bucket}:`,
        e
      );
      return Promise.reject(e);
    });
}

/**
 * @description Retrieve file informations.
 * @param bucket (ex: avatar-importation)
 * @param filename (ex: file.txt)
 * @returns {Promise<GcsInfo>}
 */
export function getFileInformations(
  bucket: string,
  filename: string
): Promise<GcsInfo> {
  return storage
    .bucket(bucket)
    .file(filename)
    .getMetadata()
    .then(([results]) => Promise.resolve(results))
    .catch(e => {
      console.error(
        `[com/gcs] - error during getting ${filename} information from ${bucket} bucket: `,
        e
      );
      return Promise.reject(e);
    });
}
