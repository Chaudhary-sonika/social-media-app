import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/AuthUtils";
import pic1 from "../images/pic1.jpg";
import pic4 from "../images/pic4.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic5 from "../images/pic5.jpg";
import adarshBalika from "../images/adarshBalika.png";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 */

export const users = [
  {
    _id: 1,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarsh@123",
    bio: "NeoGrad",
    website: "https://github.com/Chaudhary-sonika",
    profileAvatar: adarshBalika,
    following: [
      {
        _id: 3,
        fullName: "Abhishek Chaudhary",
        username: "Abhiii",
        profileAvatar:
          "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      },
      {
        _id: 2,
        fullName: "Sonika Chaudhary",
        username: "IAm_Sonika",
        profileAvatar:
          "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    followers: [
      {
        _id: 4,
        fullName: "Rashmi Khanna",
        username: "R_Khanna",
        profileAvatar:
          "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
      },
      {
        _id: 5,
        fullName: "Sakshi Shrotiya",
        username: "sakshi28",
        profileAvatar:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyMlDtD8Hj7njoNHMwottMK41tzbY5Y9FIgmJqVqH_hfE2fZFpl_GzwBDIN3lppKKZLv2BwN85mLUtflm_HTcOEZ3IkuyG0IbvKdIcO-wGK1aDpLkBdJiWzoLVgxYAfQOwLHntI2ln70OVF4IeNlcdpRsAUgMrTC6Vt8l_lUcm4uay0oNJtxAO04rt/s1080/47_Girl-DP-Sohohindi.in_.jpeg",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 2,
    firstName: "Sonika",
    lastName: "Chaudhary",
    username: "IAm_Sonika",
    password: "123",
    bio: "Nature Lover",
    website: "https://github.com/Chaudhary-sonika",
    profileAvatar:
      "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 3,
        fullName: "Abhishek Chaudhary",
        username: "Abhiii",
        profileAvatar:
          "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      },
    ],
    followers: [
      {
        _id: 1,
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: adarshBalika,
      },
      {
        _id: 3,
        fullName: "Abhishek Chaudhary",
        username: "Abhiii",
        profileAvatar:
          "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      },
      {
        _id: 4,
        fullName: "Rashmi Khanna",
        username: "R_Khanna",
        profileAvatar:
          "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
      },
      {
        _id: 5,
        fullName: "Sakshi Shrotiya",
        username: "sakshi28",
        profileAvatar:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyMlDtD8Hj7njoNHMwottMK41tzbY5Y9FIgmJqVqH_hfE2fZFpl_GzwBDIN3lppKKZLv2BwN85mLUtflm_HTcOEZ3IkuyG0IbvKdIcO-wGK1aDpLkBdJiWzoLVgxYAfQOwLHntI2ln70OVF4IeNlcdpRsAUgMrTC6Vt8l_lUcm4uay0oNJtxAO04rt/s1080/47_Girl-DP-Sohohindi.in_.jpeg",
      },
    ],
  },
  {
    _id: 3,
    firstName: "Abhishek",
    lastName: "Chaudhary",
    username: "Abhiii",
    password: "128",
    bio: "love for my country",
    website: "https://github.com/Chaudhary-sonika",
    profileAvatar:
      "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 2,
        fullName: "Sonika Chaudhary",
        username: "IAm_Sonika",
        profileAvatar:
          "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        _id: 4,
        fullName: "Rashmi Khanna",
        username: "R_Khanna",
        profileAvatar:
          "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
      },
    ],
    followers: [
      {
        _id: 1,
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: adarshBalika,
      },
      {
        _id: 2,
        fullName: "Sonika Chaudhary",
        username: "IAm_Sonika",
        profileAvatar:
          "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        _id: 4,
        fullName: "Rashmi Khanna",
        username: "R_Khanna",
        profileAvatar:
          "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
      },
      {
        _id: 5,
        fullName: "Sakshi Shrotiya",
        username: "sakshi28",
        profileAvatar:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyMlDtD8Hj7njoNHMwottMK41tzbY5Y9FIgmJqVqH_hfE2fZFpl_GzwBDIN3lppKKZLv2BwN85mLUtflm_HTcOEZ3IkuyG0IbvKdIcO-wGK1aDpLkBdJiWzoLVgxYAfQOwLHntI2ln70OVF4IeNlcdpRsAUgMrTC6Vt8l_lUcm4uay0oNJtxAO04rt/s1080/47_Girl-DP-Sohohindi.in_.jpeg",
      },
    ],
  },
  {
    _id: 4,
    firstName: "Rashmi",
    lastName: "Khanna",
    username: "R_Khanna",
    password: "876",
    bio: "Environment Enthusiast",
    website: "https://github.com/Chaudhary-sonika",
    profileAvatar:
      "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 1,
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: adarshBalika,
      },
      {
        _id: 3,
        fullName: "Abhishek Chaudhary",
        username: "Abhiii",
        profileAvatar:
          "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      },

      {
        _id: 2,
        fullName: "Sonika Chaudhary",
        username: "IAm_Sonika",
        profileAvatar:
          "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    followers: [
      {
        _id: 3,
        fullName: "Abhishek Chaudhary",
        username: "Abhiii",
        profileAvatar:
          "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
      },

      {
        _id: 5,
        fullName: "Sakshi Shrotiya",
        username: "sakshi28",
        profileAvatar:
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyMlDtD8Hj7njoNHMwottMK41tzbY5Y9FIgmJqVqH_hfE2fZFpl_GzwBDIN3lppKKZLv2BwN85mLUtflm_HTcOEZ3IkuyG0IbvKdIcO-wGK1aDpLkBdJiWzoLVgxYAfQOwLHntI2ln70OVF4IeNlcdpRsAUgMrTC6Vt8l_lUcm4uay0oNJtxAO04rt/s1080/47_Girl-DP-Sohohindi.in_.jpeg",
      },
    ],
  },
  {
    _id: 5,
    firstName: "Sakshi",
    lastName: "Shrotiya",
    username: "sakshi28",
    password: "574",
    bio: "Hello Web Dev",
    website: "https://github.com/Chaudhary-sonika",
    profileAvatar:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyMlDtD8Hj7njoNHMwottMK41tzbY5Y9FIgmJqVqH_hfE2fZFpl_GzwBDIN3lppKKZLv2BwN85mLUtflm_HTcOEZ3IkuyG0IbvKdIcO-wGK1aDpLkBdJiWzoLVgxYAfQOwLHntI2ln70OVF4IeNlcdpRsAUgMrTC6Vt8l_lUcm4uay0oNJtxAO04rt/s1080/47_Girl-DP-Sohohindi.in_.jpeg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: 1,
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: adarshBalika,
      },
      {
        _id: 2,
        fullName: "Sonika Chaudhary",
        username: "IAm_Sonika",
        profileAvatar:
          "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        _id: 4,
        fullName: "Rashmi Khanna",
        username: "R_Khanna",
        profileAvatar:
          "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
      },
    ],
    followers: [],
  },

  {
    _id: 6,
    firstName: "Kulwant",
    lastName: "Singh",
    username: "Kul_Army",
    password: "kul123",
    bio: "I love Indian Army",
    website: "",
    profileAvatar: pic4,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  {
    _id: 7,
    firstName: "Fang",
    lastName: "Li",
    username: "fang123",
    password: "fang98",
    bio: "K-Drama Fan",
    website: "",
    profileAvatar: pic5,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  {
    _id: 8,
    firstName: "Deepanshu",
    lastName: "Banga",
    username: "Deep_04",
    password: "04deep",
    bio: "Aspiring Web Developer",
    website: "",
    profileAvatar: pic3,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
  {
    _id: 9,
    firstName: "Xioki",
    lastName: "Chhaio",
    username: "x_lee",
    password: "04xio",
    bio: "Art lover...",
    website: "",
    profileAvatar: pic3,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
  },
];
