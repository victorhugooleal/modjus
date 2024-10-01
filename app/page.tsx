'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    texto: "Teste"
  })

  return (<div>
    Bem vindo ao Modjus!
  </div>
  );
}
