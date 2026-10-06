import { mkdir, writeFile } from "node:fs/promises";
import { metadata } from "./prepare-assets.mjs";

const selections = {
  hero: "File:Dakak Beach Resort.jpg",
  dakak: "File:Dakak Park & Beach Resort.jpg",
  rizal: "File:Rizal Shrine at Dapitan City.jpg",
  aliguay: "File:Aliguay Island Sunset.jpg",
  boulevard: "File:The boulevard esplanade.jpg",
  linabo: "File:Linabo Peak Entrance.jpg",
  church: "File:St. James the Greater Church, Dapitan City (Features) 01.JPG",
  plaza: "File:Relief Map of Mindanao by Jose Rizal in Dapitan City.jpg",
  waterfall: "File:Kawasan Falls, Cebu, Philippines1.jpg",
  family: "File:Enchanted Kingdom Wheel of Fate (C. Agustin pic) - Flickr.jpg",
  forest: "File:Forest road in Bohol, Philippines.jpg",
};
const notes = {
  waterfall:
    "Kawasan Falls in Cebu. An illustrative Philippine nature photo, not a photograph of Sungkilaw Falls.",
  family:
    "Enchanted Kingdom in Laguna. An illustrative Philippine family attraction photo, not a photograph of Gloria’s Fantasyland.",
  forest:
    "Forest road in Bohol. An illustrative Philippine nature photo, not a photograph of Cogon Ecotourism Park.",
};
const photos = await metadata({ titles: Object.values(selections).join("|") });
await mkdir("public/images", { recursive: true });
const credits = {};
for (const [key, title] of Object.entries(selections)) {
  const photo = photos.find((p) => p.title === title);
  if (!photo || (!photo.licenseUrl && photo.license !== "Public domain"))
    throw new Error(`Unverified license: ${title}`);
  let response;
  for (let attempt = 0; attempt < 3; attempt++) {
    response = await fetch(photo.url, {
      headers: { "User-Agent": "LakbayZaNorteStudentProject/1.0" },
      signal: AbortSignal.timeout(45000),
    });
    if (response.ok) break;
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
  if (!response.ok)
    throw new Error(`Image failed: ${key} (${response.status})`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (!response.headers.get("content-type")?.startsWith("image/"))
    throw new Error(`Not an image: ${key}`);
  await writeFile(`public/images/${key}.jpg`, bytes);
  credits[key] = {
    ...photo,
    file: `/images/${key}.jpg`,
    note: notes[key] || "",
    modifications:
      "Resized and displayed with responsive crops. The photograph retains its stated license.",
  };
  console.log(
    `${key}: ${Math.round(bytes.length / 1024)} KB · ${photo.license}`,
  );
  await new Promise((resolve) => setTimeout(resolve, 1200));
}
await writeFile(
  "src/data/image-credits.json",
  JSON.stringify(credits, null, 2) + "\n",
);
console.log("All photos and credits saved locally.");
