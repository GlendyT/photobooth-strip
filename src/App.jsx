import ImageCrop from './components/ImageCrop';
import ImageCropProvider from './providers/ImageCropProviders';

const App = () => {
  return (
    <div className="relative min-h-screen px-6 pt-1 max-sm:justify-center max-sm:m-0 max-sm:px-4 max-sm:py-2 bg-backg bg-no-repeat bg-cover bg-center max-sm:bg-left">
      <ImageCropProvider>
        <ImageCrop/>
      </ImageCropProvider>
    </div>
  );
};

export default App;
