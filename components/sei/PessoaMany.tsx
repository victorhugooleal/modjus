import { useState } from 'react';
import { FormHelper } from "@/libs/form-support";
import styles from '@/PessoaMany.module.css';

interface Orgao {
    idOrgao: string; // ID do órgão
    sigla: string;   // Sigla do órgão
    nome: string;    // Nome completo do órgão
}

interface Lotacao {
    idLotacao : string;
    idLotacaoIni : string;
    sigla : string;
    nome : string;
    orgao: Orgao;
}

// Carregar dados de pessoa do Siga-Doc
async function loadPessoa(texto: string) {

   const retorno = await fetch(`/api/siga-rest/pessoas?texto=${encodeURI(texto)}`);
   const json = await retorno.json();
     
   // Filtrar lotações
   const allowedOrgaoIds = ['1', '2', '3'];
   const filteredList = json.list.filter((lotacao: Lotacao) =>  allowedOrgaoIds.includes(lotacao.orgao.idOrgao)
   );

   return filteredList; // Retorna apenas os itens que atendem ao critério

}

async function handleClick(Frm: FormHelper, name: string, setPopupData: (data: any[]) => void, setIsOpen: (data: boolean) => void)  {
    const sigla = Frm.data[name].sigla;
    const json = await loadPessoa(sigla);

    if (json.list && json.list.length > 0) {
        if (json.list.length > 1) {
     
            // Se houver mais de um item, atualize o estado para abrir o popup
            const PessoasMapeadas: { sigla: string, nome: string }[] = json.list.map((u: any) => ({ sigla: u.sigla, nome: u.nome}))
            setPopupData([{sigla: '', nome: '' }, ...PessoasMapeadas])
            setIsOpen(true);
        } else {
            const newData = { ...Frm.data };
            newData[name].sigla = json.list[0].sigla;
            newData[name].descricao = json.list[0].nome;
            if (Frm.setData) Frm.setData(newData);
        }
    }
}

interface PessoaProps {
    Frm: FormHelper;
    name: string;
}

export default function PessoaMany({ Frm, name }: PessoaProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [popupData, setPopupData] = useState<any[]>([]);
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    };

    const handleConfirmSelection = () => {
        const selectedItem = popupData.find(item => item.sigla === selectedValue);
        if (selectedItem) {
            const newData = { ...Frm.data };
            newData[name].sigla = selectedItem.sigla;
            newData[name].descricao = selectedItem.nome;
            if (Frm.setData) Frm.setData(newData);
        }
        setIsOpen(false);
    };

    return (
        <>
            <div className="col col-12">
                <div className="row">
                    <Frm.Input label="Sigla" name={`${name}.sigla`} width={3} />
                    <Frm.Button onClick={() => handleClick(Frm, name, setPopupData, setIsOpen)} >...</Frm.Button>
                    <Frm.Input label="Nome" name={`${name}.descricao`} width={""} />
                </div>
            </div>

            {popupData.length > 1 && isOpen && (
                <div className="styles.modal">
                    <div className="styles.modal-content">
                        <h2>Escolha um item</h2>
                        <select value={selectedValue} onChange={handleSelectChange}>
                            {popupData.map((item, index) => (
                                <option key={index} value={item.sigla}>
                                    {item.nome}
                                </option>
                            ))}
                        </select>
                        <button onClick={handleConfirmSelection}>Confirmar</button>
                        <button onClick={() => setIsOpen(false)}>Fechar</button>
                    </div>
                </div>
            )}  
        </>
    );
}
