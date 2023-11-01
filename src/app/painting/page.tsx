import GetPaintings from "@/components/api/GetPaintings";
import PaintingPage from "@/components/PaintingPage";

const Painting = async ({ searchParams }: any) => {
  const filter = searchParams.filter ?? "";
  const allPaintings = await GetPaintings();
  const paintings = filter
    ? allPaintings.filter((painting) => {
        return painting.tags.includes(filter);
      })
    : allPaintings;

  const length = paintings.length;
  const index = parseInt(searchParams.index ?? "0");
  return PaintingPage(paintings, index, filter);
};

export default Painting;
