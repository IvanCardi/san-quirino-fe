import RankPointsBadge from "@/app/profile/rank-points-badge";
import OrbitingPlanet from "@/components/orbiting-planets";
import PageAnimation from "@/components/page-animation";
import Header from "./header";
import Info from "./info";
import PeopleList from "./people-list";

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

const people = [
  {
    id: "1",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "notiziere",
  },
  {
    id: "2",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "notiziere",
  },
  {
    id: "3",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "notiziere",
  },
  {
    id: "4",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "notiziere",
  },
  {
    id: "5",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "notiziere",
  },
  {
    id: "6",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "notiziere",
  },
  {
    id: "7",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "coach",
  },
  {
    id: "8",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "manager",
  },
  {
    id: "9",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "notiziere",
  },
  {
    id: "10",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dj9ZahUfOqGytMW-SudlkE-0dCVMtlshlD3vBQwK8hLrgbbznCbQXlPW3g6kBi7ir1gsiP-xAHR0aoRfOOi4hk9ryu8AWxk9squh1IHkYIlaYjy9ltuEa9eEq2RiwzKnRQD7aIIJ8BzjONQ0sj1eSIyexKeB93mLlXueJDTgmrKs7KgwD57MTGKAuHjHEDLbkAIHCl1wst3ZmfdnbqRXsEbeItvpBpZexPiyBJXX60wWNJJ7owHkmbeBzyB2L2oL2lsoFZ0kuXDy30OKOFmi2v7emn8NJP3BlS1hynwibryKYhwrWP2fYKbcubgN8WIOWzVk5yDGY3tp2sIbZCIFjw__",
    fullName: "Luca Bianchi",
    points: 23902,
    type: "notiziere",
  },
];

export default function Office() {
  return (
    <PageAnimation className="flex flex-col h-screen">
      <Header {...info} />
      <div className="min-h-2" />
      <div className="relative">
        <Info {...info} />
        <div className="min-h-3" />
        <div className="w-full flex justify-center">
          <RankPointsBadge
            backgroundColor="#0771FC"
            label=""
            points={info.points}
            rank={info.rank}
            width="50%"
          />
        </div>
        <div className="absolute w-full min-h-[500px] top-[-180px] z-[-10]">
          <OrbitingPlanet planets={10} hideLogo />
        </div>
      </div>
      <div className="min-h-32" />
      <div className="flex-grow overflow-scroll">
        <PeopleList people={people} />
      </div>
    </PageAnimation>
  );
}
