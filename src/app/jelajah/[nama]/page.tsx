import { FC } from "react";
import Jelajah from "@/components/jelajah/jelajah";
import MainNav from "@/components/main-nav";

export type PageProps = {
  params: {
    nama: string;
  };
};

const Page: FC<PageProps> = async ({ params }) => {
  return (
    <>
      <MainNav />
      <Jelajah nama={params.nama} />
    </>
  );
};

export default Page;
