
export function getMangaTitle(titleObj: { [lang: string]: string }): string {
  // Preferred language order
  const preferred = ["en", "ja", "ko-ro", "ja-ro"];

  for (const lang of preferred) {
    if (titleObj[lang]) {
      return titleObj[lang];
    }
  }

  // Fallback: pick first available title
  const keys = Object.keys(titleObj);
  if (keys.length > 0) return titleObj[keys[0]];

  // Fallback text
  return "Untitled";
}

export function getMangaDesc(descObj: { [lang: string]: string }): string {
  // Preferred language order
  const preferred = ["en", "ja", "ko-ro", "ja-ro"];

  for (const lang of preferred) {
    if (descObj[lang]) {
      return descObj[lang];
    }
  }

  const keys = Object.keys(descObj);
  if (keys.length > 0) return descObj[keys[0]];

  // Fallback text
  return "No description";
}

export function formatTimeAgo(dateString: string): string {
  const now = new Date();
  const past = new Date(dateString);

  const diffMs = now.getTime() - past.getTime();
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 60) return `${diffSec}sec`;

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m`;

  const diffHrs = Math.floor(diffMin / 60);
  if (diffHrs < 24) return `${diffHrs}hrs`;

  const diffDays = Math.floor(diffHrs / 24);
  return `${diffDays}d`;
}

export function getCoverUrl(manga: any) {
  // Find the cover_art relationship
  const coverRel = manga.relationships.find(
    (rel: any) => rel.type === "cover_art"
  );

  if (!coverRel || !coverRel.attributes?.fileName) return null;

  const fileName = coverRel.attributes.fileName;

  // Construct the URL with size suffix
  return `https://uploads.mangadex.org/covers/${manga.id}/${fileName}`;
}

export const contentRatings = {
  safe: { label: "Safe", color: "bg-green-500 " },
  suggestive: { label: "Suggestive", color: "bg-yellow-500" },
  erotica: { label: "Erotica", color: "bg-red-500 " },
};


export function formatCount(num: number): string {
  if (num < 1000) return num.toString();

  return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
}





