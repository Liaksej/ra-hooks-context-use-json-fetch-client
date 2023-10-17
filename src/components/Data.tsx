"use client";

import { useJsonFetch } from "@/hooks/useJsonFetch";

export const Data = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
};
