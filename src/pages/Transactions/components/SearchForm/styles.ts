import styled from "styled-components";
import tw from "twin.macro"

export const SearchFormContainer = styled.form`
    ${tw`
        flex
        gap-4
    `}

    input{
        ${tw`
            flex-1
            rounded-md
            bg-gray-900
            text-gray-300
            p-4
            border-none
            outline-none
            placeholder:text-gray-500
           
        `}
    }

    button{
        ${tw`
            flex
            items-center
            gap-3

            p-4
            border-solid
            border
            border-green-300
            text-green-300
            rounded-md
            font-bold

            hover:bg-green-500
            hover:border-green-500
            hover:text-white
            hover:duration-200
            
        `}

    }

`