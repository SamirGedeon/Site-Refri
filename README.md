# Fruta — Vitrine interativa de sabores

Projeto demonstrativo de uma vitrine de refrigerantes. O visitante alterna entre Morango, Abacate e Laranja, com imagens, cores e textos de cada sabor.

## Abrir

Abra `index.html` na raiz ou `refrigerante/index.html`. Para servir localmente:

```bash
python -m http.server 8000
```

Acesse http://localhost:8000. O site usa HTML, CSS e JavaScript locais, sem instalação de dependências para funcionar.

## Interações

- Setas de próximo e anterior, com navegação circular.
- Seleção direta de sabor pelos indicadores.
- Teclas ← e → quando o carrossel está em foco.
- Descrição de cada slide para tecnologia assistiva.
- Layout ajustado para telas pequenas e preferência por movimento reduzido.

A identidade Fruta é fictícia. Não há vendas, checkout nem formulário. As imagens de produto já existiam no repositório antes desta revisão; confira a licença antes de utilizá-las comercialmente. A proposta é demonstrar implementação de interface e interação.

## Testar

Com o servidor em `http://localhost:8000`, rode:

```bash
npm install
npx playwright install chromium
npm test
```

Os testes verificam as duas direções do carrossel, seleção direta, teclado, imagens e ausência de largura excedente em desktop e celular. O GitHub Actions também gera capturas para revisão.

## Apresentar

Mostre os três sabores, a volta do último ao primeiro, a navegação por teclado e a versão em celular. Use o título **Vitrine interativa de produtos — HTML, CSS e JavaScript**.

Samir Gedeon · Projeto de estudo e portfólio.
