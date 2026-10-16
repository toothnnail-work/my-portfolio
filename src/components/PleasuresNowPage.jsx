import SidescrollingPhotoGallery from "./SidescrollingPhotoGallery";

const BASE =
  "https://jackweaklyportfolio.s3.us-east-2.amazonaws.com/New+Portfolio";

const pleasuresNow = Array.from({ length: 4 }, (_, i) => ({
  src: `${BASE}/Pleasures+Now/${i + 1}.png`,
  alt: `Pleasures Now ${i + 1}`,
}));

export default function PleasuresNowPage() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6 ml-2">Pleasures Now</h2>
      <SidescrollingPhotoGallery photos={pleasuresNow} />
    </div>
  );
}
