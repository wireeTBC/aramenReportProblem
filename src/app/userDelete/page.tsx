"use client";
import styles from "../../styles/Page.module.scss";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "path";

export default function Dashboard() {
  // const host = "http://localhost:8000";
  const host = "https://93fa-171-96-25-106.ngrok-free.app";
  const [listOfUserDeleteAccount, setListOfUserDeleteAccount] = useState<any>();

  const getListOfUserDeleteAccount = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getListOfUserDeleteAccount`,

        {
          headers: {"ngrok-skip-browser-warning": "69420",},
        }
      );
      setListOfUserDeleteAccount(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = () => {
    getListOfUserDeleteAccount();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = [
    {
      name: "Viola Amherd",
      Role: "Federal Councillor",
      departement:
        "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
      status: "active",
    },
    {
      name: "Simonetta Sommaruga",
      Role: "Federal Councillor",
      departement:
        "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
      status: "active",
    },
    {
      name: "Alain Berset",
      Role: "Federal Councillor",
      departement: "The Federal Department of Home Affairs (FDHA)",
      status: "active",
    },
    {
      name: "Ignazio Cassis",
      Role: "Federal Councillor",
      departement: "The Federal Department of Foreign Affairs (FDFA)",
      status: "active",
    },
    {
      name: "Karin Keller-Sutter",
      Role: "Federal Councillor",
      departement: "The Federal Department of Finance (FDF)",
      status: "active",
    },
    {
      name: "Guy Parmelin",
      Role: "Federal Councillor",
      departement:
        "The Federal Department of Economic Affairs, Education and Research (EAER)",
      status: "active",
    },
    {
      name: "Elisabeth Baume-Schneider",
      Role: "Federal Councillor",
      departement: "The Federal Department of Justice and Police (FDJP)",
      status: "active",
    },
  ];

  return (
    <main>
      <div className={styles.container}>
        <div className="flex justify-between w-full"></div>
        <h1 className={styles.title}>User Delete</h1>
        <Card>
          <Title>List of User Delete</Title>
          <Table className="mt-5">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Reason</TableHeaderCell>
                <TableHeaderCell>Other Reason</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOfUserDeleteAccount?.map((item: any) => (
                <TableRow key={item.firstname}>
                  <TableCell>
                    {item.firstname == "" ? "- " : item.firstname}{" "}
                    {item.lastname == "" ? "- " : item.lastname}
                  </TableCell>
                  <TableCell>
                    <Text>{item.reason}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.other == "" ? "-" : item.other}</Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  );
}
