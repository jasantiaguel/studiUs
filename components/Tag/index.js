import styles from "./Tag.module.css"

export default function Tag({
        text, 
        type='tag', 
    }) {
    const typeStyles = {
        tag: {
            padding: '4px 12px',
            fontSize: 'var(--caption-1)',
            borderRadius: '16px',
            textColor: 'var(--dark-green)'
        },
        filter: {
            fontSize: 'var(--sub-body)',
            padding: '8px 18px',
            backgroundColor: 'var(--bright-af)',
            backdropFilter: 'blur(8px)'
            // filter: 'drop-shadow(var(--drop-shadow-2-2-16))'
        },
        profileTag: {
            fontSize: 'var(--sub-body)',
            padding: '8px 18px',
            backgroundColor: 'var(--med-green)',
            textColor: 'var(--bright-af)',
            filter: 'drop-shadow(var(--drop-shadow-2-2-16))'
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
                filter: typeStyles[type].filter
            }}
        >
            {text}
        </div>
    )
}