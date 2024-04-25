import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import Modal from "../components/base/Modal";
import { readFile } from "../helpers/cropImage";
import ImageCropModalContent from "./ImageCropModalContent";
import { useImageCropContext } from "../providers/ImageCropProviders";
import Photo from "./Photobooth/Photo";
import Photo1 from "./Photobooth/Photo1";
import Photo2 from "./Photobooth/Photo2";
import Button from "./Button";
import Loader from "./Loader/Loader";

const ImageCrop = () => {
  const [openModal, setOpenModal] = useState(false);
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [preview3, setPreview3] = useState(null);
  const [changeColor, setChangeColor] = useState(false);
  const [imageSaved, setImageSaved] = useState(false);
  const [photo2Complete, setPhoto2Complete] = useState(false);
  const elementRef = useRef(null);
  const { getProcessedImage, setImage, resetStates } = useImageCropContext();

  useEffect(() => {
    if (imageSaved) {
      const timer = setTimeout(() => {
        setImageSaved(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [imageSaved]);

  const handleDone = async () => {
    const avatar = await getProcessedImage();
    const previews = [preview1, preview2, preview3];
    const index = previews.findIndex((preview) => !preview);

    if (index !== -1) {
      previews[index] = window.URL.createObjectURL(avatar);
      setPreview1(previews[0]);
      setPreview2(previews[1]);
      setPreview3(previews[2]);
    }

    resetStates();
    setOpenModal(false);
  };

  const handleFileChangePhoto1 = async ({ target: { files } }) => {
    const file1 = files && files[0];
    const imageDataUrl = await readFile(file1);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  const handleFileChangePhoto2 = async ({ target: { files } }) => {
    const file2 = files && files[0];
    const imageDataUrl = await readFile(file2);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  const handleFileChangePhoto3 = async ({ target: { files } }) => {
    const file3 = files && files[0];
    const imageDataUrl = await readFile(file3);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  const resetPhotos = () => {
    setPreview1(null);
    setPreview2(null);
    setPreview3(null);
    setChangeColor(false);
    setImageSaved(false);
  };

  useEffect(() => {
    if (preview3) {
      setPhoto2Complete(true);
    } else {
      setPhoto2Complete(false);
    }
  }, [preview3]);

  const htmlToImageConvert = useCallback(() => {
    if (!elementRef.current) return;
    setImageSaved(true);

    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "PhotoBoothFESTA";
        link.href = dataUrl;

        link.addEventListener("click", () => {
          setImageSaved(true);
        });

        link.click();
      })
      .catch((err) => {
        console.log(err);
        setImageSaved(false);
      });
  }, [elementRef]);

  return (
    <div className="flex flex-col items-center ">
      <div className="bg-purple-500" ref={elementRef}>
        <div className="pt-4 max-xl:mx-auto m-auto px-2  bg-purple-500">
          <Photo
            handleFileChange={handleFileChangePhoto1}
            preview={preview1}
            changeColor={changeColor}
          />
          <Photo1
            handleFileChange={handleFileChangePhoto2}
            preview={preview2}
            changeColor={changeColor}
          />
          <Photo2
            handleFileChange={handleFileChangePhoto3}
            preview={preview3}
            changeColor={changeColor}
          />
        </div>

        <Modal open={openModal} handleClose={() => setOpenModal(false)}>
          <ImageCropModalContent
            handleDone={handleDone}
            handleClose={() => setOpenModal(false)}
          />
        </Modal>
      </div>
      <Button
        htmlToImageConvert={htmlToImageConvert}
        photo2Complete={photo2Complete}
        resetPhotos={resetPhotos}
      />
      {imageSaved && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ImageCrop;
