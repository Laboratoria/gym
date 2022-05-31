---
difficulty:
  - difficult
---

# The Lift

[https://www.codewars.com/kata/58905bfa1decb981da00009e/train/javascript](https://www.codewars.com/kata/58905bfa1decb981da00009e/train/javascript)

## Sinopse

Um edifício de vários andares tem um elevador.

As pessoas fazem fila em diferentes andares esperando o elevador.

Algumas pessoas querem subir. Algumas pessoas querem descer.

O andar para onde eles querem ir é representado por um número (ou seja, quando
eles entram no elevador, este é o botão que eles pressionam)

```js
    ANTES (pessoas esperando em filas)             DEPOIS (pessoas em seus destinos)
                   +--+                                          +--+
  /----------------|  |----------------\        /----------------|  |----------------\
10|                |  | 1,4,3,2        |      10|             10 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 9|                |  | 1,10,2         |       9|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 8|                |  |                |       8|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 7|                |  | 3,6,4,5,6      |       7|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 6|                |  |                |       6|          6,6,6 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 5|                |  |                |       5|            5,5 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 4|                |  | 0,0,0          |       4|          4,4,4 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 3|                |  |                |       3|            3,3 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 2|                |  | 4              |       2|          2,2,2 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 1|                |  | 6,5,2          |       1|            1,1 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 G|                |  |                |       G|          0,0,0 |  |                |
  |====================================|        |====================================|
```

## Regras

### Regras do elevador

- O elevador só sobe ou desce!
- Cada andar tem botões de chamada de elevador para cima UP e para baixo DOWN
  (exceto o último andar e o térreo, que possuem apenas DOWN e UP,
  respectivamente)
- O elevador nunca muda de direção até que não haja mais pessoas querendo
  entrar/sair na direção em que já está viajando
- Quando vazio o elevador tenta ser inteligente. Por exemplo,
  + Se estava subindo, pode continuar subindo para buscar a pessoa do andar
    mais alto que deseja descer
  + Se estava descendo, pode continuar descendo para buscar a pessoa do andar
    mais baixo que deseja subir
- O Elevador tem capacidade máxima de pessoas
- Quando chamado, o elevador parará em um andar, mesmo que esteja cheio, embora,
  a menos que alguém desça, ninguém mais poderá entrar!
- Se o elevador estiver vazio e não houver pessoas esperando, ele retornará ao
  térreo

### Regras para pessoas

- As pessoas ficam em "filas" que representam sua ordem de chegada para aguardar
  o elevador
- Todas as pessoas podem pressionar os botões de chamada de elevador UP/DOWN
- Somente pessoas que vão na mesma direção do elevador podem entrar nele
- A entrada é feita pela ordem da "fila", mas quem não puder entrar não bloqueia
  quem estiver atrás que possa
- Se uma pessoa não conseguir entrar em um elevador cheio, ela pressionará o
  botão de chamada de elevador UP/DOWN novamente após a partida sem ela

### Tarefa do Kata

- Leve todas as pessoas para os andares para os quais elas querem ir, obedecendo
  às regras do elevador e às regras das pessoas
- **Retorne uma lista de todos os andares em que o Elevador parou**
  **(na ordem visitada!)**

## Entrada e Saída

### Entrada

- `queues` uma lista de filas de pessoas para todos os andares do prédio.
- A altura do prédio varia
- 0 = piso térreo
- Nem todos os andares têm filas
- O índice [0] da fila é o "início" da fila
- Os números indicam para qual andar a pessoa quer ir
- `capacity` número máximo de pessoas permitidas no elevador

_Validação de parâmetros_ Todos os parâmetros de entrada podem ser considerados
OK. Não há necessidade de verificar coisas como:

- Pessoas querendo ir para andares que não existem
- Pessoas que desejam subir de elevador até o andar em que já estão
- Prédios com < 2 andares
- Porões

### Saída

- **Uma lista de todos os andares em que o elevador parou (na ordem visitada!)**
