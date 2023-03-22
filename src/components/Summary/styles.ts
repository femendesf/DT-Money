import tw from 'twin.macro'
import styled from 'styled-components'


interface SummaryCardProps{
    variant?: 'green'
}

export const SummaryContainer = styled.section`
   ${tw` w-full
    max-w-5xl
    m-auto
    px-6

    grid
    grid-cols-3
    gap-8

    mt-[-5rem]`}

`

export const SummaryCard = styled.div<SummaryCardProps>`
    ${tw`bg-gray-600
    rounded-md
    p-8 `}

    
    header{
        ${tw`
            flex
            items-center
            justify-between
            text-gray-300
        `}
    }

    strong{
        ${tw`
            block
            mt-4
            text-[2rem]
        `}
    }

    ${props => props.variant === 'green' && tw`bg-green-700`}
`
