"use client";

import { useJsonFetch } from "@/hooks/useJsonFetch";

export const ErrorComponent = () => {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");
  if (error) {
    return <div>{error.message}</div>;
  }

  return null;
};
