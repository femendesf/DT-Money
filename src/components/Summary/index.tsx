import { ArrowCircleUp,ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionsContext";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary(){

    const summary = useSummary()
    
    return(
        <SummaryContainer>
            <SummaryCard>
                <header className="flex">
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color='#00b37e'/>
                </header>

                <strong>{priceFormatter.format(summary.income)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color='#f75a68'/>
                </header>

                <strong>{priceFormatter.format(summary.outcome)}</strong>
            </SummaryCard>
            
            <SummaryCard variant="green">
                <header >
                    <span>Total</span>
                    <CurrencyDollar size={32} color='#ffff'/>
                </header>

                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
    
}