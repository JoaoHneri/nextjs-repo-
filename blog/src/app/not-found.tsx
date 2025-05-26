import { ErroMessage } from "@/components/ErroMessage";


export default function NotFoundPage() {
  return (
     <ErroMessage pageTitle="Página Não Encontrada"
      erroType="404"
      contentTitle="Página Não Encontrada"
      content="Desculpe, a página que você está procurando não existe ou foi movida."
      ></ErroMessage>
  );
}
