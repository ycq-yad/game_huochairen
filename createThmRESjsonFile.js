const path = require("path");
var fs = require("fs");

console.log(__dirname);
var dir = __dirname;
var dirc = dir.split("\\");
dirc = dirc[dirc.length - 1];
console.log(dirc);

var dirs = [];
var pathN = __dirname;
pathN = pathN;

var jsonThmUrlArr = [];//jsonPath
var jsonThmKeyValue = [];//jsonKeyValue


async function addKeyStr(filePath) {
    return new Promise((resolve) => {
        fs.readFile("bin/" + filePath, function (err, data) {
            if (err) {
                console.log("readFile error", err);
                resolve();
                return
            }
            let jsonStr = data.toString();
            var a = /"/g;
            jsonStr = jsonStr.replace(a, '\\"');
            let keyValueStr = "\"" + filePath + "\":\"" + jsonStr + "\"";
            jsonThmKeyValue.push(keyValueStr);
            resolve();
        });
    });
}

async function createThmJSONArr(pathN, prefix) {
    return new Promise((resolve) => {
        fs.readdir(pathN, function (err, files) {
            if (err) {
                console.log("皮肤文件夹 skins 不存在!!!");
                return
            }
            var dirs = [];
            (async function iterator(i) {
                if (i == files.length) {
                    // console.log("创建皮肤json文件结束!");
                    // console.log(jsonThmUrlArr);
                    resolve();
                    return
                }
                var tempStr = path.join(pathN, files[i]);
                // console.log(tempStr);
                await fs.stat(tempStr, async function (err, data) {
                    if (data.isFile()) {
                        dirs.push(files[i]);
                        let file = files[i];
                        //
                        console.log(file);
                        let pathThmUrl = "bin" + prefix + "/" + file;
                        pathThmUrl = pathThmUrl.replace("bin/", "");
                        jsonThmUrlArr.push(pathThmUrl);
                        await addKeyStr(pathThmUrl);
                    } else if (data.isDirectory()) {
                        let file = files[i];
                        // console.log("当前是文件夹--" + file);
                        await createThmJSONArr(pathN + "\\" + file, prefix + "/" + file);
                    }
                    iterator(i + 1);
                });
            })(0);
        });
    });
}


async function removeFile(filepath) {
    return new Promise((resolve) => {
        fs.unlink(filepath, function (err) {
            if (err) {
                throw err;
            }
            console.log('文件:' + filepath + '删除成功！');
            resolve();
        });
    });
}



//写入文件
async function writeFile(PathN, fileThmPath) {
    await createThmJSONArr(pathN + "\\bin\\skins", "/skins");
    await createThmJSONArr(pathN + "\\bin\\levels", "/levels");

    // console.log(jsonThmUrlArr);
    let dataStr = "{\"thms\":[";
    for (let i = 0, len = jsonThmUrlArr.length; i < len; i++) {
        dataStr += "\"" + jsonThmUrlArr[i] + "\"";
        if (i < len - 1) {
            dataStr += ",";
        }
    }
    dataStr += "],\"contents\":{";
    //contents
    for (let i = 0, len = jsonThmKeyValue.length; i < len; i++) {
        dataStr += jsonThmKeyValue[i];
        if (i < len - 1) {
            dataStr += ",";
        }
    }
    dataStr += "}}";

    // console.log(dataStr);
    fs.writeFile(fileThmPath, dataStr, { 'flag': 'a' }, function (err) {
        if (err) {
            throw err;
        }
        console.log('写文件完成!');
    });
    // console.log("异步写文件完成");
}

async function run(pathN, fileThmPath) {
    return new Promise((resolve, reject) => {
        fs.access(fileThmPath, async (err) => {
            if (err) {
                reject(err.message);
                await writeFile(pathN, fileThmPath);
            } else {
                resolve('existed');
                await removeFile(fileThmPath);
                await writeFile(pathN, fileThmPath);
            }
        });
    });
}

var fileThmPath = "./bin/resource/default.thm.json";

run(pathN, fileThmPath);




