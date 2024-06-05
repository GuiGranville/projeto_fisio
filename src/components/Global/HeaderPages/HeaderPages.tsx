import './styleHeaderPages.scss'

interface HeaderPagesProps{
    title: string
}
export function HeaderPages(props: HeaderPagesProps){

    return(
        <div className="headerPages">
            <h1>{props.title}</h1>
        </div>
    )
}
