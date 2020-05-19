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
            const [first, second] = folders;
            fs.readdir(path.join(targetFolder, first), (err, files) => {
                console.log(files);
                for (let file of files) {
                    fs.rename(path.join(targetFolder, first, file), path.join(targetFolder, second, file), err => {console.log(err)})
                }
            });
            fs.readdir(path.join(targetFolder, second), (err, files) => {
                console.log(files);
                for (let file of files) {
                    fs.rename(path.join(targetFolder, second, file), path.join(targetFolder, first, file), err => {console.log(err)})
                }
            });
    }});
}
changer('groups');
