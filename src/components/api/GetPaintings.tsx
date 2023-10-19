import { Client } from "@notionhq/client";
import Painting from "../Painting";

let num = 0;

interface Tags {
  id: string;
  name: string;
  color: string;
}

let paintings: Painting[] = [];
let lastFetched: number | null = null; // timestamp of the last fetched data

const THIRTY_MINUTES = 30 * 60 * 1000; // 30 minutes in milliseconds

const GetPaintings = async (): Promise<Painting[]> => {
  const currentTime = Date.now();
  if (lastFetched) {
    console.log(currentTime - lastFetched);
  }

  if (
    paintings.length === 0 ||
    (lastFetched && currentTime - lastFetched > THIRTY_MINUTES)
  ) {
    paintings = await FetchFromNotion();
    lastFetched = currentTime; // Update the timestamp
  }
  return paintings;
};

const FetchFromNotion = async (): Promise<Painting[]> => {
  num++;
  console.log("Call to Notion  " + num);

  const NOTION_CLIENT = new Client({
    auth: process.env.NOTION_SECRET,
  });
  // Query Notion database
  try {
    const response = await NOTION_CLIENT.databases.query({
      database_id: process.env.NOTION_DATABASE_ID ?? "",
      filter: {
        property: "WebPage",
        multi_select: {
          contains: "Show",
        },
      },
      sorts: [
        {
          property: "Completed",
          direction: "descending",
        },
      ],
    });
    const results = response.results;

    paintings = results.map((item) => {
      const painting = item as any;
      const date = painting.properties["Completed"].date.start;
      let year = "";
      if (date) {
        const parsedDate = new Date(date);
        year = parsedDate.getFullYear().toString();
      }
      return {
        id: painting.id,
        title: painting.properties["Title"].title[0]?.text.content,
        scale: painting.properties["Scale"].formula.string,
        medium: painting.properties["Medium"].multi_select[0].name,
        date: date,
        photoUrl: painting.properties["Photo"].files[0]?.file.url,
        year: year,
        tags: painting.properties["WebPage"].multi_select.map(
          (object: Tags) => {
            return object.name;
          }
        ),
      };
    });
    return paintings;
  } catch (error) {
    console.error("Error fetching data from Notion API:", error);
    return [];
  }
};

export default GetPaintings;
