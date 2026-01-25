const base_url: String = "https://api.mangadex.org";

export async function getMangaList(params?: Record<string, string>) {
  const query = new URLSearchParams(params);

  query.set("limit", "20");          // always include limit
  query.append("includes[]", "cover_art"); // include cover art
  query.append("includes[]", "author");    // include author

  const res = await fetch(`${base_url}/manga?${query.toString()}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch manga list");
  }

  return res.json();
}


export async function getChapter(id: String) {
  return fetch(`${base_url}/chapter/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export async function findManga(id: String) {
  return fetch(`${base_url}/manga/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export async function getPopularManga(
  params: Record<string, string> = {}
) {
  const query = new URLSearchParams(params);

  // required defaults
  query.set("limit", "10");
  query.set("order[rating]", "desc");

  // includes
  query.append("includes[]", "cover_art");
  query.append("includes[]", "author");

  const response = await fetch(
    `${base_url}/manga?${query.toString()}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular manga");
  }

  return response.json();
}


export async function getCover(id: String, filename: String) {
  return fetch(`${base_url}/covers/${id}/${filename}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}


export async function getRatings(mangaId: string){
  return fetch(`${base_url}/statistics/manga/${mangaId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}


export async function getMangaDetails(mangaId: string) {
  const query = new URLSearchParams();

  // Include related info
  query.append("includes[]", "cover_art");
  query.append("includes[]", "author");
  query.append("includes[]", "artist");

  const response = await fetch(`${base_url}/manga/${mangaId}?${query.toString()}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch manga details");
  }

  const data = await response.json();
  return data;
}

