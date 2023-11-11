import { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { SimpleDropzone } from "simple-dropzone";

export default function FileInput(): JSX.Element {
  const inputRef = useRef(null);
  const dropzoneRef = useRef(null);

  const upload = (file: File) => {
    console.dir(file);
  };

  useEffect(() => {
    const dropCtrl = new SimpleDropzone(dropzoneRef.current, inputRef.current);
    dropCtrl.on("drop", ({ files }: { files: Map<number, File> }) => {
      for (const [_key, value] of files) {
        upload(value);
      }
    });
  }, []);

  return (
    <div class="container">
      <div id="dropzone" ref={dropzoneRef}>
        <label class="flex justify-center w-full h-32 px-4 transition bg-white border-4 border-gray-300 border-dashed rounded-lg hover:border-gray-600">
          <div class="flex flex-col items-center m-2">
            <div>
            </div>
            <div>
              <span class="font-medium text-gray-600">
                Drop or Select
              </span>
            </div>
          </div>
          <input type="file" ref={inputRef} class="hidden" multiple />
        </label>
      </div>
    </div>
  );
}
