import styled from "styled-components";
import tw from 'twin.macro'

import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
    ${tw`
        fixed
        w-[100vw]
        h-[100vh]
        inset-0
        bg-opacity-75
        bg-black
    `}
`
export const Content = styled(Dialog.Content)`
    ${tw`
        min-w-[32rem]
        rounded-md
        py-10
        px-12
        bg-gray-800

        fixed
        top-1/2
        left-1/2
        translate-x-[-50%]
        translate-y-[-50%]
        
    `}

    form{
        ${tw`
            mt-8
            flex
            flex-col
            gap-4
        `}

        input{
            ${tw`
                rounded-md
                bg-gray-900
                text-gray-300
                p-4
                placeholder:text-gray-500
                outline-none
            `}
        }

        button[type="submit"]{
            ${tw`
                h-[58px]
                bg-green-500
                text-white
                font-bold
                px-5
                rounded-md
                mt-6
                cursor-pointer

               disabled:opacity-60
               disabled:cursor-not-allowed
            `}

            &:not(:disabled){
                ${tw`
                    hover:bg-green-700
                    hover:duration-200
                `}
            }
        }
    }


`

export const CloseButton = styled(Dialog.Close)`
    ${tw`
        absolute
        top-6
        right-6
        cursor-pointer
        text-gray-500
    `}
`

export const TransactionType = styled(RadioGroup.Root)`
    ${tw`
        grid
        grid-cols-2
        gap-4
        mt-2
    `}
`

interface TransactionTypeButtonProps{
    variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    ${tw`
        bg-gray-700
        p-4
        flex
        items-center
        justify-center
        gap-2
        rounded-md
        cursor-pointer
        text-gray-300
        shadow-none
    `}

    svg{
        ${props => props.variant === 'income' ? tw`text-green-300` : tw`text-red-300`}
    }

    &[data-state='checked']{
        
        ${tw`
            text-white
        `}

        svg{
            ${tw`
                text-white
            `}
        }

        ${props => props.variant === 'income' ? tw`bg-green-500` : tw`bg-red-500`}
    }

    &[data-state='unchecked']{
        ${tw`
            hover:bg-gray-600
            hover:duration-200
        `}
    }
`
