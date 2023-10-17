"use client";

import { useJsonFetch } from "@/hooks/useJsonFetch";

export const Loading = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return <div>{JSON.stringify(data)}</div>;
  }
};
