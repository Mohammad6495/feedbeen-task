export const revalidate = 1;

import NewsList from "@/components/newsList";
import { title } from "@/components/primitives";

export default async function Page() {
  
  return (
    <div>
      <h1 className={title()}>News</h1>
      <div className="flex flex-col gap-1 my-4">
        <NewsList />
      </div>
    </div>
  );
}
