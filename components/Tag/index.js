import styles from "./Tag.module.css"

export default function Tag({text, size='default'}) {
    const sizeStyles = {
        tag: {
            padding: '4px 12px',
            margin: '0 2px',
            fontSize: 'var(--caption-1)',
            borderRadius: '16px',
        },
        filter: {
            fontSize: 'var(--sub-body)',
            padding: '8px 18px',
            marginRight: '8px',
            backgroundColor: 'var(--bright-af-75)',
        }
    }

    return (
        <div 
            className={styles.tag} 
            style={{
                fontSize: sizeStyles[size].fontSize,
                padding: sizeStyles[size].padding,
                marginRight: sizeStyles[size].marginRight,
                backgroundColor: sizeStyles[size].backgroundColor
            }}
        >
            {text}
        </div>
    )
}