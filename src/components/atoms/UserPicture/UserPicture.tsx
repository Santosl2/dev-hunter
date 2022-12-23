import { useSession } from "next-auth/react";

export function UserPicture() {
  const { data, status } = useSession();
  const user = data?.user;

  if (status === "loading" || !user) return null;

  return (
    <div className="flex items-center gap-2">
      <img
        className="w-8 h-8 rounded-full"
        src={user.image || ""}
        alt="User profile "
      />
      {user.name}
    </div>
  );
}
