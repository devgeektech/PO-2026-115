import Detail from "./Detail";
import { TopTenGamesData } from "@/data/TopTenGamesData";
import { Metadata } from "next";

interface PageProps {
  params: {
    cat: string;
    sub: string;
    name: string;
  };
}

// ✅ 1. Dynamic Metadata (SERVER SIDE)
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { cat, sub, name } = params;

  const game: any = TopTenGamesData[cat]
    ?.subcategoies?.[sub]
    ?.find(
      (item: any) =>
        item.key.toLowerCase().replace(/\s+/g, "-") === name
    );

  if (!game) {
    return {
      title: "Game Not Found",
      description: "The requested game does not exist.",
    };
  }

  const title = `${game.name} | Play ${cat} ${sub} Game Online`;
  const description =
    game.description ||
    `Play ${game.name} from ${cat}. Enjoy exciting ${sub} gameplay and win real rewards.`;

  const siteUrl =
    process.env.SITE_URL || "http://3.151.125.192:3000";

  return {
    title,
    description,
    keywords: [
      game.name,
      cat,
      sub,
      "online slots",
      "casino games",
      "real money games",
    ],

    alternates: {
      canonical: `${siteUrl}/${cat}/${sub}/${name}`,
    },

    openGraph: {
      title,
      description,
      url: `${siteUrl}/${cat}/${sub}/${name}`,
      images: [
        {
          url: game.detailImage,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [game.detailImage],
    },
  };
}

interface PageProps {
  params: {
    cat: string;
    sub: string;
    name: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { cat, sub, name } = await params;
  return <Detail cat={cat} sub={sub} name={name} />;
}
