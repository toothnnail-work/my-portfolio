import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

export default function Book({ bookCover, bookPages }) {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Book Cover (clickable) */}
      <div className="flex justify-center mb-16 w-full">
        <div className="w-full flex justify-center">
          <img
            src={bookCover.src}
            alt={bookCover.alt}
            onClick={() => setOpen(true)}
            className="cursor-pointer object-contain max-h-[80vh] border border-black dark:border-white rounded-2xl"
          />
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✕
          </button>
          {/* Flipbook container */}
          <div
            className="w-full mx-10 flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <HTMLFlipBook
              width={isMobile ? 300 : 480}
              height={isMobile ? 400 : 683}
              size="stretch"
              minWidth={300}
              maxWidth={isMobile ? 350 : 480}
              maxHeight={isMobile ? 500 : 683}
              drawShadow={true}
              flippingTime={800}
              usePortrait={isMobile}
              useMouseEvents={true}
              responsive={true}
              showCover={true}
              style={{ width: "100%", height: "auto" }}
            >
              {bookPages.map((photo, i) => (
                <div
                  key={i}
                  className="border border-black rounded-2xl bg-white dark:bg-neutral-800 flex items-center justify-center"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt || `Book page ${i + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      )}
    </>
  );
}
