import PageAnimation from "@/components/page-animation";
import Header from "./header";
import Info from "./info";
import RankPointsBadge from "@/app/profile/rank-points-badge";
import OrbitingPlanet from "@/components/orbiting-planets";

const info = {
  cover:
    "https://s3-alpha-sig.figma.com/img/7a9a/145a/962a44415048d4b179ce6f1379a3c2f4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gQ7eoBShRry-XC5FVV52tPUyIlOMWToFW6iMt-4UW2pfBD9H5PXeG2wqbLUsGYpXgCrGvEZOrZM5PP0P94wpQYPwmFUUTdlpeLJEW-9~UKDUWNUK6W41AxDxHBUzfN6ExG0SFVGbUv3OkVBkeIRFMgonkszXRVbt8L9fU~V8evSKnXgWR2sS3ojko58WnA5UMvBwjp~r8pcVT7x2JoUJHpsZM4wdQzqeZm1cQY5tp~8SGJqgrtyU5jVFoRsovk1m05agouuKfLjzmDmhD7dXhj6IrtLkh477QUDqNJ7mnl9Fta07-0zJjmmO6kHdmk3H6bRFQoZZWetd63xdLpUivw__",
  logo: "https://s3-alpha-sig.figma.com/img/cd75/c38d/e1c8b17f7a8128489e721a83970097be?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rhs7TaV~KX5RwNL7Tk~yb~dIdqC9uXtfOC6jmGwHIDj7Dt3X840vHRMggyq~8E7oKJkYsxYmB5UjXLZnHK-j4W5d9fFaTLxikG2PfqCv0ptYRdLPCIoOS3rLkQR0vPVJiqXwhJeSFM0oJn6vmCbGr1apry~y~gwBMRprbKOuNzS2SR5X5QBk6od5z6zdyFgpY2sH~4GjEkbWEuAf13gjtaTp7ZRWGguh~IslmXP~dxb1eHq~-dWU7Wiv3NSOOuQwhvjj3FshcA-690zArEyF9Kbv3G65Ilmb2S2FFz8STfyGtHMIkBf0~3cUpaXHRTj2t2L5LT~qgH6QV5YoOpYkew__",
  name: "Ufficio di Correggio",
  address: "Corso Giuseppe Mazzini, 28c",
  admin: "Gianluca Barbieri",
  points: 30000,
  rank: 2,
};

export default function Office() {
  return (
    <PageAnimation>
      <Header {...info} />
      <div className="h-2" />
      <div className="relative">
        <Info {...info} />
        <div className="h-3" />
        <div className="w-full flex justify-center">
          <RankPointsBadge
            backgroundColor="#0771FC"
            label=""
            points={info.points}
            rank={info.rank}
            width="40%"
          />
        </div>
        <div className="absolute w-full h-[500px] top-[-180px] z-[-10]">
          <OrbitingPlanet planets={10} hideLogo />
        </div>
      </div>
    </PageAnimation>
  );
}
