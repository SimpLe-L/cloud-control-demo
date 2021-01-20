import { dateFormat, dateToUnix } from './utils';
var crypto = require('crypto');
var cryptoJS = require('crypto-js');
// var buffer = require('buffer');
const buffer = require('buffer');
const utf8 = require('utf8');
// const buffer = new Buffer()

export default function() {
  // 参数组版本号
  const version = dateFormat('YYYY-mm-dd', new Date());
  // 访问资源
  const res = 'products/628579624';
  // 访问过期时间 expirationTime
  const et = dateToUnix();
  // 签名方法
  const method = crypto.Hash.SHA256;
  console.log(crypto)

  // 签名结果字符串
  // let sign = new Buffer(hmac_ < method > (base64decode(accessKey), utf - 8(StringForSignature)))

  let stringForSignature = et + '\n' + method + '\n' + res + '\n' + version,
    stringForSignature = utf8.encode(stringForSignature);

  let accessKey = 'fK1g3C95zN979+UZn+ON9k5YleKhG4suZ4nwzHBb1lo=',
    accessKey = Buffer.from(accessKey, 'utf8').toString('base64');
  console.log(accessKey)
  const parseAccessKey = cryptoJS.enc.Base64.parse(accessKey);
  console.log(parseAccessKey)

  // 生成hmac
  const hmac = crypto.createHmac(method, Buffer.from(accessKey, 'utf8').toString('base64'));
  //   const hmac = cryptoJS.HmacSHA256(method, parseAccessKey) + ''
  console.log(hmac)
  // 求出签名
  //   const sign = hmac.sum(utf8.encode(stringForSignature)).toString(buffer.Encoding.Base64)
  const sign = Buffer.from(hmac, stringForSignature).toString('base64');
  console.log(sign)

  // token拼接
  const tokenVersion = tokenValueEncode(version);
  const tokenRes = tokenValueEncode(res);
  const tokenEt = tokenValueEncode(et + '');
  const tokenMethod = tokenValueEncode(method);
  const tokenSign = tokenValueEncode(sign);
  const token = `version=${tokenVersion}&res=${tokenRes}&et=${tokenEt}&method=${tokenMethod}&sign=${tokenSign}`;
  return token;
}

const tokenValueEncode = value => {
  let newValue = ''
  for (let i = 0; i < value.length; i++) {
    let val = value[i]
    if (val === '+') {
      val = '%2B';
    } else if (val === ' ') {
      val = '%20';
    } else if (val === '/') {
      val = '%2F';
    } else if (val === '?') {
      val = '%3F';
    } else if (val === '%') {
      val = '%25';
    } else if (val === '#') {
      val = '%23';
    } else if (val === '&') {
      val = '%26';
    } else if (val === '=') {
      val = '%3D';
    }
    newValue += val;
  }
  return newValue;
}
