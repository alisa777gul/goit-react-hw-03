 import style from "./Options.module.css"


export default function Options({ updateFeedback, totalFeedback }) {  // Получаем updateFeedback через {}
  
    const handleReset = () => {
        updateFeedback('reset'); 
  }
    return (
    <>
      <button onClick={() => updateFeedback('good')} className={style.good}>Good</button>
      <button onClick={() => updateFeedback('neutral')} className={style.neutral}>Neutral</button>
    <button onClick={() => updateFeedback('bad')} className={style.bad}>Bad</button>
    {totalFeedback>0 ? <button onClick={handleReset} className={style.reset}>Reset</button> : <p></p>}       
    </>
  );
}