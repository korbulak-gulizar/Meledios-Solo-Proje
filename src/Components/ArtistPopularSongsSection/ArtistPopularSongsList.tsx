import React from "react";
import ArtistPopularSongCard from "./ArtistPopularSongsCard";
import styles from "./ArtistPopularSongsList.module.scss";
import godzila from "./images/godzila.png";
import withoutMe from "./images/withoutMe.png";
import herz1 from "./images/herz1.png";
import mocking from "./images/mocking.png";
import theReal from "./images/theReal.png";
import lose from "./images/lose.png";

import { useState } from "react";

const ArtistPopularSongsList = () => {
  const tracks = [
    {
      rank: 1,
      title: "Without Me",
      artist: "Eminem",
      date: "may 15, 2002",
      played: "21,215,618",
      duration: "4:50",
      herz: herz1,
      cover: withoutMe,
    },
    {
      rank: 2,
      title: "mockingbird",
      artist: "Eminem",
      date: "Apr 25, 2005",
      played: "19,856,112",
      duration: "4:10",
      herz: herz1,
      cover: mocking,
    },
    {
      rank: 3,
      title: "The Real Slim Sha..",
      artist: "Eminem",
      date: "Nov 30, 2023",
      played: "16,564,223",
      duration: "4:10",
      herz: herz1,
      cover: theReal,
    },
    {
      rank: 4,
      title: "Lose Yourself",
      artist: "Eminem",
      date: "Nov 30, 2023",
      played: "16,240,390",
      duration: "5:22",
      herz: herz1,
      cover: lose,
    },
    {
      rank: 5,
      title: "Godzila",
      artist: "Eminem",
      date: "Nov 30, 2023",
      played: "14,367,500",
      duration: "3:30",
      herz: herz1,
      cover: godzila,
    },
  ];
  const [playingSongId, setPlayingSongId] = useState(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.titleWeekly}>Popular</h1>
      </div>

      {/* LIST HEADER */}
      <div className={styles.listHeader}>
        <div></div> {/* Rank */}
        <div></div> {/* Cover */}
        <div></div> {/* Title */}
        <div>Release date</div>
        <div>Played</div>
        <div>Time</div>
        <div className={styles.duration}>Time</div>
      </div>

      {/* LIST */}
      <div className={styles.list}>
        {tracks.map((trend) => (
          <ArtistPopularSongCard
            key={trend.rank}
            {...trend}
            playingSongId={playingSongId}
            setPlayingSongId={setPlayingSongId}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistPopularSongsList;
