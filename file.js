const fsextra = require('fs-extra');
const path = require('path')
const dir = 'folder1'
const file = 'file.txt'
const dir2 = 'folder2'
const dir3 = 'folder3'


fsextra.mkdirpSync(dir);

fsextra.createFileSync(path.join(dir, file))

fsextra.mkdirpSync(dir2);

fsextra.moveSync(path.join(dir, file), path.join(dir2, file))

fsextra.mkdirpSync(dir3);

fsextra.copySync(path.join(dir2,file), path.join(dir3, file))

fsextra.removeSync(path.join(dir2,file))
fsextra.removeSync(path.join(dir3,file))

fsextra.removeSync(dir)
fsextra.removeSync(dir2)
fsextra.removeSync(dir3)



