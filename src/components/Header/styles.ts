import tw from 'tailwind-styled-components'

export const HeaderContainer = tw.header`
    bg-gray-900
    pt-10 pb-[7.5rem]
`

export const HeaderContent = tw.div`
    w-full
    max-w-5xl
    m-auto
    px-6
    
    flex
    justify-between
    items-center
`

export const NewTransactionButton = tw.button`
    h-[50px]
    bg-green-500
    text-white
    font-bold
    px-6
    rounded-md
    cursor-pointer
    

    hover:bg-green-700
    hover:duration-200
`