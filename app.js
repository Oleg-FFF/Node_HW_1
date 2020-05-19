function changer(folder) {
    const path = require('path');
    const fs = require('fs');
    const targetFolder = path.join(__dirname, folder);
    console.log(targetFolder);
    fs.readdir(path.join(targetFolder), (err, folders) => {
        console.log(folders);
        if(folders.length !== 2) {
            console.log('It should be only two folders')
        } else {
            fs.readdir(path.join(targetFolder, folders[0]), (err, files) => {
                console.log(files);
                for (let file of files) {
                    fs.rename(path.join(targetFolder, folders[0], file), path.join(targetFolder, folders[1], file), err => {console.log(err)})
                }
            });
            fs.readdir(path.join(targetFolder, folders[1]), (err, files) => {
                console.log(files);
                for (let file of files) {
                    fs.rename(path.join(targetFolder, folders[1], file), path.join(targetFolder, folders[0], file), err => {console.log(err)})
                }
            });
    }});
}
changer('groups');
