# Cidade Barricada — histórico do projeto

Resumo de tudo o que foi pedido e feito na conversa original (28/10/2026), para continuar o desenvolvimento por aqui.

- Versão original (artifact no claude.ai): https://claude.ai/artifact/VHxsMdLxobYoE9uc5S273f — versão 12, a mesma que está em `index.html`
- Save no aparelho: `localStorage`, chave `cidade-barricada-v2`

## Pedidos, em ordem

1. Criar um jogo de defesa de cidade contra zumbis, no estilo dos jogos de "cidade atrás do portão".
2. Mais eventos.
3. Gráficos melhores.
4. Ritmo mais lento: a renda principal vem dos negócios, não de matar zumbis. Mais armas. Fichas mais difíceis de conseguir e com função de moeda especial (repetir saques, receber recompensas, acelerar obras). Saques com intervalos maiores e mais difíceis.
5. Arte de referência enviada (zumbis, sobreviventes, prédios com ícone no telhado) e telas de jogo (defesa do portão em 3 níveis, expedição de picape, HUD, painel de moradores com personalidade e estrelas de nível, cidade com obra em andamento, caixas carregadas e botões de alerta "!").
6. Metade dos zumbis e sobreviventes chegando, com o dobro de moedas e caixas por zumbi. Zumbis vindo da esquerda, zona do portão maior. Portão e cidade num cenário só: zumbis à esquerda, cidade crescendo para a direita. Sobrevivente sem casa espera do lado de fora até virar zumbi ou até você construir uma casa.
7. Escolher antes se a obra é **comércio ou moradia**, com opções limitadas a cada vez. Mais tipos de casa e de comércio. **Centro de Treino**: não dá dinheiro, treina um morador por vez, com nível máximo 10 e mais demora a cada nível. **Aceitar ou recusar** quem chega e **expulsar** morador.
8. Saques mais difíceis, mais recompensa e mais tempo para voltar. Prédios mais diferentes entre si, não só pelo ícone do telhado.
9. Correção: não dava mais para construir (acabavam em 14 terrenos) → **100 terrenos**.
10. Economia mais lenta para o jogo durar: renda dos negócios × 0,6. **Banco**: +2,5% nas vendas por funcionário comum e +5% por funcionário com emprego dos sonhos (Varejo).
11. Virar app instalável (feito aqui: PWA em `index.html` + `manifest.webmanifest` + `sw.js`).

## Como o jogo funciona hoje

- **Mundo:** tela de lado. À esquerda fica a zona de fora com os zumbis, no meio o portão e à direita a cidade, com 100 terrenos (4 abertos no começo; os outros você compra).
- **Dia e noite:** o dia dura 240 s e a noite 90 s. À noite vêm mais zumbis. Às vezes há lua de sangue.
- **Zumbis:**

  | Tipo | Vida | Moedas | Detalhe |
  |---|---|---|---|
  | comum | 3 | 2 | — |
  | corredor | 2 | 2 | — |
  | brutamontes | 16 | 8 | — |
  | cuspidor | 5 | 4 | ataca de longe |
  | de capacete | 5 | 4 | capacete com 6 de vida |
  | inchado | 6 | 4 | explode com 18 de dano |
  | dourado | 6 | 80 | foge |
  | gigante | 120 | 240 | — |

- **Armas:**
  - Compradas com moedas: pistola, revólver, escopeta, besta (atravessa), rifle, lança-chamas, metralhadora, lança-granadas e bazuca.
  - Compradas com fichas: canhão de gelo (8 fichas, congela) e desintegrador (15 fichas, raio em cadeia).
- **Defesa:** treino de tiro, pente estendido, portão reforçado (3 visuais), torre automática e arame farpado.
- **Prédios:**
  - Moradias: casa, acampamento, trailer, bunker, caixa d'água, contêiner, farol e casa na árvore (custa fichas).
  - Negócios nas categorias Comida, Varejo, Serviço, Lazer e Defesa:
    - Comida: lanchonete, pizzaria, café, suco, padaria;
    - Varejo: mercadinho, roupas, ferragens, livraria, sapataria, presentes;
    - Serviço: oficina, lavanderia, barbearia;
    - Lazer: fliperama, cinema, bar, sorveteria, galeria, patins.
  - Especiais: depósito (gera caixas), serralheria (conserta o portão), clínica, quartel (+8% de dano por funcionário), armaria (libera armas), Centro de Treino, rádio (traz mais gente) e banco.
- **Moradores:** cada um tem uma personalidade:

  | Personalidade | Emprego dos sonhos |
  |---|---|
  | Chef | Comida |
  | Negociante | Varejo |
  | Faz-tudo | Serviço |
  | Artista | Lazer |
  | Combatente | Defesa |

  Quem trabalha no emprego dos sonhos rende mais. Heróis dão bônus nos saques: Sargento Rocha, Doutora Lima, Batedora Kiki, Atiradora Nina e Mecânico Zé.
- **Negócios:** cada um tem 3 produtos. Você abastece com caixas de mercadoria e recolhe as moedas.
- **Saques:**

  | Local | Nível |
  |---|---|
  | Posto | 1 |
  | Farmácia | 2 |
  | Supermercado | 4 |
  | Ferragens | 6 |
  | Hospital | 8 |
  | Shopping | 10 |

  Você vai de picape e cada local tem um tempo de espera para repetir. Também há rotas de suprimentos.
- **Eventos:** lançamento aéreo, zumbi dourado, comerciante, gigante, lua de sangue, neblina, feira e pedidos de moradores.
- **Fichas:** bônus diário de +2, uma ficha a cada nível par e quedas raras. Servem para repetir saques, acelerar obras e comprar armas e prédios especiais.
- **Missões:** 3 ao mesmo tempo, sorteadas (matar zumbis, salvar pessoas, abastecer, construir…).
- **Progresso offline:** até 2 h de produção enquanto o jogo está fechado.
- **Controles:**
  - no celular: toque nos zumbis para atirar e arraste a rua para mover a câmera;
  - no teclado: setas movem a câmera, R recarrega e 1–9 trocam de arma.

## Desenvolvimento por esta conversa (30/10/2026)

O jogo continua **100% offline**, sem login, para jogar com calma.

1. **App instalável:** PWA no GitHub Pages, botões numa faixa própria no celular deitado, e atualizações que chegam ao fechar e abrir o app.
2. **Backup do save:** em Mais → Backup, gera um código para copiar ou um arquivo para salvar, e restaura a cidade num celular novo.
3. **Clima e estações:**
   - Uma estação nova a cada 6 dias de jogo.
   - Chuva: poças e zumbis mais lentos.
   - Tempestade: raios que acertam zumbis.
   - Calor: sorvete, suco e açaí vendem mais.
   - Neve: pegadas, cachecol nos moradores e café vendendo mais.
   - Folhas caindo no outono e pétalas na primavera.
   - **Festa Junina, Halloween e Natal** pelo calendário do celular, com enfeites, zumbis fantasiados e um presente por ano.
4. **Construções:**
   - Moradias: ônibus escolar, vagão de trem, barco no seco, domo geodésico, igreja antiga e tenda de circo.
   - Comércios: food truck, açaí, feira livre, bicicletaria, pet shop, floricultura, academia, estúdio de tatuagem e estúdio de música.
   - **Decoração:** praça, jardim, fonte, mural, parquinho, coreto, estátua, horta comunitária e laguinho de pesca. Elas dão **alegria**, e cidade alegre vende mais.
5. **Armas:** estilingue, lançador de pregos, canhão de pipoca, pistola de cola e lança-abóboras.
6. **Defesas:** holofote, minas, cerca elétrica e espantalho.
7. **Mascotes:** cão de guarda e gato que traz caixas. Precisam de um pet shop com funcionários.
8. **Eventos:**
   - Caravana de comerciantes.
   - Horda migratória.
   - Apagão.
   - Sobreviventes famosos, com bônus próprios.
   - Zumbi músico.
9. **Álbum de zumbis** (com prêmios por estrela), **Diário da cidade** (8 capítulos) e **Conquistas e recordes** (14 medalhas de bronze, prata e ouro).
10. **Minijogos:**
    - Fliperama: chuva de meteoros.
    - Pescaria.
    - Reforço da barricada: empilhar.
    - Rádio: sintonizar.
    - Vigia noturno: holofote no escuro.
    - Horta comunitária: em tempo real.

    Os prêmios voltam de tempos em tempos; no intervalo dá para jogar só por diversão.
