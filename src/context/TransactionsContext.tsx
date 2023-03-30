import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface TransactionsProps{
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string

}

interface TransactionsContextType{
    transactions: TransactionsProps[];
    fetchTransactions: (query?:string) => Promise<void>,
    createTransaction: (data: createTransactionProps) => Promise<void>,
    deleteItem: (id:number) => Promise<void>
}

interface createTransactionProps{
    description: string,
    price: number,
    category: string,
    type: 'income' | 'outcome'
}

interface TransactionsProviderProps{
    children: ReactNode
}

export const TransactionContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children} : TransactionsProviderProps){

    const [transactions, setTransactions] = useState<TransactionsProps[]>([])
    
    const fetchTransactions = useCallback(
        async (query?: string) => {
            console.log(query)
            const response = await api.get('transactions', {
            
                params:{
                    _sort: 'createdAt',
                    _order: 'desc',
                    q: query
                }
            })
            
            if(response.data == ''){
                alert('Não existe nas transações')
            }else{
                setTransactions(response.data)
            }

    },[])

    const createTransaction = useCallback(

        async (data:createTransactionProps) => {

            const {description, category, price, type} = data
    
            const response = await api.post('transactions', {
                description,
                price,
                category,
                type,
                createdAt: new Date()
            })
    
            setTransactions(state => [response.data, ...state])
        },
        []
    )

    async function deleteItem(id:number) {

        await api.delete(`transactions/${id}`)
        const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
        setTransactions(updatedTransactions);
    }

    useEffect(()=>{
       fetchTransactions()
    }, [fetchTransactions])


    return(
        <TransactionContext.Provider 
            value={{ 
                transactions, 
                fetchTransactions,
                createTransaction,
                deleteItem
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}