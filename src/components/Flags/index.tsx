import React from "react"
import * as styles from './index.styles';
import { StaticImage } from "gatsby-plugin-image";


export const Flags = () => (
    <div className={styles.flagsWrapperStyles}>
        <StaticImage
            src="../../assets/images/flags/britain.png"
            alt="britain"
            quality={100}
            className={styles.flagStyles}
        />
        <StaticImage
            src="../../assets/images/flags/france.png"
            alt="france"
            quality={100}
            className={styles.flagStyles}
        />
        <StaticImage
            src="../../assets/images/flags/germany.png"
            alt="germany"
            quality={100}
            className={styles.flagStyles}
        />
        <StaticImage
            src="../../assets/images/flags/italy.png"
            alt="italy"
            quality={100}
            className={styles.flagStyles}
        />
        <StaticImage
            src="../../assets/images/flags/russia.png"
            alt="russia"
            quality={100}
            className={styles.flagStyles}
        />
        <StaticImage
            src="../../assets/images/flags/spain.png"
            alt="spain"
            quality={100}
            className={styles.flagStyles}
        />
    </div>
)
