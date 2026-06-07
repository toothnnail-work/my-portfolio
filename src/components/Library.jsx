import Book from "./Book";

const books = [
  {
    bookPhoto: {
      src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/BOOK/cover.jpg",
      alt: "Cover of Book 3",
    },
    bookPagePhotos: [
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
    ],
  },
  {
    bookPhoto: {
      src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book2/COVER.jpg",
      alt: "Cover of Book 2",
    },
    bookPagePhotos: [
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
    ],
  },
  {
    bookPhoto: {
      src: "https://jack-weakly-portfolio-assets.s3.us-east-2.amazonaws.com/Book3/cover.jpg",
      alt: "Cover of Book 3",
    },
    bookPagePhotos: [
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
    ],
  },
  // add more books here...
];

export default function Library() {
  return (
    <div class="px-5 my-5">
      <h2 className="text-4xl font-semibold mb-6">LIBRARY</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
        {books.map((book, i) => (
          <Book
            key={i}
            bookCover={book.bookPhoto}
            bookPages={book.bookPagePhotos}
          />
        ))}
      </div>
      <p class="mb-12 text-center">Click a damned book, chum.</p>
    </div>
  );
}
