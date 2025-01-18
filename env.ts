import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z
      .string()
      .url()
      .refine(str => str.startsWith("postgresql://"), {
        message: 'DATABASE_URL must be a PostgreSQL connection string'
      }),
    API_SECRET_KEY: z
      .string()
      .min(1, "API_SECRET_KEY cannot be empty")
      .refine((str) => str.length >= 32, {
        message: "API_SECRET_KEY must be at least 32 characters long",
      }),
  },
  client: {
    NEXT_PUBLIC_API_URL: z
      .string()
      .url("NEXT_PUBLIC_API_URL must be a valid URL")
      .min(1, "NEXT_PUBLIC_API_URL cannot be empty"),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  }
})