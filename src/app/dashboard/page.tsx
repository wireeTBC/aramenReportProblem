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
  LineChart,
  CategoryBar,
} from "@tremor/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "path";
import Link from "next/link";

export default function Dashboard() {
  const host = "http://localhost:8000";
  // const host =
  //   "https://mobile-app-prod.a-ramen.com";
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
        `${host}/api/dashboard/getCountEarnPointGroupByBranchId`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setCountEarnPointGroupByBranchId(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getTotalUserTransferPointGroupByDate = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalUserTransferPointGroupByDate`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalUserTransferPointGroupByDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalUsersGroupByDate = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalUsersGroupByDate`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalUsersGroupByDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalScanFailGroupByDate = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalScanFailGroupByDate`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalScanFailGroupByDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalUseCouponGroupByType = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalUseCouponGroupByType`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalUseCouponGroupByType(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTotalUseCouponMenuGroupByType = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalUseCouponMenuGroupByType`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalUseCouponMenuGroupByType(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalUser, setTotalUser] = useState<any>();
  const getTotalUser = async () => {
    try {
      const result = await axios.get(`${host}/api/dashboard/getTotalUser`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
        },
      });
      setTotalUser(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalUserTransferPoint, setTotalUserTransferPoint] = useState<any>();
  const getTotalUserTransferPoint = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalUserTransferPoint`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalUserTransferPoint(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalMemberDelete, setTotalMemberDelete] = useState<any>();
  const getTotalMemberDelete = async () => {
    try {
      const result = await axios.get(`${host}/api/dashboard/getTotalMemberDelete`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
        },
      });
      setTotalMemberDelete(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalUseCoupon80Baht, setTotalUseCoupon80Baht] = useState<any>();
  const getTotalUseCoupon80Baht = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalUseCoupon80Baht`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
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
        `${host}/api/dashboard/getTotalUserMemberTierGroupByTier`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalUserMemberTierGroupByTier(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [userRegisterDaily, setUserRegisterDaily] = useState<any>();
  const getUserRegisterDaily = async () => {
    try {
      const result = await axios.get(`${host}/api/dashboard/getUserRegisterDaily`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
        },
      });
      console.log(result.data.data.totalUserToday);
      setUserRegisterDaily(result.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [userRegisterDailyByDateAndHour, setUserRegisterDailyByDateAndHour] =
    useState<any>();
  const getUserRegisterDailyByDateAndHour = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getUserRegisterDailyByDateAndHour`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setUserRegisterDailyByDateAndHour(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [userEarnPointDailyByDateAndHour, setUserEarnPointDailyByDateAndHour] =
    useState<any>();
  const getUserEarnPointDailyByDateAndHour = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getUserEarnPointDailyByDateAndHour`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setUserEarnPointDailyByDateAndHour(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalMemberGroupByAge, setTotalMemberGroupByAge] = useState<any>();
  const getTotalMemberGroupByAge = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalMemberGroupByAge`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalMemberGroupByAge(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [totalMemberGroupByAgeRange, setTotalMemberGroupByAgeRange] =
    useState<any>();
  const getTotalMemberGroupByAgeRange = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getTotalMemberGroupByAgeRange`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setTotalMemberGroupByAgeRange(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [avgEarnPointPerDayGroupByBranch, setAvgEarnPointPerDayGroupByBranch] =
    useState<any>();
  const getAvgEarnPointPerDayGroupByBranch = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getAvgEarnPointPerDayGroupByBranch`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setAvgEarnPointPerDayGroupByBranch(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const [avgEarnPointPerDayGroupByDate, setAvgEarnPointPerDayGroupByDate] =
    useState<any>();
  const getAvgEarnPointPerDayGroupByDate = async () => {
    try {
      const result = await axios.get(
        `${host}/api/dashboard/getAvgEarnPointPerDayGroupByDate`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiISFhLXJhbWVuLXN0YWZmLXByb2QhIn0.VyItFSVyd0BbfL07y6j8eHQBMENM8OBY2fZCADaQNSE",
          },
        }
      );
      setAvgEarnPointPerDayGroupByDate(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchData = () => {
    getCountEarnPointGroupByBranchId();
    getTotalUserTransferPointGroupByDate();
    getTotalUsersGroupByDate();
    getTotalScanFailGroupByDate();
    getTotalUseCouponGroupByType();
    getTotalUseCouponMenuGroupByType();
    getTotalUser();
    getTotalUserTransferPoint();
    getTotalMemberDelete();
    getTotalUserMemberTierGroupByTier();
    getUserRegisterDaily();
    getUserRegisterDailyByDateAndHour();
    getUserEarnPointDailyByDateAndHour();
    getTotalMemberGroupByAge();
    getTotalMemberGroupByAgeRange();
    getAvgEarnPointPerDayGroupByBranch();
    getAvgEarnPointPerDayGroupByDate();
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(intervalId);
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

        <div className="flex xl:flex-row lg:flex-col sm:flex-col md:flex-col flex-col">
          <div className="xl:grid lg:grid md:grid sm:grid grid-rows-2 grid-flow-col gap-4 w-full  mr-4">
            <Card decoration="top" decorationColor="rose">
              <Text>Total Register</Text>
              <NumberFormatter number={totalUser ?? 0} />
            </Card>
            <Card
              decoration="top"
              decorationColor="rose"
              className="mt-4 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0"
            >
              <Text>Total Transfer Point</Text>
              <NumberFormatter number={totalUserTransferPoint ?? 0} />
            </Card>

            <Card
              decoration="top"
              decorationColor="rose"
              className="mt-4 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0"
            >
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
            <Link href="userDelete">
              <Card
                decoration="top"
                decorationColor="rose"
                className="mt-4 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 h-full"
              >
                <Text>Total Delete User</Text>
                <NumberFormatter number={totalMemberDelete ?? 0} />
                <Text className="truncate mt-2">
                  Click here to see list of deleteion user
                </Text>
              </Card>
            </Link>
          </div>
          <Card
            className="lg:mt-4 xl:mt-0 mt-4"
            decoration="top"
            decorationColor="rose"
          >
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
          <Title>Member Register Daily Total</Title>
          <div>
            <AreaChart
              className="mt-6"
              data={totalUsersGroupByDate?.data}
              index="registration_date"
              categories={["count", "avg", "eventTitle"]}
              colors={["rose", "orange"]}
              yAxisWidth={50}
            />
            <div>test</div>
          </div>
        </Card>

        <div className="flex xl:flex-row lg:flex-row sm:flex-col md:flex-row flex-col">
          <Card className="mb-4 mr-2">
            <Title>Member Register Daily Hour</Title>
            <AreaChart
              className="mt-6"
              data={userRegisterDailyByDateAndHour?.data}
              index="date"
              categories={["count"]}
              colors={["rose"]}
              yAxisWidth={50}
            />
          </Card>
          <Card className="mb-4 ml-2">
            <Title>Member Earn Point Daily Hour</Title>
            <AreaChart
              className="mt-6"
              data={userEarnPointDailyByDateAndHour?.data}
              index="date"
              categories={["count"]}
              colors={["rose"]}
              yAxisWidth={50}
            />
          </Card>
        </div>
        <div className="flex xl:flex-row lg:flex-row sm:flex-col md:flex-row flex-col">
          <Card className="mb-4 mr-2">
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
          <Card className="mb-4 ml-2">
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

        <Card className="mb-4">
          <Title>Total member earn point of each branch</Title>
          <BarChart
            className="h-72 mt-4"
            data={countEarnPointGroupByBranchId?.data}
            index="foodstory_branch_name"
            categories={["count"]}
            colors={["rose"]}
          />
        </Card>
        <div className="flex xl:flex-row lg:flex-row sm:flex-col md:flex-row flex-col">
          <Card className="mb-4 mr-2">
            <Title>Average member pricing per branch</Title>
            <BarChart
              className="h-72 mt-4"
              data={avgEarnPointPerDayGroupByBranch?.data}
              index="branch"
              categories={["avg"]}
              colors={["rose"]}
            />
          </Card>
          <Card className="mb-4 ml-2">
            <Title>Average member pricing total branch</Title>
            <AreaChart
              className="h-72 mt-4"
              data={avgEarnPointPerDayGroupByDate?.data}
              index="date"
              categories={["avg"]}
              colors={["rose"]}
            />
          </Card>
        </div>
        <div className="flex xl:flex-row lg:flex-row sm:flex-col md:flex-row flex-col">
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
        <div className="flex xl:flex-row lg:flex-row sm:flex-col md:flex-row flex-col">
          <Card className="mb-4 mr-2">
            <Title>Member Age</Title>
            <BarChart
              className="h-72 mt-4"
              data={totalMemberGroupByAge?.data}
              index="age"
              categories={["count"]}
              colors={["rose"]}
            />
          </Card>
          <Card className="mb-4 ml-2">
            <Title>Member Age Range</Title>
            <BarChart
              className="h-72 mt-4"
              data={totalMemberGroupByAgeRange?.data}
              index="age_range"
              categories={["count"]}
              colors={["rose"]}
            />
          </Card>
        </div>
      </div>
    </main>
  );
}
