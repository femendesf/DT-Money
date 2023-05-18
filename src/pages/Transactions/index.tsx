import { Trash } from "phosphor-react";
import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../context/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { PriceHightLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
    const {transactions, deleteItem} = useContextSelector(TransactionContext, (context) => {
        return {
            transactions: context.transactions,
            deleteItem: context.deleteItem
        }
    })

    return(
        <div>
            <Header/>
            <Summary/>
            
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                        <tbody>
                            {transactions.map(transactions => {
                                return(
                                    <tr key={transactions.id}>
                                        <td width='50%'>{transactions.description}</td>
                                        <td>
                                            <PriceHightLight variant={transactions.type}>
                                                {transactions.type === 'outcome' && <span>- </span>}
                                                {priceFormatter.format(transactions.price)}
                                            </PriceHightLight>
                                        </td>
                                        <td>{transactions.category}</td>
                                        <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
                                        <td>
                                            <button onClick={() => deleteItem(transactions.id)}>
                                                <Trash/>
                                            </button> 
                                        </td>
                                        
                                    </tr>
                                )
                            })}
                           
                        </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}

