import { ErrorComponent } from "@/components/ErrorComponent";
import { Data } from "@/components/Data";
import { Loading } from "@/components/Loading";

export default function Home() {
  return (
    <>
      <Data />
      <ErrorComponent />
      <Loading />
    </>
  );
}
