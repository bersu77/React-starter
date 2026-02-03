import btnBg from '../assets/img/btnBg.png'

const baseClass = 'btn group relative z-1 bg-transparent cursor-pointer min-h-12 lg:min-h-14'

export default function Button({ children, href = "#", className = "min-w-40 md:min-w-42", onClick }) {
    if (onClick) {
        return (
            <button type="button" onClick={onClick} className={`${baseClass} ${className}`}>
                {children}
                <img src={btnBg} className='absolute top-0.5 left-0 group-hover:saturate-200 transition-all duration-500 -z-1 size-[calc(100%+0px)] select-none pointer-events-none' alt="" />
            </button>
        )
    }
    return (
        <a href={href} className={`${baseClass} ${className}`}>
            {children}
            <img src={btnBg} className='absolute top-0.5 left-0 group-hover:saturate-200 transition-all duration-500 -z-1 size-[calc(100%+0px)] select-none pointer-events-none' alt="" />
        </a>
    )
}
