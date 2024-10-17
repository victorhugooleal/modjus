import { FormHelper } from "@/libs/form-support"


// Carregar dados de CEP pelo viacep
async function loadUnidades() {
      const retorno = await fetch('/api/soapServerAxio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ }), // Add any required payload for your API
    });

    // Verifica se a requisição foi bem sucedida
    if (await !retorno.ok) {
      throw new Error(`Erro: ${retorno.status}`);
    }

   const json: Unidade[] = await retorno.json();
   console.log(await retorno.json);

   console.log(json);
   const oUnidadesCopy = json.map((unidade: Unidade) => ({
      id: unidade.Sigla[""],
      name: unidade.Descricao[""]
    }));
    return oUnidadesCopy;

}

async function handleClick(Frm: FormHelper) {
 // const sigla = Frm.data[name].sigla;  // Obtém a sigla do formulário
  try {
    const oUnidades = await loadUnidades();  // Carrega os dados da API SOAP
    console.log('Resposta da API SOAP:', oUnidades);

    // Aqui você pode preencher o campo nome do formulário com a resposta da API
    if (Frm.setData) { 
     Frm.setData(oUnidades);
    }

  } catch (error) {
    console.error('Erro ao carregar unidades:', error);
 
  }
}




export default function unidadeSel({ Frm, name }: { Frm: FormHelper, name: string}) {

    return <>
       { <p>Ola Mundo</p> }
       <Frm.Select label="Unidade " name="umaUnidade" options={oUnidades1} width={2} /> 
              <Frm.Button onClick={() => handleClick(Frm)} >Buscar</Frm.Button>
     </>
}