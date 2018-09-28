// @flow
export type GcsInfo = {
  name: string,
  bucket: string,
  storageClass: string,
  selfLink: string,
  id: string,
  size: string,
  updated: string,
  generation: string,
  metageneration: string,
  etag: string,
  owner: string,
  component_count: string,
  crc32c: string,
  md5Hash: string,
  cacheControl: string,
  contentType: string,
  contentDisposition: string,
  contentEncoding: string,
  contentLanguage: string,
  metadata: string,
  mediaLink: string
};

export type ParseDownloaderInfo = {
  name: string,
  filename: string,
  email: string,
  shortcut: string
};
