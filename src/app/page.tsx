import axios from "axios";
import styles from "../styles/Page.module.scss";
import Link from "next/link";
//import next/images
import Image from "next/image";
//ProfileImage
import ProfileImage from "@/components/imageWithHeader";
export default async function Home() {
  const { data } = await axios.get("http://localhost:8000/api/suggestion", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLWRldiEifQ._BI5WpZOfJren2VRUUNnK4LP7zQH28IYRn4COA2RRlI",
    },
  });
  return (
    <main>
      <div className={`${styles.container}  h-screen`}>
        <div className="flex justify-between w-full">
          <h1 className={`${styles.title}`}>Problem</h1>
          {/* <Link className={styles.btnDone} href="/createPromotion">
            <div className={styles.done}>Create Promotion</div>
          </Link> */}
        </div>

        <div className={styles.card}>
          <table className={styles.tbl}>
            <thead>
              <th>no.</th>
              <th>Problem</th>
              <th>Other</th>
              <th>Date</th>
              <th>Image</th>
            </thead>
            <tbody>
              {data.data.map((x: any, i: any) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{x.suggestion_problem}</td>
                  <td>
                    {x.suggestion_problem_other != ""
                      ? x.suggestion_problem_other
                      : "-"}
                  </td>
                  <td>{x.timestamp_created_datetime}</td>
                  {/* <td>{x.SuggestionImage[0].suggestion_image}</td> */}
                  <td>
                    <ProfileImage
                      imageUrl={x.SuggestionImage[0].suggestion_image}
                    ></ProfileImage>
                    <h1>test</h1>
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
