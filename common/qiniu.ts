import qiniu from 'qiniu'

const QINIU_OSS_BUCKET_NAME = process.env.QINIU_OSS_BUCKET_NAME
const accessKey = process.env.QINIU_OSS_ACCESSKEY
const secretKey = process.env.QINIU_OSS_SECRETKEY
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const bucketManager = new qiniu.rs.BucketManager(mac)

export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    bucketManager.listPrefix(
      QINIU_OSS_BUCKET_NAME,
      {
        limit: 999,
        prefix: '',
      },
      (err, content) => {
        if (err) {
          reject(err)
          return
        }
        resolve(
          content?.items
            ?.map((file) => {
              file.url =
                'https://ossblog.ishawn.wang/' + encodeURIComponent(file.key)
              file.name = file.key.replace(/\.[^/.]+$/, '')
              return file
            })
            .filter((file) => !file.name.startsWith('_'))
        )
      }
    )
  })
}
