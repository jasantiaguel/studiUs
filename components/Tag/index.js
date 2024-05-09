import styles from "./Tag.module.css"
import Link from "next/link"

export default function Tag({
      text, 
      type='tag', 
      selectedTags=[],
      setSelectedTags
    }) {

    function handleClick() {
      setSelectedTags(tags => {
        if (tags.includes(text)) {
          return tags.filter(t => t !== text);
        } else {
          return [...tags, text];
        }
      });
    }
    

    const typeStyles = {
        tag: {
            padding: '4px 12px',
            fontSize: 'var(--caption-1)',
            borderRadius: '16px',
            textColor: 'var(--dark-green)'
        },
        selected: {
            padding: '4px 12px',
            fontSize: 'var(--caption-1)',
            borderRadius: '16px',
            textColor: 'var(--dark-green)',
            backgroundColor: 'var(--bright-af)',
        },
        selectedSched: {
            padding: '4px 12px',
            fontSize: 'var(--caption-1)',
            borderRadius: '16px',
            textColor: 'var(--bright-af)',
            backgroundColor: 'var(--med-green)',
        },
        filter: {
            fontSize: 'var(--sub-body)',
            padding: '8px 18px',
            backgroundColor: 'var(--bright-af)',
        },
        homeFilter: {
            fontSize: 'var(--sub-body)',
            padding: '8px 18px',
            backgroundColor: 'var(--bright-af)',
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
        <>
        {
          type === "filter" ?
          <Link 
            className={styles.filterLink}
            href={{ pathname: "/search/results", query: { subject: text } }}
            style={{textDecoration: 'none', color: 'inherit'}}
            onClick={handleClick}
          >
            <div 
              className={styles.tag} 
              style={{
                fontSize: typeStyles[type].fontSize,
                padding: typeStyles[type].padding,
                margin: typeStyles[type].margin,
                backgroundColor: selectedTags.includes(text) ? 'var(--med-green)' : typeStyles[type].backgroundColor,
                color: selectedTags.includes(text) ? 'var(--bright-af)' : typeStyles[type].color,
                filter: typeStyles[type].filter
              }}
            >
              {text}
            </div>
          </Link>
          :
          type === "homeFilter" ?
          <div 
            className={styles.tag} 
            style={{
              fontSize: typeStyles[type].fontSize,
              padding: typeStyles[type].padding,
              margin: typeStyles[type].margin,
              backgroundColor: selectedTags.includes(text) ? 'var(--med-green)' : typeStyles[type].backgroundColor,
              color: selectedTags.includes(text) ? 'var(--bright-af)' : typeStyles[type].color,
              filter: typeStyles[type].filter
            }}
            onClick={handleClick}
          >
            {text}
          </div>
          :
          type === "selected" ?
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
          :
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
        }
        </>
    )
}