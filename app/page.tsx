import { env } from "@/env";
import ClientComponent from "./client-component";

export default function Home() {
  console.log("Server-side DATABASE_URL:", env.DATABASE_URL);
  console.log("Server-side API_SECRET_KEY:", env.API_SECRET_KEY);
  // Client-side vars are also accessible on the server
  console.log("NEXT_PUBLIC_API_URL on server:", env.NEXT_PUBLIC_API_URL);

  return <ClientComponent />;
}
