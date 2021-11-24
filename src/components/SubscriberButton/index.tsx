import styles from './styles.module.scss'


type SubscriberButtonProps = {
    priceId: string;
}

export function SubscriberButton({ priceId }: SubscriberButtonProps) {
    return(
        <button
            type="button"
            className={styles.SubscriberButton}
        >
            Subscriber Now
        </button>
    )
}