import PhotoGrid from "./PhotoGrid";

const BASE = "https://jackweaklyportfolio.s3.us-east-2.amazonaws.com/New+Portfolio";

const photos = Array.from({ length: 42 }, (_, i) => ({
    src: `${BASE}/Misc/${i + 1}.png`,
    alt: `Misc ${i + 1}`,
}));

export default function PhotographyGridPage() {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-6 ml-2">Miscellanious</h2>
      <PhotoGrid photos={photos} />
    </div>
  );
}
