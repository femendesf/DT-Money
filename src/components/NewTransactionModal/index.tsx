import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseButton, Content, Overlay, TranactionTypeButton, TransactionType } from "./styles";

export function NewTransactionModal(){
    return(
        <Dialog.Portal>
           <Overlay/>

            <Content>
                <Dialog.Title className="font-bold text-2xl">Nova transação</Dialog.Title>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>
                <form action="">
                    <input type="text" placeholder="Descrição" required/>
                    <input type="number" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>

                    <TransactionType>
                        <TranactionTypeButton variant="income" value="income">
                            <ArrowCircleUp size={24}/>
                            Entrada
                        </TranactionTypeButton>

                        <TranactionTypeButton variant="outcome" value="outcome">
                            <ArrowCircleDown size={24}/>
                            Saída
                        </TranactionTypeButton>
                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>
                
            </Content>
        </Dialog.Portal>
    )   
}