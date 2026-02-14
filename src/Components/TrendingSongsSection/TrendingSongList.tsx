import React from "react";
import TrendingSongCard from "./TrendingSongCard";
import styles from "./styleTrendingList.module.scss";
import neigh from "./images/neigh.png";
import Herz from "./images/herz.png";
import Beates from "./images/Beates.png";
import Greedy from "./images/Greedy.png";
import Lovin from "./images/Lovin.png";
import Pain from "./images/Pain.png";
import Dancin from "./images/Dancin.png";
import Water from "./images/Water.png";

const TrendingSongList = () => {
  const tracks = [
    {
      rank: 1,
      title: "Sorfcore",
      artist: "The Neighbourhood",
      date: "Nov 4, 2023",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      duration: "3:26",
      herz: Herz,
      cover: neigh,
    },
    {
      rank: 2,
      title: "Skyfall Beats",
      artist: "The Neighbourhood",
      date: "Oct 26, 2023",
      album: "nightmares",
      duration: "2:45",
      herz: Herz,
      cover: Beates,
    },
    {
      rank: 3,
      title: "Greedy",
      artist: "tate mcrae",
      date: "Dec 30, 2023",
      album: "Greedy",
      duration: "2:11",
      herz: Herz,
      cover: Greedy,
    },
    {
      rank: 4,
      title: "Lovin On me",
      artist: "jack harlow",
      date: "Dec 30, 2023",
      album: "Lovin On me",
      duration: "2:18",
      herz: Herz,
      cover: Lovin,
    },
    {
      rank: 5,
      title: "pain the town red",
      artist: "Doja Cat",
      date: "Dec 29, 2023",
      album: "pain the town red",
      duration: "3:51",
      herz: Herz,
      cover: Pain,
    },
    {
      rank: 6,
      title: "Dancing On Night",
      artist: "Dua Lipa",
      date: "may 27, 2023",
      album: "Dancing On Night(From Babie Movie)",
      duration: "2:56",
      herz: Herz,
      cover: Dancin,
    },
    {
      rank: 7,
      title: "Water",
      artist: "Tyla",
      date: "Dec 10, 2023",
      album: "Water",
      duration: "3:20",
      herz: Herz,
      cover: Water,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titleWeekly}>
          Trending <span>Songs</span>
        </h1>
      </div>

      {/* LIST HEADER */}
      <div className={styles.listHeader}>
        <div></div> {/* Rank */}
        <div></div> {/* Cover */}
        <div></div> {/* Title */}
        <div>Release date</div>
        <div>Album</div>
        <div>Time</div>
      </div>

      {/* LIST */}
      <div className={styles.list}>
        {tracks.map((trend) => (
          <TrendingSongCard key={trend.rank} {...trend} />
        ))}
      </div>
    </div>
  );
};

export default TrendingSongList;
