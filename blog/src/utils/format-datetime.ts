import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDatetime(rawDate: string): string {
    const date = new Date(rawDate);

    return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
        locale: ptBR,
    });
}


export function formatRelativeDateFns(rawDate: string) {
    const date = new Date(rawDate);

    return formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
    });
}

const rawDate = "2023-10-01T12:00:00Z";
console.log(formatDatetime(rawDate)); // 01/10/2023 às 12h00
console.log(formatRelativeDateFns(rawDate)); // há 2 dias