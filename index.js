import { createHash, createCipheriv, createDecipheriv } from "crypto";
var key = "ChuckN0rrisL1kesPur3D3PapaSuperKey"
let SECRET_KEY = createHash('md5').update(key, 'utf-8').digest('hex').toUpperCase();
var ENCODING = 'hex'
var text = "This is the text to cipher!"
let iv = new Buffer.alloc(16); // fill with zeros
console.log('iv=', iv);
var cipher = createCipheriv('aes-256-cbc', SECRET_KEY, iv)
var cryptedPassword = cipher.update(text, 'utf8',ENCODING)
cryptedPassword+= cipher.final(ENCODING)

var decipher = createDecipheriv('aes-256-cbc', SECRET_KEY, iv)
var decryptedPassword = decipher.update(cryptedPassword, ENCODING,'utf8')
decryptedPassword += decipher.final('utf8')


console.log("Crypted Text:", cryptedPassword)
console.log("Decrypted Text:", decryptedPassword)



//Output
// iv= <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
// Crypted Text: 5dfc6f5d903e309922fc9ed14e31744c692e0fd8f7f89bc765ebd3c07f473790
// Decrypted Text: This is the text to cipher!