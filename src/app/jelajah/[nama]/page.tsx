import Jelajah from "@/components/jelajah/jelajah";
import MainNav from "@/components/main-nav";

export default function page({ params }: { params: { nama: string } }) {
  return (
    <>
      <MainNav />
      <Jelajah nama={params.nama} />
    </>
  );
}
