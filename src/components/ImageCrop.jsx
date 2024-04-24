import { useState } from "react";
import Modal from "../components/base/Modal";
import { readFile } from "../helpers/cropImage";
import ImageCropModalContent from "./ImageCropModalContent";
import { useImageCropContext } from "../providers/ImageCropProviders";
import Photo from "./Photobooth/Photo";
import Photo1 from "./Photobooth/Photo1";
import Photo2 from "./Photobooth/Photo2";

const ImageCrop = () => {
  const [openModal, setOpenModal] = useState(false);
  const [preview1, setPreview1] = useState(null);
  const [preview2, setPreview2] = useState(null);
  const [preview3, setPreview3] = useState(null);
  const [changeColor, setChangeColor] = useState(false);
  const { getProcessedImage, setImage, resetStates } = useImageCropContext();

  const handleDone = async () => {
    const avatar = await getProcessedImage();
    if (!preview1) {
      setPreview1(window.URL.createObjectURL(avatar));
    } else if (!preview2) {
      setPreview2(window.URL.createObjectURL(avatar));
    } else {
      setPreview3(window.URL.createObjectURL(avatar));
    }
    resetStates();
    setOpenModal(false);
  };

  const handleFileChangePhoto1 = async ({ target: { files } }) => {
    const file = files && files[0];
    const imageDataUrl = await readFile(file);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  const handleFileChangePhoto2 = async ({ target: { files } }) => {
    const file = files && files[0];
    const imageDataUrl = await readFile(file);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  const handleFileChangePhoto3 = async ({ target: { files } }) => {
    const file = files && files[0];
    const imageDataUrl = await readFile(file);
    setImage(imageDataUrl);
    setOpenModal(true);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="bg-purple-500">
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
    </div>
  );
};

export default ImageCrop;
