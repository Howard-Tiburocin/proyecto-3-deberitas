import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"

const ResidentCard = ({ url }) => {

    const [resident, getResident] = useFetch(url)

    useEffect(() => {
        getResident()
    }, [])

    console.log(resident)

    return (
        <article className="resident">
            <header className="resident__header">
                <img className="resident__image" src={resident?.image} alt="" />
                <div className="resident__status">
                    <span className={`resident__status__circle ${resident?.status}`}></span>
                    <span>{resident?.status}</span>
                </div>
            </header>
            <section>
                <h3>{resident?.name}</h3>
                <hr />
                <ul>
                    <li><span>Specie</span><span>{resident?.species}</span></li>
                    <li><span>Origin</span><span>{resident?.origin.name}</span></li>
                    <li><span>Episodes where appear</span><span></span>{resident?.episode.length}</li>
                </ul>

            </section>
        </article>
    )
}

export default ResidentCard