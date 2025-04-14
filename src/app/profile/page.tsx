"use client";
import ActionsList from "./actions-list";
import Header from "./header";
import Info from "./info";
import RankAndPointsBadge from "./rank-points-badge";
import { motion } from "framer-motion";

const info = {
  fullName: "Marco Verdi",
  office: "Ufficio di Sassuolo",
  address: "Via Pietro Giardini, 256/a",
  photo:
    "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  points: 15006,
  generalRank: 3,
  officeRank: 1,
};

const actions = [
  {
    id: "1",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "2",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "3",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "4",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "5",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "6",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "7",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "8",
    type: "cdv",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "9",
    type: "assignment",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "10",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "11",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "12",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "13",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "14",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "15",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "16",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "17",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
  {
    id: "18",
    type: "news",
    name: "Anna Ferrari",
    phone: "333 4567890",
    address: "Via Mazzini 13, Sassuolo",
  },
];

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-screen gap-6"
    >
      <div className="h-full flex flex-col">
        <Header {...info} />
        <div className="min-h-3" />
        <Info {...info} />
        <div className="min-h-6" />
        <div className="px-5 flex justify-between">
          <RankAndPointsBadge
            label="Classifica generale"
            points={info.points}
            rank={info.generalRank}
            width="48%"
            backgroundColor="#0C77A3"
          />
          <RankAndPointsBadge
            label="Classifica ufficio"
            points={info.points}
            rank={info.officeRank}
            width="48%"
            backgroundColor="#0771FC"
          />
        </div>
        <div className="min-h-9" />
        <div className="flex-grow overflow-scroll">
          <ActionsList actions={actions} />
        </div>
      </div>
    </motion.div>
  );
}
