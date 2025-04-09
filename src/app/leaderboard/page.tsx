"use client";
import { motion } from "framer-motion";

/* const ranking = [
  {
    fullName: "Mario Rossi",
    type: "notiziere",
    points: 25015,
    office: "Ufficio di Mirandola",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    fullName: "Luca Bianchi",
    type: "coach",
    points: 23902,
    office: "Ufficio di Novellara",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    fullName: "Marco Verdi",
    type: "coach",
    points: 20184,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    fullName: "Carlo neri",
    type: "coach",
    points: 15000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    fullName: "Carlo neri",
    type: "coach",
    points: 14000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    fullName: "Carlo neri",
    type: "coach",
    points: 13000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    fullName: "Carlo neri",
    type: "coach",
    points: 12000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    fullName: "Carlo neri",
    type: "coach",
    points: 11000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
  {
    fullName: "Carlo neri",
    type: "coach",
    points: 10000,
    office: "Ufficio di Sassuolo",
    image:
      "https://s3-alpha-sig.figma.com/img/5d35/b601/8fefa11ac9c8c2bc16b3515e3bbe8d0e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kZHtHej0pG9aMAqgyDqpCDbf1X4mx3jO~FWrQ9eJidQ4Rnp4tVc8zOUpKSPs--hsQTYzWsz86EVSXzt2gDU5Kz8W6vq3RQ56eafBfygZC7yxMA6cGcpoq33tygeqLUAgZOem48Kn6ZxZlxVTqPk-qqSgz2JHBbLBdQAPaAVEcyp5Q~nS9SSr25abTfj-ZHMhIfQrSPSYcQcIBRI4WJ306BlYMuS31j6JOENAwrKbKbw8L075sG2XuZj~A1RedQkthHCXEQYWzy09ZnTgllH0u44T9JcjcvRB9pY7tjoQJOzF8VwAo-iObBjVriJkQuf~e73iyOH~k9-MVwSdKcNFAQ__",
  },
]; */

export default function Leaderboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div>Leaderboard page</div>
    </motion.div>
  );
}
