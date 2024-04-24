import EasyCropper from 'react-easy-crop';
import { useImageCropContext } from '../providers/ImageCropProviders';

const Cropper = () => {
  const { image, zoom, setZoom, crop, setCrop, onCropComplete } =
    useImageCropContext();

  return (
    <EasyCropper
      image={image || undefined}
      crop={crop}
      zoom={zoom}
      aspect={1}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
      showGrid={false}
      cropSize={{ width: 185, height: 185 }}
      style={{
        containerStyle: {
          height: 220,
          width: 220,
          top: 8,
          bottom: 8,
          left: 8,
          right: 8
        }
      }}
    />
  );
};

export default Cropper;
