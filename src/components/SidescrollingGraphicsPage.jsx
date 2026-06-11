import SidescrollingPhotoGallery from "./SidescrollingPhotoGallery";

const BASE = "https://jackweaklyportfolio.s3.us-east-2.amazonaws.com/New+Portfolio";

const graphicDesign = Array.from({ length: 15 }, (_, i) => ({
    src: `${BASE}/Graphic+design+portfolio/${i + 1}.png`,
    alt: `Graphic Design ${i + 1}`,
}));

export default function EcomPhotographs() {
    return (
          <div>
                <h2 className="text-4xl font-semibold mb-6">Graphics</h2>
                <SidescrollingPhotoGallery photos={graphicDesign} />
          </div>
        );
}</div>
