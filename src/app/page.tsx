"use client";
import axios from "axios";
import styles from "../styles/Page.module.scss";
import { useEffect, useState } from "react";
//ProfileImage

export default function Home() {
  //path
  const [path, setPath] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
    console.log("Image loaded!");
  };
  const host = " https://a58d-171-96-25-106.ngrok-free.app";
  const fetchDataImage = async (imagePath: string) => {
    try {
      const response = await axios.get(
        `${host}/api/fileName?key=${imagePath}`,
        {
          headers: {
            "Content-Type": "image/png",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXByb2QhIn0.Fqu5jwxkbym-VqwuiYCNiFTe8mcSi3HlUbK_Qa7ExAc",
          },
          responseType: "arraybuffer",
        }
      );
      const imageObject = new Blob([response.data], { type: "image/png" });
      const objectURL = URL.createObjectURL(imageObject);
      return objectURL;
    } catch (e) {
      console.log(e);
      return null; // Return null in case of an error
    }
  };

  const [data, setData] = useState<any>({ data: [] });

  const fetchData = async () => {
    try {
      const result = await axios.get(`${host}/api/suggestion`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXByb2QhIn0.Fqu5jwxkbym-VqwuiYCNiFTe8mcSi3HlUbK_Qa7ExAc",
        },
      });
      setData(result.data);

      const imagePromises = result.data.data.map(async (item: any) => {
        const imageUrl = item.SuggestionImage[0].suggestion_image;
        try {
          const imageObject = await fetchDataImage(imageUrl);
          return imageObject; // Return the image object or null in case of an error
        } catch (error) {
          console.error("Error fetching image:", error);
          return null;
        }
      });

      const imageObjects = await Promise.all(imagePromises);

      // Filter out null values (in case of errors) and only update the 'path' state with valid image URLs
      const validImageObjects = imageObjects.filter(
        (imageObject) => imageObject !== null
      );

      // Convert the filtered image objects to an array of strings
      const filteredImageUrls = validImageObjects.map(
        (imageObject) => imageObject as string
      );

      // Update the 'path' state with the filtered image URLs
      setPath(filteredImageUrls);
      console.log(path);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div className={`${styles.container} h-full`}>
        <div className="flex justify-between w-full">
          <h1 className={`${styles.title}`}>Problem / Suggestion asdf</h1>
          {/* <Link className={styles.btnDone} href="/createPromotion">
            <div className={styles.done}>Create Promotion</div>
          </Link> */}
        </div>

        <div className={styles.card}>
          <table className={styles.tbl}>
            <tbody>
              <tr>
                <td>No.</td>
                <td>Type</td>
                <td>Description</td>
                <td>Date</td>
                <td>Image</td>
              </tr>
              {data.data.map((x: any, i: any) => (
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{x.suggestion_type}</td>
                  <td>{x.suggestion_problem}</td>
                  <td>
                    {new Date(x.timestamp_created_datetime).toLocaleString(
                      "th-TH",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )}
                  </td>
                  <td>
                    <img
                      id="test-img"
                      src={path[i]}
                      width={75}
                      className={isLoading ? styles.skeletonLoader : ""}
                      onLoad={handleImageLoad}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
