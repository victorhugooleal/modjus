import { FormHelper } from "@/libs/form-support"

// Carregar dados de CEP pelo viacep
async function handleClick() {
    //console.log("Carregando unidades para a sigla:", sigla);

    const retorno = await fetch('/api/soapServerAxio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
      //body: JSON.stringify({  }), // Add any required payload for your API
    });

    // Verifica se a requisição foi bem sucedida
    if (!retorno.ok) {
      throw new Error(`Erro: ${retorno.status}`);
    }

    const json = await retorno.json();
    return json;

}


export default function callSoap({ Frm }: { Frm: FormHelper}) {
    return <>

        <Frm.Button onClick={() => handleClick()} >Buscar2</Frm.Button>
      </>
}