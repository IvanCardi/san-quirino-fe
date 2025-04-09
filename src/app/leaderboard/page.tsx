"use client";
import LeaderboardHeader from "@/components/leaderboard-header";
import RankingItem from "@/components/ranking-item";
import TopThree from "@/components/top-three";
import { motion } from "framer-motion";

const ranking = [
  {
    id: "1",
    fullName: "Mario Rossi",
    type: "notiziere",
    points: 25015,
    office: "Ufficio di Mirandola",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "2",
    fullName: "Luca Bianchi",
    type: "coach",
    points: 23902,
    office: "Ufficio di Novellara",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "3",
    fullName: "Marco Verdi",
    type: "coach",
    points: 20184,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "4",
    fullName: "Carlo neri",
    type: "coach",
    points: 15000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "5",
    fullName: "Carlo neri",
    type: "coach",
    points: 14000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "6",
    fullName: "Carlo neri",
    type: "coach",
    points: 13000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "7",
    fullName: "Carlo neri",
    type: "coach",
    points: 12000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "8",
    fullName: "Carlo neri",
    type: "coach",
    points: 11000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "9",
    fullName: "Carlo neri",
    type: "coach",
    points: 10000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    id: "10",
    fullName: "Carlo neri",
    type: "coach",
    points: 900,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
];

export default function Leaderboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-screen gap-6"
    >
      <LeaderboardHeader
        title="Leaderboard"
        subtitle="Le leggende del mese"
        className="bg-[#02476B]"
      />
      <TopThree people={ranking.slice(0, 3)} />
      <div className="flex-1 overflow-y-auto pb-[110px]">
        <div className="px-5 flex flex-col gap-2 ">
          {ranking.slice(3).map((person, index) => (
            <RankingItem key={person.id} {...person} position={index + 4} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
