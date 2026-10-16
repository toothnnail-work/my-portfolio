import SidescrollingPhotoGallery from "./SidescrollingPhotoGallery";

const BASE =
  "https://jackweaklyportfolio.s3.us-east-2.amazonaws.com/New+Portfolio";

const puppetTheater = Array.from({ length: 38 }, (_, i) => ({
  src: `${BASE}/Puppet+Theater/${i + 1}.png`,
  alt: `Puppet Theater ${i + 1}`,
}));

// Newest images (25 to 29) are shown first, then the original 1 to 18.
const shellCorpOrder = [
  25, 26, 27, 28, 29,
  ...Array.from({ length: 18 }, (_, i) => i + 1),
, 19, 20, 21, 22, 23, 24];
const shellCorp = shellCorpOrder.map((n) => ({
  src: `${BASE}/Shell+Corp/${n}.png`,
  alt: `Shell Corp ${n}`,
}));

const roseInGoodFaith = Array.from({ length: 8 }, (_, i) => ({
  src: `${BASE}/Rose+In+Good+Faith/${i + 1}.png`,
  alt: `Rose In Good Faith ${i + 1}`,
}));

// Newest images (18 to 20) are shown first, then the original 1 to 17.
const elizabethBayOrder = [
  18, 19, 20,
  ...Array.from({ length: 17 }, (_, i) => i + 1),
];
const elizabethBay = elizabethBayOrder.map((n) => ({
  src: `${BASE}/Elizabeth+Bay/${n}.png`,
  alt: `Elizabeth Bay ${n}`,
}));

export default function EcomPhotographs() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6 ml-2">Cut And Sew</h2>

      <h4 className="text-xl font-semibold mb-4 ml-2">Puppet Theater</h4>
      <SidescrollingPhotoGallery photos={puppetTheater} />

      <h4 className="text-xl font-semibold mb-4 ml-2">Shell Corp.</h4>
      <SidescrollingPhotoGallery photos={shellCorp} />

      <h4 className="text-xl font-semibold mb-4 ml-2">Rose In Good Faith</h4>
      <SidescrollingPhotoGallery photos={roseInGoodFaith} />

      <h4 className="text-xl font-semibold mb-4 ml-2">Elizabeth Bay ltd.</h4>
      <SidescrollingPhotoGallery photos={elizabethBay} />
    </div>
  );
}
