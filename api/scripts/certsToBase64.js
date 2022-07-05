const fs = require('fs')
const path = require('path')

const keyFilePath = 'certs/key.pem'
const keyBase64Text = fs
  .readFileSync(path.resolve(keyFilePath))
  .toString('base64')
console.log('key.pem base64')
console.log(keyBase64Text)

const certFilePath = 'certs/cert.pem'
const certBase64Text = fs
  .readFileSync(path.resolve(certFilePath))
  .toString('base64')
console.log('cert.pem base64')
console.log(certBase64Text)
