import Challenge from "./challenge";
import OrbitingPlanet from "./orbiting-planets";
import People from "./people";

const people = [
  {
    id: "1",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "2",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "3",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "4",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "5",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "6",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
];

const me = {
  id: "1",
  fullName: "Ivan Cardillo",
  office: "Agenzia 1",
  imageUrl:
    "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  points: 1000,
};

const challenge = {
  target: 3000,
  challenger: {
    id: "1",
    fullName: "Jacopo Crincoli",
    office: "Agenzia 2",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
    points: 2000,
  },
};

export default function Home() {
  return (
    <div className="pt-6">
      <People people={people} />
      <OrbitingPlanet />
      {challenge && <Challenge challenge={challenge} me={me} />}
    </div>
  );
}
