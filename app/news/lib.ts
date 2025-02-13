import type { News } from "@/types";

async function _fetch(url: string) {
  const api = "https://feedbeen.com/api";
  const endpoint = api + url;

  return await fetch(endpoint, {
    next: {
      revalidate: 6000,
    },
  });
}

async function getNews({ page = 1 }: { page?: number } = {}) {
  const response = await _fetch(`/news/catalog?page=${page}`);
  const data = (await response.json()) as News;

  return {
    news: data.results.data, // لیست اخبار
    nextPage: data.results.next_page_url ? page + 1 : null, // شماره صفحه بعدی
  };
}

export { getNews };
