import { ErrorMessageProps } from "./ErrorMessage.types";

export function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-red-500 text-sm mt-1">{message}</p>;
}
