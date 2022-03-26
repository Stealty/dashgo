import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import dynamic from "next/dynamic";
import { theme } from "../styles/theme";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  axis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T08:21:00.000Z",
      "2021-03-19T08:21:00.000Z",
      "2021-03-20T08:21:00.000Z",
      "2021-03-21T08:21:00.000Z",
      "2021-03-22T08:21:00.000Z",
      "2021-03-23T08:21:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.2,
    },
  },
};

const series = [
  {
    name: "series1",
    data: [10, 120, 50, 90, 25, 150],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignContent="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={168} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={168} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
