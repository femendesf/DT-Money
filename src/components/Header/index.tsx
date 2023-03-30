import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg'

import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header(){
    return(
    <HeaderContainer>
        <HeaderContent>
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src={logoImg}/>
                <h1>DT-Money</h1>
                
            </div>
            
            
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                </Dialog.Trigger>

                <NewTransactionModal/>
            </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
    )
}