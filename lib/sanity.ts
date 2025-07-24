import { createClient } from "@sanity/client";

// export const sanityClient = createClient({
//   projectId: "00h3fbf0",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2023-01-01",
//   token: process.env.SANITY_API_WRITE_TOKEN,
// });
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-08-01",
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});
