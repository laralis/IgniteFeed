import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Siderbar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragrath", content: "Fala galeraa 👋" },
      {
        type: "paragrath",
        content:
          "Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-01-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/laralis.png",
      name: "Larissa Lisboa",
      role: "Freelancer",
    },
    content: [
      { type: "paragrath", content: "Consegui 🎉" },
      {
        type: "paragrath",
        content:
          "Muito feliz em compartilhar que agora sou parte do time Microsolft!!!",
      },
      
    ],
    publishedAt: new Date("2024-01-01 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post=>{
            return (
            <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  );
}
