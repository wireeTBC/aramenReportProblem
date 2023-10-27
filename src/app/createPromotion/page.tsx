"use client";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Page.module.scss";
import { ChangeEvent, useState } from "react";
import Dropzone from "@/components/dropZone";
import axios from "axios";

export default function Home() {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST",
    "Access-Control-Allow-Headers": "Content-Type",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLWRldiEifQ.3lNBYk030zha186nx9rjAE6FL90RretP1fbU0liOju0",
  };

  const boardcast = async () => {
    console.log("boardcast");
    try {
      const data = {
        type: "promotions",
        title: (document.getElementById("title") as HTMLInputElement).value,
        subtitle: (document.getElementById("subtitle") as HTMLInputElement)
          .value,
        body: "test",
        description: (
          document.getElementById("description") as HTMLInputElement
        ).value,
        image:
          "https://scontent.fkdt3-1.fna.fbcdn.net/v/t45.1600-4/369420759_23861362935330637_1006688476105194685_n.jpg?stp=cp0_dst-jpg_q75_s1080x2048_spS444&_nc_cat=110&ccb=1-7&_nc_sid=528f85&_nc_eui2=AeG3ywWtSG1A4DfK0LSVJ_2BKg_1bje7NxMqD_VuN7s3E0kWaIiFgQPTYu0zVguu0Ztk3P4Li_snDVcDzMs2DVY3&_nc_ohc=20FnY0t8WjcAX_6bydm&_nc_ht=scontent.fkdt3-1.fna&oh=00_AfCc8-KouU1N-8bSoET-7ised1H1msRnbvlu_-P6pcZ_Wg&oe=65383B36",
      };

      const response = await axios.post(
        "http://localhost:8000/api/suggestion",
        data,
        { headers }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className={styles.container}>
        <div className="flex justify-between w-full">
          <Link href={"/"} className="flex flex-1 ">
            <img
              className="pr-2"
              src="/assets/ArrowLeft.svg"
              alt="arrow-left"
            />
            <h1 className={styles.title}>Create Promotion</h1>
          </Link>
          <div className="flex">
            <button className={styles.btnCancel}>Cancel</button>
            <button className={styles.btnDraft}>Save as draft</button>
            <button className={styles.btnDone} onClick={boardcast}>
              Done
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardtitle}>Information</span>
          <div>
            <div className={styles.subtitle}>
              Title
              <span className={styles.require}> *</span>
            </div>
            <input
              id="title"
              type="text"
              placeholder="example"
              style={{ width: "384px", marginTop: "8px" }}
            />
          </div>
          <div>
            <div className={styles.subtitle}>
              Subtitle
              <span className={styles.require}> *</span>
            </div>
            <input
              type="text"
              id="subtitle"
              placeholder="example"
              style={{ width: "384px", marginTop: "8px" }}
            />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardtitle}>Image</span>
          <div className={styles.subtitle}>
            Mobile
            <span className={styles.require}> *</span>
          </div>
          <div>
            <Dropzone />
            <span style={{ color: "#202223", fontSize: "14px;" }}>
              Maximum 1 file, 1 MB, 390 x 388px (JPG, JPEG, PNG)
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardtitle}>Content writer</span>{" "}
          <textarea
            id="description"
            rows={6}
            placeholder="Compose an epic.."
            style={{ width: "640px" }}
          ></textarea>
        </div>
      </div>
    </main>
  );
}
