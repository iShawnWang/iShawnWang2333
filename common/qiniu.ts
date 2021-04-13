import qiniu from 'qiniu'

const QINIU_OSS_BUCKET_NAME = 'ossblog'
const accessKey = 'b9uKha4dnRpv4JAuYj7a5O6S5X1tJSzG78ddVeq0'
const secretKey = 'iuglpy66Ny8yJQ-575IMviMYRnzZpw8XwtJIV1Xr'
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
              file.name = file.key
              return file
            })
            .filter((file) => !file.name.startsWith('_'))
        )
      }
    )
  })
}
