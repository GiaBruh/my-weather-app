import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type weatherData = {
  address: string;
  timezone: string;
  days: Array<{
    datetime: string;
    tempmax: string;
    tempmin: string;
    feelslikemax: string;
    feelslikemin: string;
    humidity: string;
    sunrise: string;
    sunset: string;
    conditions: string;
    description: string;
    icon: string;
  }>;
};

export default async function Home() {
  const data = await fetch("http://localhost:8080/api/weather/all", {
    cache: "force-cache",
  });
  const weather: weatherData = await data.json();
  return (
    <>
      <Card className="w-60">
        <CardHeader>
          <CardTitle>{weather.address}</CardTitle>
          <CardDescription>Timezone: {weather.timezone}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{weather.days[0].conditions}</p>
        </CardContent>
        <CardFooter>
          <p>Quote of the day</p>
        </CardFooter>
      </Card>
    </>
  );
}
