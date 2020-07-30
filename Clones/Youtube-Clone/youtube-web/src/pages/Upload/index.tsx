/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useCallback } from 'react';

import api from '~/services/api';

import { FileResponse, FileState } from './types';

const Upload: React.FC = () => {
  const [file, setFile] = useState({} as FileState);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files, name } = e.target;
      const targetFile = files ? files[0] : undefined;

      if (!targetFile) {
        return;
      }

      setFile({
        ...file,
        [name]: targetFile,
      });
    },
    [file]
  );

  const handleUpload = useCallback(() => {
    async function loadUpload() {
      if (!file.thumbmail) {
        alert('Selecione a thumbmail');
        return;
      }

      if (!file.video) {
        alert('Selecione o video');
        return;
      }

      const data = new FormData();

      data.append('relativePath', String(new Date().getTime()));
      data.append('video', file.video);
      data.append('thumb', file.thumbmail);

      const response = await api.post<FileResponse>('/videos', data);

      if (response.status === 200) {
        alert('Feito');

        return;
      }

      alert('Erro no upload');
    }

    loadUpload();
  }, [file]);

  return (
    <div>
      <label htmlFor="thumbmail">Thumbmail</label>
      <input type="file" onChange={handleFileChange} name="thumbmail" />

      <label htmlFor="video">Video</label>
      <input type="file" onChange={handleFileChange} name="video" />

      <button type="button" onClick={handleUpload} style={{ background: '#ccc' }}>
        Upload
      </button>
    </div>
  );
};

export default Upload;
