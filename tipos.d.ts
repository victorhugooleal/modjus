type AxiosInstance = import('axios').AxiosInstance;

interface API {
    req: import('next').NextApiRequest;
    res: import('next').NextApiResponse;
}

  interface Field {
    [key: string]: string;
    $: { "xsi:type": string };
  }
  
  interface Unidade {
    IdUnidade: Field;
    Sigla: Field;
    Descricao: Field;
    SinProtocolo: Field;
    SinArquivamento: Field;
    SinOuvidoria: Field;
  }
  // Interface para representar a resposta do SOAP
  interface LISTAR_UNIDADES_RESPONSE {
    'SOAP-ENV:Envelope' : {
        'SOAP-ENV:Body' : {
             parametros: {
             item: Unidade[];
             };
         }[]     
      }
  }  


  export interface Option {
    id: string; // ou number, dependendo do seu caso
    name: string;
  }




