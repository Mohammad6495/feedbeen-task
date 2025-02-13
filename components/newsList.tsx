"use client";

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useCallback, useState } from "react";

import Post from "@/app/news/post";
import { getNews } from "@/app/news/lib";
import { Button } from "@heroui/button";

const NewsList = ({ initialData }: { initialData?: any }) => {
  
  const router = useRouter();
  const pathname = usePathname();
  const observer = useRef<IntersectionObserver | null>(null);
  const queryClient = useQueryClient();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["news"],
      queryFn: ({ pageParam = 1 }) => getNews({ page: pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
      initialData: initialData
        ? {
          pages: initialData,
          pageParams: initialData.map((_: any, i: number) => i + 1),
        }
        : undefined,
    });

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: ["news"] });
    };
  }, [pathname, queryClient]);

  useEffect(() => {
    if (data) {
      const currentPage = data.pages.length;

      if (currentPage > 1) {
        router.replace(`/news/page/${currentPage}`, { scroll: false });
      } else if (pathname !== "/news") {
        router.replace("/news", { scroll: false });
      }
    }
  }, [data, router, pathname]);

  const lastItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  );

  return (
    <div className="flex flex-col gap-1 my-4">
      {isLoading && !isFetchingNextPage && <p>در حال بارگذاری اخبار...</p>}
      {data?.pages.map((group, i) => (
        <div key={i}>
          {group.news.map((item: any, index: number) => (
            <Post key={item._id} index={index} post={item} />
          ))}
        </div>
      ))}

      <div ref={lastItemRef} className="h-10" />

      {isFetchingNextPage && <p className="text-center">در حال بارگذاری...</p>}
      <noscript>
        <Button variant="solid">صفحه بعدی</Button>
      </noscript>
    </div>
  );
};

export default NewsList;
