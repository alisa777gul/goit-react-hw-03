import style from './Description.module.css';
import { CiCoffeeCup } from "react-icons/ci";

export default function Description() {
    return (
        <div>
            <h1 className={style.header}>Sip Happens Café </h1>
            <p className={style.descr}>Please leave your feedback about our service by selecting one of the options below.<CiCoffeeCup className={style.coffee}/></p>
        </div>
    )
}