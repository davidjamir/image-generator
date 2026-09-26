import { ImageResponse } from "next/og";
import { getOgFonts } from "@/lib/og-fonts";
import { THEMES_OG } from "@/constants";
import { Site } from "@/core/domain/site";
import { Post } from "@/core/domain/post";

type Payload = {
  site: Site
  post: Post
}

export const size = {
  width: 1080,
  height: 1350,
};

export async function POST(request: Request) {
  const fonts = await getOgFonts();
  const payload: Payload = await request.json()
  const { site, post } = payload

  const ThemeOg = THEMES_OG[site.theme as keyof typeof THEMES_OG];

  return new ImageResponse(
    <ThemeOg post={post} site={site} logo={site.config.symbolOg} />,
    {
      ...size,
      fonts,
    },
  );
}
