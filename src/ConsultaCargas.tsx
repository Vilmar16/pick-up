import { useState } from "react";

const produtos = [
  // Grupo 1
  { nome: "Combustíveis", grupo: 1, sublimite: 120000, transporta: false, ncm: "2710.12.05 / 2710.19.29" },
  { nome: "Gás Em Geral", grupo: 1, sublimite: 120000, transporta: false, ncm: "2711.19.10 / 2711.11.00 / 2711.21.00" },

  // Grupo 2
  { nome: "Adubos e Fertilizantes", grupo: 2, sublimite: 100000, transporta: false, ncm: "3105.20.00 / 3102.10.10" },
  { nome: "Alumínio em Geral", grupo: 2, sublimite: 100000, transporta: false, ncm: "7601.20.00 / 7604.10.10 / 7604.29.90" },
  { nome: "Arroz (Carga Fechada)", grupo: 2, sublimite: 100000, transporta: false, ncm: "1006.10.92 / 1006.20.00 / 1006.30.11" },
  { nome: "Artigos Fotográficos", grupo: 2, sublimite: 100000, transporta: false, ncm: "3701.20.10 / 3703.10.00" },
  { nome: "Aço em Geral", grupo: 2, sublimite: 100000, transporta: true, ncm: "7214.30.00 / 7325.99.10" },
  { nome: "Açúcar", grupo: 2, sublimite: 100000, transporta: false, ncm: "1701.13.00 / 1701.14.00 / 1701.91.00" },
  { nome: "Bicicletas Suas Partes e Peças", grupo: 2, sublimite: 100000, transporta: false, ncm: "8712.00.10 / 8714.91.00 / 8714.99.90" },
  { nome: "Brinquedos", grupo: 2, sublimite: 100000, transporta: false, ncm: "9503.00.10 / 9503.00.99" },
  { nome: "Café Beneficiado", grupo: 2, sublimite: 100000, transporta: false, ncm: "0901.11.10" },
  { nome: "Café em Grãos", grupo: 2, sublimite: 100000, transporta: false, ncm: "0901.21.00" },
  { nome: "Calçados", grupo: 2, sublimite: 100000, transporta: false, ncm: "6402.99.90 / 6403.99.90" },
  { nome: "Cartuchos e Fitas para Impressoras", grupo: 2, sublimite: 100000, transporta: false, ncm: "8443.99.94 / 8443.99.95" },
  { nome: "Cereais", grupo: 2, sublimite: 100000, transporta: false, ncm: "1008.90.00 / 1008.99.00" },
  { nome: "Chocolate", grupo: 2, sublimite: 100000, transporta: false, ncm: "1806.90.00" },
  { nome: "Chumbo", grupo: 2, sublimite: 100000, transporta: false, ncm: "7801.10.00" },
  { nome: "Colheitadeiras", grupo: 2, sublimite: 100000, transporta: false, ncm: "8433.51.00" },
  { nome: "Condutores Elétricos", grupo: 2, sublimite: 100000, transporta: true, ncm: "8544.49.00 / 8544.42.00" },
  { nome: "Confecções", grupo: 2, sublimite: 100000, transporta: false, ncm: "6109.10.00 / 6203.42.00 / 6204.69.00" },
  { nome: "Couro Beneficiado", grupo: 2, sublimite: 100000, transporta: false, ncm: "4107.92.90" },
  { nome: "Couro Cru", grupo: 2, sublimite: 100000, transporta: false, ncm: "4101.20.10 / 4101.20.90" },
  { nome: "Couro Wet Blue", grupo: 2, sublimite: 100000, transporta: false, ncm: "4104.21.00 / 4104.22.00" },
  { nome: "Cultivadores Motorizados", grupo: 2, sublimite: 100000, transporta: false, ncm: "8432.20.00" },
  { nome: "Defensivos Agrícolas", grupo: 2, sublimite: 100000, transporta: false, ncm: "3808.93.23 / 3808.93.29 / 3808.94.19" },
  { nome: "Embutidos", grupo: 2, sublimite: 100000, transporta: false, ncm: "1601.00.10 / 1601.00.90" },
  { nome: "Empilhadeiras", grupo: 2, sublimite: 100000, transporta: true, ncm: "8427.10.10 / 8427.10.90" },
  { nome: "Estanho", grupo: 2, sublimite: 100000, transporta: false, ncm: "8001.10.00" },
  { nome: "Feijão (Carga Fechada)", grupo: 2, sublimite: 100000, transporta: false, ncm: "0713.33.10 / 0713.33.90" },
  { nome: "Fibras Ópticas", grupo: 2, sublimite: 100000, transporta: false, ncm: "9001.10.00" },
  { nome: "Fios Têxteis", grupo: 2, sublimite: 100000, transporta: false, ncm: "5402.47.00 / 5402.33.00" },
  { nome: "Geradores", grupo: 2, sublimite: 100000, transporta: false, ncm: "8502.13.19 / 8502.20.19" },
  { nome: "Grãos em Geral", grupo: 2, sublimite: 100000, transporta: false, ncm: "1001.99.00 / 1005.90.90 / 1008.90.00" },
  { nome: "Implementos Agrícolas", grupo: 2, sublimite: 100000, transporta: true, ncm: "8432.80.00 / 8432.90.00" },
  { nome: "Latão", grupo: 2, sublimite: 100000, transporta: false, ncm: "7407.29.10" },
  { nome: "Leite", grupo: 2, sublimite: 100000, transporta: false, ncm: "0401.10.10 / 0402.21.10 / 0402.99.20" },
  { nome: "Leite Condensado", grupo: 2, sublimite: 100000, transporta: false, ncm: "0402.99.20" },
  { nome: "Leite em Pó", grupo: 2, sublimite: 100000, transporta: false, ncm: "0402.21.10 / 0402.29.10" },
  { nome: "Milho em Grãos", grupo: 2, sublimite: 100000, transporta: false, ncm: "1005.90.90" },
  { nome: "Máquinas Agrícolas Automotrizes", grupo: 2, sublimite: 100000, transporta: false, ncm: "8701.90.00" },
  { nome: "Máquinas Agrícolas Pesadas", grupo: 2, sublimite: 100000, transporta: false, ncm: "8429.52.19 / 8429.59.00" },
  { nome: "Máquinas e Implementos Agrícolas", grupo: 2, sublimite: 100000, transporta: false, ncm: "8433.20.00 / 8432.80.00" },
  { nome: "Máquinas Fotográficas", grupo: 2, sublimite: 100000, transporta: false, ncm: "9006.59.00" },
  { nome: "Níquel", grupo: 2, sublimite: 100000, transporta: false, ncm: "7502.10.10 / 7502.10.90" },
  { nome: "Pilhas / Baterias", grupo: 2, sublimite: 100000, transporta: false, ncm: "8506.10.00 / 8507.10.00" },
  { nome: "Produtos Alimentícios em Geral", grupo: 2, sublimite: 100000, transporta: false, ncm: "2106.90.90" },
  { nome: "Produtos Siderúrgicos", grupo: 2, sublimite: 100000, transporta: false, ncm: "7210.49.10 / 7225.99.00" },
  { nome: "Pás Carregadeiras", grupo: 2, sublimite: 100000, transporta: false, ncm: "8429.51.90" },
  { nome: "Ração Animal e Similares", grupo: 2, sublimite: 100000, transporta: false, ncm: "2309.10.00 / 2309.90.90" },
  { nome: "Retroescavadeira", grupo: 2, sublimite: 100000, transporta: false, ncm: "8429.59.00" },
  { nome: "Sementes", grupo: 2, sublimite: 100000, transporta: false, ncm: "1209.91.00 / 1209.99.90" },
  { nome: "Software", grupo: 2, sublimite: 100000, transporta: false, ncm: "8523.49.10 / 8523.49.90" },
  { nome: "Soja", grupo: 2, sublimite: 100000, transporta: false, ncm: "1201.90.00" },
  { nome: "Suplemento Alimentar", grupo: 2, sublimite: 100000, transporta: false, ncm: "2106.90.10 / 2106.90.90" },
  { nome: "Tecidos", grupo: 2, sublimite: 100000, transporta: false, ncm: "5208.52.00 / 5512.19.00" },
  { nome: "Toner", grupo: 2, sublimite: 100000, transporta: false, ncm: "8443.99.99" },
  { nome: "Tratores em Geral", grupo: 2, sublimite: 100000, transporta: false, ncm: "8701.20.00 / 8701.90.00" },
  { nome: "Zinco", grupo: 2, sublimite: 100000, transporta: false, ncm: "7901.11.00" },
  { nome: "Óleos Comestíveis", grupo: 2, sublimite: 100000, transporta: false, ncm: "1507.10.00 / 1512.19.10 / 1515.21.00" },

  // Grupo 3
  { nome: "Artigos de Papelaria", grupo: 3, sublimite: 70000, transporta: false, ncm: "4820.20.00 / 4820.90.00" },
  { nome: "Artigos de Perfumaria", grupo: 3, sublimite: 70000, transporta: false, ncm: "3307.90.00 / 3305.20.00" },
  { nome: "Artigos Escolares", grupo: 3, sublimite: 70000, transporta: true, ncm: "4820.20.00 / 9608.10.00" },
  { nome: "Autopeças", grupo: 3, sublimite: 70000, transporta: true, ncm: "8708.29.99 / 8482.10.90" },
  { nome: "Baterias Automotivas", grupo: 3, sublimite: 70000, transporta: false, ncm: "8507.10.00 / 8507.20.00" },
  { nome: "Bebidas Destiladas", grupo: 3, sublimite: 70000, transporta: false, ncm: "2208.20.00 / 2208.60.00" },
  { nome: "Cassiterita", grupo: 3, sublimite: 70000, transporta: false, ncm: "2603.00.00" },
  { nome: "Cervejas", grupo: 3, sublimite: 70000, transporta: false, ncm: "2203.00.00" },
  { nome: "Cosméticos", grupo: 3, sublimite: 70000, transporta: false, ncm: "3304.99.90 / 3305.10.00" },
  { nome: "Câmaras de Ar", grupo: 3, sublimite: 70000, transporta: false, ncm: "4016.99.99 / 4016.20.00" },
  { nome: "Diisocianato de Tolueno", grupo: 3, sublimite: 70000, transporta: false, ncm: "2929.29.00" },
  { nome: "Dióxido de Titânio", grupo: 3, sublimite: 70000, transporta: false, ncm: "3206.11.00 / 3206.19.00" },
  { nome: "Fraldas Descartáveis", grupo: 3, sublimite: 70000, transporta: false, ncm: "9619.00.00" },
  { nome: "Instrumentos Musicais", grupo: 3, sublimite: 70000, transporta: true, ncm: "9202.90.00 / 9209.94.00" },
  { nome: "Isotônicos", grupo: 3, sublimite: 70000, transporta: false, ncm: "2202.99.90 / 2202.99.10" },
  { nome: "Molibdênio", grupo: 3, sublimite: 70000, transporta: false, ncm: "2615.00.00" },
  { nome: "Papel Offset (Sulfite)", grupo: 3, sublimite: 70000, transporta: false, ncm: "4802.55.99 / 4802.55.10" },
  { nome: "Perfumes", grupo: 3, sublimite: 70000, transporta: false, ncm: "3303.00.10 / 3303.00.20" },
  { nome: "Poliestireno", grupo: 3, sublimite: 70000, transporta: false, ncm: "3903.30.00" },
  { nome: "Polietileno", grupo: 3, sublimite: 70000, transporta: false, ncm: "3901.10.00 / 3901.90.00" },
  { nome: "Polipropileno", grupo: 3, sublimite: 70000, transporta: false, ncm: "3902.10.00 / 3902.90.00" },
  { nome: "Poliuretano", grupo: 3, sublimite: 70000, transporta: false, ncm: "3909.50.00" },
  { nome: "Produtos de Higiene e Limpeza", grupo: 3, sublimite: 70000, transporta: false, ncm: "3401.30.00 / 3402.90.00" },
  { nome: "Produtos de Limpeza", grupo: 3, sublimite: 70000, transporta: false, ncm: "3401.30.00 / 3402.90.00" },
  { nome: "Produtos Químicos", grupo: 3, sublimite: 70000, transporta: false, ncm: "3824.90.00 / 2901.10.00" },
  { nome: "PVC", grupo: 3, sublimite: 70000, transporta: false, ncm: "3916.10.00 / 3904.90.00" },
  { nome: "Refrigerantes", grupo: 3, sublimite: 70000, transporta: false, ncm: "2202.10.00 / 2202.99.00" },
  { nome: "Rolamentos", grupo: 3, sublimite: 70000, transporta: true, ncm: "8482.10.90 / 8482.99.90" },
  { nome: "Silício", grupo: 3, sublimite: 70000, transporta: false, ncm: "2804.69.90" },
  { nome: "Tintas, Corantes, Pigmentos e Similares", grupo: 3, sublimite: 70000, transporta: false, ncm: "3208.10.00 / 3208.90.00" },
  { nome: "Tolueno Refinado", grupo: 3, sublimite: 70000, transporta: false, ncm: "2902.30.00" },
  { nome: "Vernizes", grupo: 3, sublimite: 70000, transporta: false, ncm: "3209.10.00" },
  { nome: "Vinhos", grupo: 3, sublimite: 70000, transporta: false, ncm: "2204.21.00 / 2204.29.00" },
  { nome: "Óleos Lubrificantes", grupo: 3, sublimite: 70000, transporta: false, ncm: "2710.19.23 / 2710.19.27" },

  // Grupo 4
  { nome: "Aparelho De Telefone (Exceto Celular)", grupo: 4, sublimite: 50000, transporta: false, ncm: "8517.12.11" },
  { nome: "Aparelhos De Ar-Condicionado", grupo: 4, sublimite: 50000, transporta: false, ncm: "8415.10.20" },
  { nome: "Cobre Em Geral", grupo: 4, sublimite: 50000, transporta: false, ncm: "7403.11.00 / 7403.19.00" },
  { nome: "Compact Disc (CD)", grupo: 4, sublimite: 50000, transporta: false, ncm: "8523.40.10" },
  { nome: "Impressoras", grupo: 4, sublimite: 50000, transporta: false, ncm: "8443.31.00" },
  { nome: "Máquinas Escritório, Copiadoras, Comp. Eletrônicos", grupo: 4, sublimite: 50000, transporta: false, ncm: "8471.30.12 / 8471.60.10" },
  { nome: "Pneus", grupo: 4, sublimite: 50000, transporta: false, ncm: "4011.10.00 / 4011.20.00" },
  { nome: "Produtos Fonográficos (Fitas Cassete E CD's)", grupo: 4, sublimite: 50000, transporta: false, ncm: "8523.51.00 / 8523.69.00" },
  { nome: "Relógios", grupo: 4, sublimite: 50000, transporta: false, ncm: "9102.11.00 / 9102.12.00" },

  // Grupo 5
  { nome: "Matéria-Prima Para Fabricação De Medicamentos", grupo: 5, sublimite: 30000, transporta: false, ncm: "2933.39.90" },
  { nome: "Medicamentos Em Geral", grupo: 5, sublimite: 30000, transporta: false, ncm: "3004.90.59" },
  { nome: "Produtos Farmacêuticos Em Geral", grupo: 5, sublimite: 30000, transporta: false, ncm: "3003.90.90" },
  { nome: "Vitaminas", grupo: 5, sublimite: 30000, transporta: false, ncm: "2106.90.99" },

  // Grupo 6
  { nome: "Telefones Celulares Seus Acessórios E Baterias", grupo: 6, sublimite: 20000, transporta: false, ncm: "8517.12.00 / 8517.70.90" },

  // Grupo 7
  { nome: "Computadores E Seus Periféricos", grupo: 7, sublimite: 0, transporta: false, ncm: "8471.30.12 / 8471.50.00" },
  { nome: "Notebooks Em Geral", grupo: 7, sublimite: 0, transporta: false, ncm: "8471.30.12" },
  { nome: "Tablets E iPads", grupo: 7, sublimite: 0, transporta: false, ncm: "8471.30.12" },
  { nome: "Eletrodomésticos", grupo: 7, sublimite: 0, transporta: true, ncm: "8415.20.00 / 8516.79.90" },
  { nome: "Eletroeletrônicos", grupo: 7, sublimite: 0, transporta: true, ncm: "8543.70.99" },
];

type Produto = typeof produtos[number];

const sublimitesGrupo: Record<number, number> = {
  1: 120000,
  2: 100000,
  3: 70000,
  4: 50000,
  5: 30000,
  6: 20000,
  7: 0,
};

const nomeGrupo = (grupo: number) => {
  const nomes: Record<number, string> = {
    1: "Grupo 1",
    2: "Grupo 2",
    3: "Grupo 3",
    4: "Grupo 4",
    5: "Grupo 5",
    6: "Grupo 6",
    7: "Grupo 7",
  };
  return nomes[grupo] || `Grupo ${grupo}`;
};
export default function ConsultaCargas() {
  const [filtro, setFiltro] = useState("");
  const [mostrarSoTransportaveis, setMostrarSoTransportaveis] = useState(false);

  // Filtra pelo nome, pelos NCMs e pelo status "transporta" se ativo
  const produtosFiltrados = produtos.filter((p) => {
    const filtroMinusculo = filtro.toLowerCase().trim();
    if (!filtroMinusculo && !mostrarSoTransportaveis) return true;

    const nomeInclui = p.nome.toLowerCase().includes(filtroMinusculo);

    const ncmInclui = p.ncm
      .split("/")
      .some((codigo) => codigo.trim().toLowerCase().includes(filtroMinusculo));

    const statusInclui = !mostrarSoTransportaveis || p.transporta;

    return (nomeInclui || ncmInclui) && statusInclui;
  });

  // Agrupa os produtos filtrados por grupo
  const grupos = produtosFiltrados.reduce((acc, produto) => {
    if (!acc[produto.grupo]) acc[produto.grupo] = [];
    acc[produto.grupo].push(produto);
    return acc;
  }, {} as Record<number, Produto[]>);

  return (
    <div className="px-8 py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Consulta de Cargas Transportáveis
      </h1>

      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Digite o nome ou NCM do produto..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-md"
        />

        <button
          onClick={() => setMostrarSoTransportaveis((old) => !old)}
          className={`px-4 py-3 rounded-md font-semibold ${
            mostrarSoTransportaveis
              ? "bg-green-600 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {mostrarSoTransportaveis ? "Mostrar todos" : "Mostrar só transportáveis"}
        </button>
      </div>

      {Object.keys(grupos).length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          Nenhum produto encontrado.
        </p>
      )}

      {Object.entries(grupos).map(([grupoNum, produtosGrupo]) => {
        const grupo = Number(grupoNum);
        const sublimite = sublimitesGrupo[grupo] ?? 0;

        return (
          <section key={grupoNum} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">
              {nomeGrupo(grupo)} - Sublimite R$ {sublimite.toLocaleString("pt-BR")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {produtosGrupo.map((produto, i) => (
                <div
                  key={i}
                  className={`border rounded-md p-5 shadow-md ${
                    produto.transporta ? "border-green-400" : "border-red-400"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2">{produto.nome}</h3>
                  <p>
                    <strong>NCM(s):</strong> {produto.ncm}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    <span
                      className={
                        produto.transporta
                          ? "text-green-700 font-bold"
                          : "text-red-700 font-bold"
                      }
                    >
                      {produto.transporta ? "Transporta" : "Não transporta"}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}