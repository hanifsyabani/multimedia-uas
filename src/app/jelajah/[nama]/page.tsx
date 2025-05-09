import { FC } from "react";
import Jelajah from "@/components/jelajah/jelajah";
import MainNav from "@/components/main-nav";

interface PageProps {
  params: {
    nama: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <>
      <MainNav />
      <Jelajah nama={params.nama} />
    </>
  );
};

export default Page;