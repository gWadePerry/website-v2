import { Client } from "@notionhq/client";
import Painting from "../Painting";
import { cache } from "react";

let num = 0;
let paintings: Painting[] = [];

export const GetPaintings = async (refresh: boolean, filter: string) => {
  if (refresh || paintings.length == 0) {
    paintings = await FetchFromNotion(filter);
  }
  return paintings;
};

const FetchFromNotion = async (filter: string): Promise<Painting[]> => {
  // Initialize a client
  num++;
  console.log("Call to Notion  " + num + " beginning...");
  const NOTION_CLIENT = new Client({
    auth: process.env.NOTION_SECRET,
  });
  // Query Notion database
  try {
    const response = await NOTION_CLIENT.databases.query({
      database_id: process.env.NOTION_DATABASE_ID ?? "",
      filter: {
        and: [
          {
            property: "WebPage",
            multi_select: {
              contains: "Show",
            },
          },
          {
            property: "WebPage",
            multi_select: {
              contains: filter,
            },
          },
        ],
      },
      sorts: [
        {
          property: "Completed",
          direction: "descending",
        },
      ],
    });
    const results = response.results;

    return results.map((item) => {
      const painting = item as any;
      console.log(painting.properties["Photo"].files);
      const date = painting.properties["Completed"].date.start;
      let year = "";
      if (date) {
        const parsedDate = new Date(date);
        year = parsedDate.getFullYear().toString();
      }
      console.log("..." + num + " finished");
      return {
        id: painting.id,
        title: painting.properties["Title"].title[0]?.text.content,
        scale: painting.properties["Scale"].formula.string,
        medium: painting.properties["Medium"].multi_select[0].name,
        date: date,
        photoUrl: painting.properties["Photo"].files[0]?.file.url,
        year: year,
      };
    });
  } catch (error) {
    console.error("Error fetching data from Notion API:", error);
    throw new Error("Error fetching data from Notion API");
  }
};
// export const GetPaintings = cache(FetchFromNotion);

export default GetPaintings;
