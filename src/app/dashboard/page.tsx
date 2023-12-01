"use client";
import styles from "../../styles/Page.module.scss";
import {
  AreaChart,
  BarChart,
  Card,
  Flex,
  Switch,
  Title,
  Metric,
  Text,
  DonutChart,
  DeltaType,
  Grid,
  BadgeDelta,
} from "@tremor/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "path";

export default function Dashboard() {
  const host = " https://a58d-171-96-25-106.ngrok-free.app";
  const [countEarnPointGroupByBranchId, setCountEarnPointGroupByBranchId] =
    useState<any>();
  const [
    totalUserTransferPointGroupByDate,
    setTotalUserTransferPointGroupByDate,
  ] = useState<any>();
  const [TotalUseCouponGroupByType, setTotalUseCouponGroupByType] =
    useState<any>();
  const [totalUsersGroupByDate, setTotalUsersGroupByDate] = useState<any>();
  const [totalScanFailGroupByDate, setTotalScanFailGroupByDate] =
    useState<any>();
  const [totalUseCouponMenuGroupByType, setTotalUseCouponMenuGroupByType] =
    useState<any>();

  const getCountEarnPointGroupByBranchId = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getCountEarnPointGroupByBranchId`,
        {}
      );
      setCountEarnPointGroupByBranchId(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getTotalUserTransferPointGroupByDate = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalUserTransferPointGroupByDate`,
        {}
      );
      setTotalUserTransferPointGroupByDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalUsersGroupByDate = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalUsersGroupByDate`,
        {}
      );
      setTotalUsersGroupByDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalScanFailGroupByDate = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalScanFailGroupByDate`,
        {}
      );
      setTotalScanFailGroupByDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalUseCouponGroupByType = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalUseCouponGroupByType`,
        {}
      );
      setTotalUseCouponGroupByType(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalUseCouponMenuGroupByType = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalUseCouponMenuGroupByType`,
        {}
      );
      setTotalUseCouponMenuGroupByType(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalUser, setTotalUser] = useState<any>();
  const getTotalUser = async () => {
    try {
      const result = await axios.get(`${host}/api/cms/getTotalUser`, {});
      setTotalUser(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalUserTransferPoint, setTotalUserTransferPoint] = useState<any>();
  const getTotalUserTransferPoint = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalUserTransferPoint`,
        {}
      );
      setTotalUserTransferPoint(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalMemberDelete, setTotalMemberDelete] = useState<any>();
  const getTotalMemberDelete = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalMemberDelete`,
        {}
      );
      setTotalMemberDelete(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalUseCoupon80Baht, setTotalUseCoupon80Baht] = useState<any>();
  const getTotalUseCoupon80Baht = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalUseCoupon80Baht`,
        {}
      );
      setTotalUseCoupon80Baht(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalUserMemberTierGroupByTier, setTotalUserMemberTierGroupByTier] =
    useState<any>();
  const getTotalUserMemberTierGroupByTier = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getTotalUserMemberTierGroupByTier`,
        {}
      );
      setTotalUserMemberTierGroupByTier(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [userRegisterDaily, setUserRegisterDaily] = useState<any>();
  const getUserRegisterDaily = async () => {
    try {
      const result = await axios.get(
        `${host}/api/cms/getUserRegisterDaily`,
        {}
      );
      console.log(result.data.data.totalUserToday);
      setUserRegisterDaily(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getCountEarnPointGroupByBranchId();
    getTotalUserTransferPointGroupByDate();
    getTotalUsersGroupByDate();
    getTotalScanFailGroupByDate();
    getTotalUseCouponGroupByType();
    getTotalUseCouponMenuGroupByType();
    getTotalUser();
    getTotalUserTransferPoint();
    getTotalMemberDelete();
    // getTotalUseCoupon80Baht();
    getTotalUserMemberTierGroupByTier();
    getUserRegisterDaily();
  }, []);

  interface NumberFormatterProps {
    number: number;
  }

  const NumberFormatter: React.FC<NumberFormatterProps> = ({ number }) => {
    const formattedNumber = new Intl.NumberFormat().format(number);
    return <Metric>{formattedNumber}</Metric>;
  };

  return (
    <main>
      <div className={styles.container}>
        <div className="flex justify-between w-full"></div>
        <h1 className={styles.title}>Dashboard</h1>

        <div className="flex">
          <div className="grid grid-rows-2 grid-flow-col gap-4 w-full  mr-4">
            <Card decoration="top" decorationColor="rose">
              <Text>Total Register</Text>
              <NumberFormatter number={totalUser ?? 0} />
            </Card>
            <Card decoration="top" decorationColor="rose">
              <Text>Total Transfer Point</Text>
              <NumberFormatter number={totalUserTransferPoint ?? 0} />
            </Card>

            <Card decoration="top" decorationColor="rose">
              <Text>Total Register Daily</Text>
              <Flex justifyContent="start" className="truncate space-x-3">
                <Metric>{userRegisterDaily?.totalUserToday ?? 0}</Metric>
              </Flex>
              <Flex justifyContent="start" className="space-x-2 mt-4">
                <BadgeDelta deltaType={userRegisterDaily?.deltaType} />
                <Flex justifyContent="start" className="space-x-1 truncate">
                  <Text>
                    {(userRegisterDaily?.totalUserToday ?? 0) -
                      (userRegisterDaily?.totalUserYesterday ?? 0)}
                  </Text>
                  <Text className="truncate">compare to previous day</Text>
                </Flex>
              </Flex>
            </Card>
            <Card decoration="top" decorationColor="rose">
              <Text>Total Delete User</Text>
              <NumberFormatter number={totalMemberDelete ?? 0} />
            </Card>
          </div>
          <Card className="max-w-lg" decoration="top" decorationColor="rose">
            <Title>User Teir Level</Title>
            <BarChart
              className="h-72 mt-4"
              data={totalUserMemberTierGroupByTier?.data}
              index="tier"
              categories={["count"]}
              colors={["rose"]}
            />
          </Card>
        </div>

        <Card className="mb-4 mt-4">
          <Title>Member Register</Title>
          <AreaChart
            className="mt-6"
            data={totalUsersGroupByDate?.data}
            index="registration_date"
            categories={["count"]}
            colors={["rose"]}
            yAxisWidth={50}
          />
        </Card>
        <Card className="mb-4">
          <Title>User Transfer Point</Title>
          <AreaChart
            className="mt-6"
            data={totalUserTransferPointGroupByDate?.data}
            index="date"
            categories={["count"]}
            colors={["rose"]}
            yAxisWidth={50}
          />
        </Card>
        <Card className="mb-4">
          <Title>Earn point of each branch</Title>
          <BarChart
            className="h-72 mt-4"
            data={countEarnPointGroupByBranchId?.data}
            index="foodstory_branch_name"
            categories={["count"]}
            colors={["rose"]}
          />
        </Card>
        <div className="flex">
          <Card className="mb-4 mr-2">
            <Title>Coupon privilege used</Title>
            <BarChart
              className="h-72 mt-4"
              data={TotalUseCouponGroupByType?.data}
              index="type"
              categories={["count"]}
              colors={["rose"]}
            />
          </Card>
          <Card className="mb-4 ml-2">
            <Title>Coupon food used</Title>
            <BarChart
              className="h-72 mt-4"
              data={totalUseCouponMenuGroupByType?.data}
              index="type"
              categories={["count"]}
              colors={["rose"]}
            />
          </Card>
        </div>

        <Card className="mb-4">
          <Title>Earn Food Story Fail (Earn Cron Job)</Title>
          <AreaChart
            className="mt-6"
            data={totalScanFailGroupByDate?.data}
            index="date"
            categories={["count"]}
            colors={["rose"]}
            yAxisWidth={50}
          />
        </Card>
      </div>
    </main>
  );
}
