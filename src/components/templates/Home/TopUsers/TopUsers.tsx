import { useUserInfo } from "@/shared/hooks";

export function TopUsers() {
  const { data } = useUserInfo();

  console.log(data);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center" />
    </section>
  );
}
