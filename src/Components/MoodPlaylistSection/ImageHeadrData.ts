import type { HeaderCardProps } from "./../Cards/HeaderCard";
import Sad from "../MoodPlaylistSection/images/Sad.png";
import Chill from "../MoodPlaylistSection/images/Chill.png";
import Workout from "../MoodPlaylistSection/images/Workout.png";
import Love from "../MoodPlaylistSection/images/Love.png";
import Happy from "../MoodPlaylistSection/images/Happy.png";

export const cards: HeaderCardProps[] = [
  {
    title: "Sad Playlist",
    imageUrl: Sad,
  },
  { title: "Chill Playlist", imageUrl: Chill },
  { title: "Workout Playlist", imageUrl: Workout },
  { title: "Love Playlist", imageUrl: Love },
  { title: "Happy Playlist", imageUrl: Happy },
];
