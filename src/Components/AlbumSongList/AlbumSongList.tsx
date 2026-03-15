import AlbumSongCard from "./AlbumSongCard";
import styles from "./AlbumSongList.module.scss";
import sorfcore from "./images/sorfcore.png";
import herz1 from "./images/herz1.png";
import nigtmares from "./images/nightmares.png";
import ggreedy from "./images/ggreedy.png";
import llovin from "./images/llovin.png";
import doja from "./images/doja.png";
import ddancin from "./images/ddancin.png";
import tyla from "./images/tyla.png";
import houdin from "./images/houdin.png";
import lala from "./images/lala.png";
import arctic from "./images/arctic.png";
import paradise from "./images/paradise.png";
import hharry from "./images/hharry.png";
import tom from "./images/tom.png";
import daylight from "./images/daylight.png";
import beggin from "./images/beggin.png";
import bbillie from "./images/bbillie.png";
import daddy from "./images/daddy.png";
import rolling from "./images/rolling.png";
import oneShop from "./images/oneShop.png";
import { useState } from "react";

const AlbumSongList = () => {
  const albumsTracks = [
    {
      rank: 1,
      title: "Sorfcore",
      artist: "The Neighbourhood",
      date: "Nov 4, 2023",
      album: "Hard to Imagine the Neighbourhood Ever Changing",
      duration: "3:26",
      herz: herz1,
      cover: sorfcore,
    },
    {
      rank: 2,
      title: "Skyfall Beats",
      artist: "The Neighbourhood",
      date: "Oct 26, 2023",
      album: "nightmares",
      duration: "2:45",
      herz: herz1,
      cover: nigtmares,
    },
    {
      rank: 3,
      title: "Greedy",
      artist: "tate mcrae",
      date: "Dec 30, 2023",
      album: "Greedy",
      duration: "2:11",
      herz: herz1,
      cover: ggreedy,
    },
    {
      rank: 4,
      title: "Lovin On me",
      artist: "jack harlow",
      date: "Dec 30, 2023",
      album: "Lovin On me",
      duration: "2:18",
      herz: herz1,
      cover: llovin,
    },
    {
      rank: 5,
      title: "pain the town red",
      artist: "Doja Cat",
      date: "Dec 29, 2023",
      album: "pain the town red",
      duration: "3:51",
      herz: herz1,
      cover: doja,
    },
    {
      rank: 6,
      title: "Dancing On Night",
      artist: "Dua Lipa",
      date: "may 27, 2023",
      album: "Dancing On Night(From Babie Movie)",
      duration: "2:56",
      herz: herz1,
      cover: ddancin,
    },
    {
      rank: 7,
      title: "Water",
      artist: "Tyla",
      date: "Dec 10, 2023",
      album: "Water",
      duration: "3:20",
      herz: herz1,
      cover: tyla,
    },
    {
      rank: 8,
      title: "Push your limits",
      artist: "Brian Michael",
      date: "Jan 2, 2024",
      album: "Push your limits",
      duration: "2:24",
      herz: herz1,
      cover: tyla,
    },
    {
      rank: 9,
      title: "Houdini",
      artist: "Dualipa",
      date: "Dec 12, 2023",
      album: "Houdini",
      duration: "3:05",
      herz: herz1,
      cover: houdin,
    },
    {
      rank: 10,
      title: "Lala",
      artist: "Myke Towers",
      date: "Nov 20, 2023",
      album: "La vida es una",
      duration: "3:17",
      herz: herz1,
      cover: lala,
    },
    {
      rank: 11,
      title: "I Wanaa Be Yours",
      artist: "arctic monkeys",
      date: "Sep 9, 2023",
      album: "AM",
      duration: "3:03",
      herz: herz1,
      cover: arctic,
    },
    {
      rank: 12,
      title: "Paradise",
      artist: "braaheim",
      date: "Jul 5, 2023",
      album: "Paradise",
      duration: "2:30",
      herz: herz1,
      cover: paradise,
    },
    {
      rank: 13,
      title: "As It Was",
      artist: "Harry Styles",
      date: "Sep 14, 2022",
      album: "As It Was",
      duration: "2:47",
      herz: herz1,
      cover: hharry,
    },
    {
      rank: 14,
      title: "Another Love",
      artist: "Tom Odell",
      date: "Dec 19, 2013",
      album: "Another Love",
      duration: "4:06",
      herz: herz1,
      cover: tom,
    },
    {
      rank: 15,
      title: "Daylight",
      artist: "David Kushner",
      date: "Jun 16, 2022",
      album: "Daylight",
      duration: "3:32",
      herz: herz1,
      cover: daylight,
    },
    {
      rank: 16,
      title: "Beggin",
      artist: "Maneskin",
      date: "Feb 27, 2017",
      album: "Chosen",
      duration: "3:31",
      herz: herz1,
      cover: beggin,
    },
    {
      rank: 17,
      title: "What Was I Made F...",
      artist: "Billie Eillsh",
      date: "Sep 6, 2023",
      album: "What Was I Made For",
      duration: "3:42",
      herz: herz1,
      cover: bbillie,
    },
    {
      rank: 18,
      title: "Daddy Issues",
      artist: "The Neighbourhood",
      date: "Aug 21, 2015",
      album: "Wiped out",
      duration: "2:47",
      herz: herz1,
      cover: daddy,
    },
    {
      rank: 19,
      title: "Rolling In The Deep",
      artist: "Adele",
      date: "Jun 5, 2011",
      album: "Adele 21",
      duration: "3:48",
      herz: herz1,
      cover: rolling,
    },
    {
      rank: 20,
      title: "OneShot",
      artist: "mhst",
      date: "Dec 14, 2023",
      album: "Toca Donka",
      duration: "1:15",
      herz: herz1,
      cover: oneShop,
    },
  ];
  const [playingSongId, setPlayingSongId] = useState(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}></div>
      {/* LIST HEADER */}

      <div className={styles.listHeader}>
        <div></div> {/* Rank */}
        <div></div> {/* Cover */}
        <div></div> {/* Title */}
        <div>Release date</div>
        <div>Album</div>
        <div className={styles.duration}>Time</div>
      </div>
      {/* LIST */}
      <div className={styles.list}>
        {albumsTracks.map((trend) => (
          <AlbumSongCard
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

export default AlbumSongList;
