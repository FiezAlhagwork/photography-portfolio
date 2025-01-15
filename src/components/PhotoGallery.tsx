import  { useState, useCallback, useEffect } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";


// تعريف نوع الصورة Photo
interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: "./headar1.jpg", alt: "Photo 1" },
  { id: 2, src:"./headar2.jpg", alt: "Photo 2" },
  { id: 3, src:"./headar3.jpg", alt: "Photo 3" },
  { id: 4, src:"./headar4.jpg", alt: "Photo 4" },
  { id: 5, src:"./headar1.jpg", alt: "Photo 5" },
  { id: 6, src: "./headar2.jpg", alt: "Photo 6" },
  { id: 7, src:"./headar4.jpg", alt: "Photo 4" },
  { id: 8, src:"./headar1.jpg", alt: "Photo 5" },
  { id: 9, src: "./headar2.jpg", alt: "Photo 6" },
];


export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null); // الحالة لتحديد الصورة
  const [isOpen, setIsOpen] = useState<boolean>(false); // الحالة لفتح/إغلاق النافذة

  // فتح النافذة المنبثقة مع تحديد الصورة
  const openModal = (photo: Photo): void => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  // إغلاق النافذة المنبثقة
  const closeModal = (): void => {
    setSelectedPhoto(null);
    setIsOpen(false);
  };

  // الانتقال إلى الصورة التالية
  const showNext = useCallback((): void => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
  }, [selectedPhoto]);

  // الانتقال إلى الصورة السابقة
  const showPrevious = useCallback((): void => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((photo) => photo.id === selectedPhoto.id);
    const previousIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[previousIndex]);
  }, [selectedPhoto]);

  // إضافة مستمع للأزرار في لوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (!isOpen) return;

      switch (event.key) {
        case "ArrowRight":
          showNext();
          break;
        case "ArrowLeft":
          showPrevious();
          break;
        case "Escape":
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, showNext, showPrevious]);

  return (
    <div className="container">
      {/* عرض الصور في شبكة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="cursor-pointer"
            onClick={() => openModal(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-[270px] rounded-lg shadow-md object-fill"
            />
          </div>
        ))}
      </div>

      {/* النافذة المنبثقة لعرض الصورة */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Photo Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center  rounded-lg shadow-2xl p-4 max-w-3xl mx-auto">
          <button
            className="absolute top-7 right-7 bg-Grey hover:bg-gray-200 text-Black rounded-full p-2 shadow-md"
            onClick={closeModal}
          >
            <IoMdClose size={22} />
          </button>

          {selectedPhoto && (
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full max-h-[70vh] object-contain rounded-lg mb-4"
            />
          )}

          <div className="flex space-x-4">
            <button
              className="bg-Yellow  text-Black px-4 py-2 rounded-lg shadow-lg font-Montserrat font-medium"
              onClick={showPrevious}
            >
              Prev
            </button>
            <button
              className="bg-Yellow text-Black px-4 py-2 rounded-lg shadow-lg font-Montserrat font-medium"
              onClick={showNext}
            >
              Next
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
