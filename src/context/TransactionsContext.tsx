import { createContext, ReactNode, useEffect, useState } from "react";
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
    
    async function fetchTransactions(query?: string) {

        const response = await api.get('transactions', {
            params:{
                _sort: 'createdAt',
                _order: 'desc',
                q: query
            }
        })
      
        setTransactions(response.data)
    }

    async function createTransaction(data:createTransactionProps) {

        const {description, category, price, type} = data

        const response = await api.post('transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        })

        setTransactions(state => [response.data, ...state])
    }

    async function deleteItem(id:number) {

        const response = await api.delete(`transactions/${id}`)
        
        setTransactions(state => [response.data, ...state ])
    }

    useEffect(()=>{
       fetchTransactions()
    }, [])

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