// Maintenance utility: fetch openly licensed, geographically verified photos.
// Not required for installation, development, or deployment; photos are committed.
import { mkdir, writeFile } from "node:fs/promises";

const queries = [
  "Dakak Park Beach Resort",
  "Dapitan Dakak from air",
  "Rizal Shrine Dapitan",
  "Aliguay Island",
  "Sungkilaw Falls",
  "Gloria Fantasyland",
  "Dipolog Boulevard",
  "Linabo Peak",
  "Cogon Ecotourism Park",
  "Dapitan St James Church",
  "Dapitan Relief Map",
];
const clean = (value = "") =>
  value
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .trim();
const headers = {
  "User-Agent": "LakbayZaNorteStudentProject/1.0 (educational tourism website)",
};
export async function metadata(parameters) {
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.search = new URLSearchParams({
    action: "query",
    format: "json",
    prop: "imageinfo",
    iiprop: "url|extmetadata",
    iiurlwidth: "1600",
    ...parameters,
  });
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`Wikimedia metadata: ${response.status}`);
  const result = await response.json();
  return Object.values(result.query?.pages || {})
    .filter((p) => p.imageinfo)
    .map((p) => {
      const info = p.imageinfo[0],
        meta = info.extmetadata;
      return {
        title: p.title,
        url: info.thumburl || info.url,
        source: info.descriptionurl,
        author: clean(meta.Artist?.value),
        license: meta.LicenseShortName?.value,
        licenseUrl: meta.LicenseUrl?.value,
        description: clean(meta.ImageDescription?.value),
      };
    });
}
if (process.argv.includes("--discover")) {
  for (const query of queries) {
    try {
      console.log(
        JSON.stringify({
          query,
          images: await metadata({
            generator: "search",
            gsrsearch: query,
            gsrnamespace: "6",
            gsrlimit: "3",
          }),
        }),
      );
    } catch (error) {
      console.log(JSON.stringify({ query, error: error.message }));
    }
  }
}
export async function downloadPhoto(key, title) {
  const [info] = await metadata({ titles: title });
  if (!info?.licenseUrl) throw new Error(`Missing license for ${title}`);
  const response = await fetch(info.url, { headers });
  if (!response.ok) throw new Error(`Image ${key}: ${response.status}`);
  await mkdir("public/images", { recursive: true });
  await writeFile(
    `public/images/${key}.jpg`,
    Buffer.from(await response.arrayBuffer()),
  );
  return {
    ...info,
    file: `/images/${key}.jpg`,
    modifications:
      "Resized by Wikimedia; displayed with responsive crops. The photograph retains its stated license.",
  };
}
