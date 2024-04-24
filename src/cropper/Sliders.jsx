import { useImageCropContext } from '../providers/ImageCropProviders';
import {
  MinusIcon,
  PlusIcon
} from '@heroicons/react/24/solid';
import classNames from 'classnames';

// eslint-disable-next-line react/prop-types
export const ZoomSlider = ({ className }) => {
  const { zoom, setZoom, handleZoomIn, handleZoomOut, max_zoom, min_zoom, zoom_step } =
    useImageCropContext();

  return (
    <div className={classNames(className, 'flex items-center justify-center gap-2')}>
      <button className="p-1" onClick={handleZoomOut}>
        <MinusIcon className="text-gray-400 w-4" />
      </button>
      <input
        type="range"
        name="volju"
        min={min_zoom}
        max={max_zoom}
        step={zoom_step}
        value={zoom}
        onChange={e => {
          setZoom(Number(e.target.value));
        }}
      />
      <button className="p-1" onClick={handleZoomIn}>
        <PlusIcon className="text-gray-400 w-4" />
      </button>
    </div>
  );
};

