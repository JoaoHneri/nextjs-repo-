'use client'

import { ErroMessage } from "@/components/ErroMessage";
import { useEffect } from "react";

type RouteErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RouteErrorPage({error}: RouteErrorPageProps) {

  useEffect(() => {
    console.log("Error occurred:", error);
   }, [error]);

   
  return (
     <ErroMessage pageTitle="Ops! Algo deu errado"
      erroType="Error"
      contentTitle="Erro na página"
      content="Desculpe, ocorreu um erro ao carregar a página solicitada. Por favor, tente novamente mais tarde."
      ></ErroMessage>
  );
}
