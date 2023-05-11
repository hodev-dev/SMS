
const MinusIcon = (props) => {
    return (
        <div className={ "border cursor-pointer" } { ...props }>
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
        </div>
    )
}

export default MinusIcon