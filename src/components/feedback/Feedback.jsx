import style from './Feedback.module.css';

export default function Feedback({good,neutral,bad, positive}) {
    return (
        <div className={style.feedback}>
            <p className={style.good}>Good: {good}</p>
            <p className={style.neutral}>Neutral: {neutral}</p>
            <p className={style.bad}>Bad: {bad}</p>
            <p className={style.positive}>Positive: {positive}%</p>
        </div>
    )
}