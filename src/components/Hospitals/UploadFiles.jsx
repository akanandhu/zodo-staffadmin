import React from "react";
import Dropzone from "react-dropzone";

function UploadFiles() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section className="hospital-file-upload">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="pt-2">Drag and Drop to Upload or <span className="text-primary">Browse</span></p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default UploadFiles;
