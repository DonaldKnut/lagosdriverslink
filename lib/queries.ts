export const GET_FEATURED_DRIVERS = `
*[_type == "driver" && availability == true][0...3] | order(_createdAt desc) {
  _id,
  name,
  experience,
  location,
  bio,
  category,
  rating,
  "photo": photo.asset->url
}
`;

export const HOMEPAGE_QUERY = `
  *[_type == "homepage"][0] {
    heroTitle,
    heroSubtitle,
    heroImage {
      asset -> {
        _id,
        url
      }
    },
    ctaText,
    ctaLink
  }
`;
