import Detail from "./Detail";

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
