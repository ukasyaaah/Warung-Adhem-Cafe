import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { ICart, IMenu } from "../../../types/order";
import { getMenus } from "../../../services/menu.service";
import styles from "./CreateOrder.module.css";
import { filters, tables } from "./CreateOrder.constants";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

const CreateOrder = () => {
  const [menus, setMenus] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [carts, setCarts] = useState<ICart[]>([]);

  useEffect(() => {
    const fetchOrder = async () => {
      const result = await getMenus(searchParams.get("category") as string);
      setMenus(result.data);
    };
    fetchOrder();
  }, [searchParams.get("category")]);
  return (
    <main className={styles.create}>
      <div className={styles.menu}>
        <h1>Explore Our Best Menu</h1>
        <div className={styles.filter}>
          {filters.map((filter) => (
            <Button
              type="button"
              color={
                (!searchParams.get("category") && filter === "All") ||
                filter == searchParams.get("category")
                  ? "primary"
                  : "secondary"
              }
              key={filter}
              onClick={() =>
                setSearchParams(filter === "All" ? {} : { category: filter })
              }
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className={styles.list}>
          {menus.map((item: IMenu) => (
            <div className={styles.item} key={item.id}>
              <img
                src={item.image_url}
                alt={item.name}
                className={styles.image}
              />
              <h2>{item.name} </h2>
              <div className={styles.bottom}>
                <p className={styles.price}>${item.price}</p>
                <Button onClick={() => {}}>Order</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form className={styles.form}>
        <div>
          <div className={styles.header}>
            <h2 className={styles.title}>Customer Information</h2>
            <Link to={"/orders"}>
              <Button color="secondary">Cancel</Button>
            </Link>
          </div>
          <div className={styles.input}>
            <Input
              id="name"
              label="Name"
              name="CustomerName"
              placeholder="Insert Name"
              required
            />
            <Select
              id="table"
              label="Table Number"
              name="TableNumber"
              options={tables}
              required
            />
          </div>
        </div>
      </form>
    </main>
  );
};

export default CreateOrder;
