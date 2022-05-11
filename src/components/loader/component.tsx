import React, { ReactElement } from 'react';
import styles from './styles.module.css';

export const Loader: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.multispinnercontainer}>
                <div className={styles.multispinner}>
                    <div className={styles.multispinner}>
                        <div className={styles.multispinner}>
                            <div className={styles.multispinner}>
                                <div className={styles.multispinner}>
                                    <div className={styles.multispinner}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}