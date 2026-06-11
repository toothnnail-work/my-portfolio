import SidescrollingPhotoGallery from "./SidescrollingPhotoGallery";

const Ebay = [
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/big_high_wall.svg",
    alt: "Woody Guthry lyric from This Land Was Made For You And Me, symbolizing what that song is really about",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Haiti.svg",
    alt: "American Flag with SCMT Have No Fear staple graphic and outiline of Haiti in the flag",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/calltoday.svg",
    alt: "Don't be an asshole CALL TODAY",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/Sandiszworld.svg",
    alt: "The flag of Sandiszworld featuring the SCMT star logo",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/diefighting.svg",
    alt: "You either die fighting! Or you die crying! It's your choice!",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/havetolose.svg",
    alt: "patch that reads I wanna be surrounded by assholes in american flag SVG",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/svgs/LAmourEstBleu.svg",
    alt: "Puppet Theater Act IV L'Amour est Bleu main cursive graphic",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/pngs/kumri_graphic.png",
    alt: "Graphic featuring Kumri Akhmedova, Hero of Socialist Labor",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/pngs/i_love_radio.png",
    alt: "Jacket concept featuring Puppet Theater signature cursive logo and I Love The Radio patches",
  },
  {
    src: "https://sthieme-portfolio-assets.s3.us-east-2.amazonaws.com/graphics/pngs/canttakeit.png",
    alt: "T Shirt concept featuring American Flag, a true statement, and some children laughing at the ones who don't think the statement is true",
  },
];

export default function EcomPhotographs() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6">Graphics</h2>
      <SidescrollingPhotoGallery photos={Ebay} />
    </div>
  );
}
