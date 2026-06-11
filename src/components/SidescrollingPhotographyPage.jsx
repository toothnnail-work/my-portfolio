import SidescrollingPhotoGallery from "./SidescrollingPhotoGallery";

const bookOne = [
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/BOOK/cover.jpg",
    alt: "Cover of Book",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/BOOK/planet.jpg",
    alt: "Page 1",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/BOOK/page2.jpg",
    alt: "Page 2",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/BOOK/WEAKLY.jpg",
    alt: "Page 3",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/BOOK/thankyee.jpg",
    alt: "Page 4",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/BOOK/backcover.jpg",
    alt: "back Cover",
  },
];

const bookTwo = [
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book2/COVER.jpg",
    alt: "Cover of Book",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book2/page1.jpg",
    alt: "Page 1",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book2/page2.jpg",
    alt: "Page 2",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book2/jackitweakly.jpg",
    alt: "Page 3",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book2/shitstroker.jpg",
    alt: "Page 4",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book2/backcover.jpg",
    alt: "Back Cover",
  },
];

const bookThree = [
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/cover.jpg",
    alt: "Cover of Book",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/page1.jpg",
    alt: "Page 1",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/page2.jpg",
    alt: "Page 2",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/page3.jpg",
    alt: "Page 3",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/page4.jpg",
    alt: "Page 4",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/backcover.jpg",
    alt: "back Cover",
  },
];

const Ebay = [
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/cover.jpg",
    alt: "Cover of Book",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/page1.jpg",
    alt: "Page 1",
  },
  {
    src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/page2.jpg",
    alt: "Page 2",
  },
];

const allBooks = [...bookOne, ...bookTwo, ...bookThree];

export default function EcomPhotographs() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">Cut And Sew</h2>

      <h4 className="text-xl font-semibold mb-4">Puppet Theater</h4>
      <SidescrollingPhotoGallery photos={bookOne} />

      <h4 className="text-xl font-semibold mb-4">Shell Corp.</h4>
      <SidescrollingPhotoGallery photos={bookTwo} />

      <h4 className="text-xl font-semibold mb-4">Rose In Good Faith</h4>
      <SidescrollingPhotoGallery photos={bookThree} />

      <h4 className="text-xl font-semibold mb-4">Elizabeth Bay ltd.</h4>
      <SidescrollingPhotoGallery photos={Ebay} />
    </div>
  );
}
