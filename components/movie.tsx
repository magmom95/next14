"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      {/* <Link prefetch href={`/movies/${id}`}> 누르지 않아도 미리 자바스크립트통신해서 로딩 빠르게 즉 ssr처럼 행동하게함*/}
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
