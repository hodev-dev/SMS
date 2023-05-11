
interface Props {
    style?: string,
    onClick?: () => any
}

const PlusIconCircle = ({ style, onClick }: Props) => {
    return (
        <svg onClick={ onClick } className={ `w-6 h-6 cursor-pointer ${style ?? "text-green-600"}`
        } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg >
    )
}

export default PlusIconCircle