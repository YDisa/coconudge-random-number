import * as fs from 'fs'
import * as crypto from 'crypto'

function getRandomUsers(n:number) {
  let txt = "";
  for(let s =0; s <= n; s++){
    txt += `\t${Math.floor(Math.random() * 50) + 1}`
  }
  return txt;
}

const stream = fs.createWriteStream("./users.txt");
stream.once("open", (fd) => {
  for(let a = 0; a <= 500000; a++){
    stream.write(getRandomUsers(Math.floor(Math.random() * 10) + 3))
    stream.write("\n")
  }
  
  stream.end()
})
