import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/AuthUtils";
import pic6 from "../images/pic6.jpg";
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */
export const posts = [
  {
    _id: uuid(),
    content: "Travel is an investment in yourself So keep travelling..",
    likes: {
      likeCount: 28,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    fullName: "Adarsh Balika",
    postImage:
      "https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/4:3/pass/gettyimages-1146431497.jpg",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Yes, I agree",
        fullName: "Sonika Chaudhary",
        username: "IAm_Sonika",

        profileAvatar:
          "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Feels like haven",
        fullName: "Rashmi Khanna",
        username: "R_Khanna",
        profileAvatar:
          "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Exciting times in the world of tech! Just read about the latest advancements in artificial intelligence and machine learning. The future is here, and it's mind-blowing! #TechRevolution #AI #ML",
    likes: {
      likeCount: 52,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    fullName: "Adarsh Balika",
    postImage:
      "https://imageio.forbes.com/specials-images/imageserve/648aaa9fac6d92c810b12f50/Why-Companies-Are-Vastly-Underprepared-For-The-Risks-Posed-By-AI/960x0.jpg?height=406&width=711&fit=bounds",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Code is the symphony that orchestrates our digital world, weaving elegance and functionality into every line. Each character holds the power to create, to innovate, and to transform. Embrace the beauty of coding, for it is the language of possibilities and dreams. #CodeLove #TechPassion",
    likes: {
      likeCount: 41,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    fullName: "Adarsh Balika",
    postImage:
      "https://cleverdodo.blob.core.windows.net/media/mu/media/2014/08/15/mainprogram.PNG",
    createdAt: "2023-07-3",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "What a beautiful lines!",
        fullName: "Sonika Chaudhary",
        username: "IAm_Sonika",

        profileAvatar:
          "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Nature's wonders never cease to amaze me. Just returned from a breathtaking hike in the Grand Canyon, and the beauty and vastness of the landscape left me speechless. #NatureLover #BucketListAdventure",
    likes: {
      likeCount: 89,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    fullName: "Adarsh Balika",
    postImage:
      "https://assets.editorial.aetnd.com/uploads/2009/12/gettyimages-858637934.jpg",
    createdAt: "2022-10-3",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Such a beautiful view!",
        fullName: "Abhishek Chaudhary",
        username: "Abhiii",

        profileAvatar:
          "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "What a beautiful lines!",
        fullName: "Sonika Chaudhary",
        username: "IAm_Sonika",

        profileAvatar:
          "https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    content: "My First E-commerce app, check it out..",
    likes: {
      likeCount: 89,
      likedBy: [],
      dislikedBy: [],
    },
    username: "IAm_Sonika",
    fullName: "Sonika Chaudhary",
    postImage: pic6,
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Woow! Awesome",
        fullName: "Abhishek Chaudhary",
        username: "Abhiii",

        profileAvatar:
          "https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Put some more CSS, rest is good",
        fullName: "Rashmi Khanna",
        username: "R_Khanna",
        profileAvatar:
          "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  {
    _id: uuid(),
    content: "Do whatever you want..",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Deep_04",
    fullName: "Deepanshu Banga",
    postImage: "",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "When you want some mental exercise-- play Chess",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "fang123",
    fullName: "Fang Li",
    postImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j_8075FLpVga33cQJZguU_pQRkMhIv1Lsg&usqp=CAU",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content:
      "Reading Book is a good habit, You can explore the world without going anywhere",
    likes: {
      likeCount: 22,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Abhiii",
    fullName: "Abhishek Chaudhary",
    postImage:
      "https://miro.medium.com/v2/resize:fit:1200/1*S81O15rjKfG-BFdnNC6-GQ.jpeg",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [],
  },

  {
    _id: uuid(),
    content: "Most popular plant in India, Money plant",
    likes: {
      likeCount: 43,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sakshi28",
    fullName: "Sakshi Shrotiya",
    postImage:
      "https://www.gardendesign.com/pictures/images/675x529Max/site_3/hawaiian-pothos-epipremnum-aureum-proven-winners_17324.jpg",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "If someone says you can't do it, what is your reaction?",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "x_lee",
    fullName: "Xioki",
    postImage:
      "https://www.ziglar.com/wp-content/uploads/2016/10/blog-post-img.jpg",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "No, I can do it",
        fullName: "Rashmi Khanna",
        username: "R_Khanna",
        profileAvatar:
          "https://images.squarespace-cdn.com/content/v1/58d1b3ff1b631bb1893d108d/813f4928-6cc6-4bc8-a4e4-265f94b4d665/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg?format=1000w",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Sometime Just feeling lazyyy",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "IAm_Sonika",
    fullName: "Sonika Chaudhary",
    postImage: "",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Hello Devs, Which new skill are you learning now days",
    likes: {
      likeCount: 18,
      likedBy: [],
      dislikedBy: [],
    },
    username: "R_Khanna",
    fullName: "Rashmi Khanna",
    postImage: "https://www.codingdojo.com/blog/wp-content/uploads/react.jpg",
    createdAt: "2023-06-21",
    updatedAt: formatDate(),
    comments: [],
  },
];
