import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/AuthUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
export const posts = [
  {
    _id: uuid(),
    content:
      "Must try of this week: Vada Pao from SK Vadewale in Pune. The taste is absolutely mind-boggling and fresh.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aditya_jadhav",
    fullName: "Aditya Jadhav",
    postImage:
      "https://res.cloudinary.com/dwebygldw/image/upload/v1653066367/frittr/vada-pav_g0u58t.webp",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",

        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Prashant Singh Chauhan",
        username: "pareshaaaaan",
        profileAvatar: "https://picsum.photos/id/1012/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
