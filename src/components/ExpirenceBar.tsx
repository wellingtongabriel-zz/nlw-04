import styles from '../styles/components/ExpirenceBar.module.css';

export function ExpirenceBar() {
    return (

        <header className={ styles.expirenceBar }>

            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />

                <span className={ styles.currentExpirence } style={{ left: '50%' }}>
                    300 xp
                </span>
            </div>
            <span>600 px</span>

        </header>

    );
}