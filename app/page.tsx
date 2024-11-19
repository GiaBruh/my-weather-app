import NavBar from "@/components/custom/NavBar";

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
  return (
    <main className="mx-[1rem] lg:m-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <NavBar />
    </main>
  );
}
