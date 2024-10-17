// app/components/MySelect.tsx
"use client"; // Indica que este componente é um componente de cliente

import { useEffect, useState } from 'react';
import { soapServerAxioTs } from  '../api/soapServerAxioTs'

export interface Option {
    id: string; // ou number, dependendo do seu caso
    name: string;
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

const UnidadeSelect: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await soapServerAxioTs();
        console.log(response);
        const json = JSON.stringify(response)
        const options[] = json.map((unidade: Unidade) => ({
            id: unidade.Sigla[""],
            name: unidade.Descricao[""]
          }));
         setOptions(options);
      } catch (error) {
        console.error('Erro ao carregar opções:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <select>
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default UnidadeSelect;
