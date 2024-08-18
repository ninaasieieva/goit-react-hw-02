import css from "./Description.module.css"

export default function Description() {
    return (
        <div className={css.container}>
            <div className={css.item}>
                <h1 className={css.title}>Sip Happens Café</h1>
                <h2 className={css.itemText}>Please leave your feedback about our service by selecting one of the options below.</h2>
                <p className={css.itemText}> </p>
            </div>
        </div>
    );
}