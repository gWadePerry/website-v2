import GetPaintings from "@/components/api/GetPaintings";
import PaintingPage from "@/components/PaintingPage";

const Painting = async ({ searchParams }: any) => {
  const filter = searchParams.filter ?? "";
  console.log(filter);
  const paintings = await GetPaintings(filter);
  const length = paintings.length;
  const index = parseInt(searchParams.index ?? "0");
  return PaintingPage(paintings, index, filter);
};

export default Painting;
