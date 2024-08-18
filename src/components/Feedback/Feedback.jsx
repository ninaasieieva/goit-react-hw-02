import css from "./Feedback.module.css"
export default function Feedback(
    { values, totalFeedback, positiveFeedback }
) {
    return (
        <>
            <p className={css.paragrText}>Good: {values.good} </p>
            <p className={css.paragrText}>Neutral: {values.neutral}</p>
            <p className={css.paragrText}>Bad: {values.bad}</p>
            <p className={css.paragrText}>Total: {totalFeedback}</p>
            <p className={css.paragrText}>Positive: {positiveFeedback}%</p>
        </>
    )
}