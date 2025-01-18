"use client";

import { env } from "@/env";

export default function ClientComponent() {
  // This will work because it's a public env var
  console.log("Client-side NEXT_PUBLIC_API_URL:", env.NEXT_PUBLIC_API_URL);

  // This would cause a runtime error - server-side vars are not accessible
  console.log("This will fail:", env.DATABASE_URL);

  return <div>Check the console for env values</div>;
}
