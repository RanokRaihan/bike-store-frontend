const FileUploader = () => {
  return (
    <div>
      <h1>This is FileUploader component</h1>
    </div>
  );
};

export default FileUploader;

// import { convertFileToUrl } from "@/lib/utils";
// import { Upload } from "lucide-react";
// import { useCallback } from "react";
// import { useDropzone } from "react-dropzone";
// type FileUploaderProps = {
//   files: File[] | undefined;
//   onChange: (files: File[]) => void;
// };

// const FileUploader = ({ files, onChange }: FileUploaderProps) => {
//   const onDrop = useCallback(
//     (acceptedFiles: File[]) => {
//       onChange(acceptedFiles);
//     },
//     [onChange]
//   );
//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <div {...getRootProps()} className="file-upload">
//       <input {...getInputProps()} />
//       {files && files.length > 0 ? (
//         <img
//           src={convertFileToUrl(files[0])}
//           width={1000}
//           height={1000}
//           alt="uploaded image"
//           className="max-h-[400px] overflow-hidden object-cover"
//         />
//       ) : (
//         <>
//           <Upload size={48} />
//           <div className="file-upload_label">
//             <p className="text-14-regular">
//               <span className="text-green-500">Click to upload</span> or drag
//               and drop
//             </p>
//             <p>SVG, PNG, JPG, Gif (max 800x400)</p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default FileUploader;
