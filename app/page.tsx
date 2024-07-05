"use client";
import { Select } from "./components/Select/Select";
import FilterSelect from "./components/Filters/FilterSelect/FilterSelect";
import FruitCard, { Fruit } from "./components/FruitCard/FruitCard";
import { fruits } from "@/public/CONSTS/Fruit";
import { useState } from "react"
import styles from "./page.module.css"
import DiscountCard from "./components/DiscountCard/DiscountCard";
import Filters from "./components/Filters/Filters";
import { useEffect } from "react";
import axios from "axios";


export default function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(result => (
        setProducts(result.data)
      ))
  },[])

  return (
    <div>
      <div className={styles.bodyWrapper}>

        <Select />
        <div className={styles.wrapper}>
          <div>
            <Filters />
          </div>
          <div className={styles.section}>
            <DiscountCard productName="Gori's Apple" />
            <div className={styles.fruitWrapper}>
              {products.map((fruit: Fruit, idx) => (
                <FruitCard fruit={fruit} key={idx} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
