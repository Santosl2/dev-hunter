import { RandomMessage, Spinner } from "@/components/atoms";

export function LoadingResults() {
  return (
    <section className="flex justify-center items-center h-screen flex-col gap-5 p-2">
      <Spinner size={16} />
      <RandomMessage />
    </section>
  );
}
