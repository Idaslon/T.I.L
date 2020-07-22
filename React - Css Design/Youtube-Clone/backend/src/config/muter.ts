import fs from 'fs';
import multer from 'multer';
import { extname, resolve } from 'path';

import { StoreRequest as MulterRequest } from '~/app/controllers/FileController/types';

const uploadsPath = resolve(__dirname, '..', '..', 'tmp', 'uploads');

const multerConfig: multer.Options = {
  storage: multer.diskStorage({
    destination: uploadsPath,
    filename: (req: MulterRequest, file, cb) => {
      const extName = extname(file.originalname);
      const { relativePath } = req.body;

      const fullFileName = `${file.fieldname}${extName}`;
      const fullPath = resolve(uploadsPath, relativePath);

      if (!fs.existsSync(fullPath)) {
        if (file.filename === 'video') {
          return cb(new Error('Folder already exists'), '');
        }

        fs.mkdirSync(fullPath);
      }

      const newFileName = `/${relativePath}/${fullFileName}`;

      return cb(null, newFileName);
    },
  }),
};

export default multerConfig;
