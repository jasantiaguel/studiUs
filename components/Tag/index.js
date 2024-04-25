import styles from "./Tag.module.css"

export default function Tag({
        text, 
        type='tag', 
    }) {
    const typeStyles = {
        tag: {
            padding: '4px 12px',
            margin: '0 2px',
            fontSize: 'var(--caption-1)',
            borderRadius: '16px',
            textColor: 'var(--dark-green)'
        },
        filter: {
            fontSize: 'var(--sub-body)',
            padding: '8px 18px',
            margin: '0 8px 0 0',
            backgroundColor: 'var(--bright-af-75)',
        },
        profileTag: {
            fontSize: 'var(--sub-body)',
            padding: '8px 18px',
            margin: '0 8px 0 0',
            backgroundColor: 'var(--med-green)',
            textColor: 'var(--bright-af)',
        }
    }

    return (
        <div 
            className={styles.tag} 
            style={{
                fontSize: typeStyles[type].fontSize,
                padding: typeStyles[type].padding,
                margin: typeStyles[type].margin,
                backgroundColor: typeStyles[type].backgroundColor,
                color: typeStyles[type].textColor,
            }}
        >
            {text}
        </div>
    )
}