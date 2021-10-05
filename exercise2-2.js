const util = require('util');
const fs = require('fs');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const checkStat = util.promisify(fs.stat);

async function checkTree(dirPath){
    try{
        const files = await readDir(dirPath);
        if(!files) return;
        
        for(let file of files){
            const newPath = path.join(dirPath, file);
            const extName = path.extname(file);

            if(extName === '.js'){
                console.log(newPath);
            }

            !extName && (await checkStat(newPath)).isDirectory && await checkTree(newPath);
        }
    }
    catch(e){
        console.error(e);
    }
}

checkTree('./test');
