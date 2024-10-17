import axios from "axios";
import xml2js from 'xml2js';

// Verifica as credenciais, obtém os dados do usuário através do SIGA.
export async function POST(request) {
  try{
      // monta a requisição SOAP que buscará as permissões do usuárioc
      const requisicaoSoap = 
          `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:sei="Sei">
           <soapenv:Header/>
            <soapenv:Body>
               <sei:listarUnidades soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                 <SiglaSistema xsi:type="xsd:string">SEI-CORREICAO</SiglaSistema>
                 <IdentificacaoServico xsi:type="xsd:string">FormularioCorreicao</IdentificacaoServico>
               </sei:listarUnidades>
            </soapenv:Body>
          </soapenv:Envelope>`;

      // obtém as permissões
      const {data: respostaSEI} = await axios.post('https://sei-apresentacao.trf2.jus.br/sei/ws/SeiWS.php', requisicaoSoap); 
        
      // converte o xml em objeto
      const listarUnidadesResponse : LISTAR_UNIDADES_RESPONSE = await xml2js.parseStringPromise(respostaSEI);

      
    //  console.log(JSON.stringify(listarUnidadesResponse, null, 3));

  //  console.log(listarUnidadesResponse['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]);
      
    //  console.log(listarUnidadesResponse['wsdl:definitions']['wsdl:message'][0]);
 
      const parametros =  listarUnidadesResponse['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]['ns1:listarUnidadesResponse'][0]['parametros'][0]['item'];

  //    console.log(parametros);
     
      const unidades = parametros.map((u: any) => ({
        IdUnidade: u?.IdUnidade?.[0] || '',
        Sigla:  u?.Sigla?.[0] || '',
        Descricao:  u?.Descricao?.[0] || '',
        SinProtocolo:  u?.SinProtocolo?.[0] || '',
        SinArquivamento:  u?.SinArquivamento?.[0] || '',
        SinOuvidoria:  u?.SinOuvidoria?.[0] || '',
      }));
      
     
   //   console.log(unidades);

      // verifica se o usuário tem permissão.
       if (listarUnidadesResponse !== null) {
        
        // Envia o resultado como resposta JSON
        return (new Response(JSON.stringify(unidades), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }));
   
       };

  }catch(err){
     
    return new Response(JSON.stringify({ Erro: err }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
