import Jelajah from "@/components/jelajah/jelajah";
import MainNav from "@/components/main-nav";

type PageProps = {
  params: {
    nama: string;
  };
};

export default async function Page({ params }: PageProps) {
  return (
    <>
      <MainNav />
      <Jelajah nama={params.nama} />
    </>
  );
}
