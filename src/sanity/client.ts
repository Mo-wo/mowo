import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "s8080p9o",
  dataset: "production",
  apiVersion: "2024-01-01", // Use a valid API version date
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Optional: only needed for authenticated requests
});