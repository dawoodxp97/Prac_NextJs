import styles from "./../../styles/Skds.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { skds: data}
    }
}


const Skds = ({skds}) => {
    return ( 
        <div>
            <h1>Crew Details</h1>
            {skds.map(skd => (
                    <Link href={'/skds/' + skd.id} key={skd.id}>
                        <a className={styles.single}>
                            <h3>{skd.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
}
 
export default Skds;