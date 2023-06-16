import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/AuthUtils";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 */

export const users = [
  {
    _id: uuid(),
    fullName: "Prashant Singh Chauhan",
    username: "pareshaaaaan",
    password: "123",
    bio: "Hey there, Prashant here",
    website: "https://github.com/percius47",
    profileAvatar: "https://picsum.photos/id/1012/150",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "johndoe",
        profileAvatar: "https://picsum.photos/id/1009/150",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "johndoe",
        profileAvatar: "https://picsum.photos/id/1009/150",
      },
      {
        _id: uuid(),
        fullName: "Aditya Jadhav",
        username: "aditya_jadhav",
        profileAvatar: "https://picsum.photos/id/100/150",
      },
      {
        _id: uuid(),
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
      },
    ],
  },
];
