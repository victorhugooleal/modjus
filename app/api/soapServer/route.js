import soap from 'soap';

export async function POST(request) {
  const url = 'https://sei-apresentacao.trf2.jus.br/sei/controlador_ws.php?servico=sei';
  const args = { SiglaSistema: 'SEI-CORREICAO', IdentificacaoServico: 'FormularioCorreicao' };

  return new Promise((resolve) => {
    // Criação do cliente SOAP
    soap.createClient(url, (err, client) => {
      if (err) {
        resolve(new Response(JSON.stringify({ error: err.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }));
        return;
      }

      // Chamada ao método SOAP listarUnidades
      client.listarUnidades(args, (err, result) => {
        if (err) {
          olve(new Response(resJSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          }));
          return;
        }

        // Envia o resultado como resposta JSON
        resolve(new Response(JSON.stringify(result), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }));
      });
    });
  });
}
