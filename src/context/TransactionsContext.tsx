import { createContext, ReactNode, useEffect, useState } from "react";

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
}

export const TransactionContext = createContext({} as TransactionsContextType)

interface TransactionsProviderProps{
    children: ReactNode
}

export function TransactionsProvider({children} : TransactionsProviderProps){

    const [transactions, setTransactions] = useState<TransactionsProps[]>([])

    async function loadTransaction() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()

        console.log(data)
        setTransactions(data)
    }

    useEffect(()=>{
       loadTransaction()
    }, [])

    return(
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}