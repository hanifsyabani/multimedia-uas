import Jelajah from "@/components/jelajah/jelajah";
import MainNav from "@/components/main-nav";

interface PageProps {
  params: {
    nama: string;
  };
}

export default function page({ params }:any) {
  return (
    <>
      <MainNav />
      <Jelajah nama={params.nama} />
    </>
  );
}
