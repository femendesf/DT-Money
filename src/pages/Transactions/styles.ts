import tw from 'twin.macro'
import styled from 'styled-components'

export const TransactionsContainer = styled.main`
    ${tw`
        w-full
        max-w-5xl
        px-6
    `}
    
    margin: 4rem auto 0;
`
export const TransactionsTable =  styled.table`
    ${tw`
        w-full
        border-separate
        mt-6
        border-spacing-y-2
    `}

    td{
        ${tw`
            
            py-5
            px-8
            bg-gray-700

            first:rounded-l-md
            last:rounded-r-md
        `}

        button{
            ${tw`
                hover:text-red-400
            `}
        }

        
    }
    
`

interface PriceHightLightProps{
    variant: 'income' | 'outcome'
}

export const PriceHightLight = styled.span<PriceHightLightProps>`
    ${props => props.variant === 'income' ? tw`text-green-300` : tw`text-red-300`}
`