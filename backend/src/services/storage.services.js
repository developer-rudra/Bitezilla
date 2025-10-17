const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC,
    privateKey : process.env.IMAGEKIT_PRIVATE,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});


async function uploadFile(file, fileName){
    const result = await imagekit.upload({
        file: file,
        fileName: fileName
    })
    return result;
}

module.exports = {
    uploadFile
}