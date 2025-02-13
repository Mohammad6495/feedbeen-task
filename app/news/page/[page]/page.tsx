import { notFound } from "next/navigation";

import { getNews } from "../../lib";

import NewsList from "@/components/newsList";

export default async function Page({ params }: { params: { page: string } }) {
  const pageNumber = parseInt(params.page, 10);

  if (isNaN(pageNumber) || pageNumber < 1) {
    return notFound();
  }

  const pagesData = [];

  for (let i = 1; i <= pageNumber; i++) {
    const { news, nextPage } = await getNews({ page: i });

    pagesData.push({ news, nextPage });
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">News - Page {pageNumber}</h1>
      <NewsList initialData={pagesData}  />
    </div>
  );
}
