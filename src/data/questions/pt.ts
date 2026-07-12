import type { Question } from '@/types'

const questions: Question[] = [
  { id: 1, emoji: '📱', text: 'Seu par não leu sua mensagem há 3 horas. Primeira reação?', options: [
    { text: 'Deve estar ocupado/a. Toco minha vida', scores: { O: -2, E: -1 } },
    { text: 'Fico um pouco preocupado/a mas mantenho a calma', scores: { O: 0, C: -1 } },
    { text: 'Envio "está tudo bem?"', scores: { O: 1, C: 1 } },
    { text: 'PÂNICO. 5 ligações seguidas', scores: { O: 3, E: 2, V: 1 } },
  ]},
  { id: 2, emoji: '💬', text: 'Seu par fez algo que você não gostou. Você:', options: [
    { text: 'Falo direto e honesto', scores: { C: 2, V: 1 } },
    { text: 'Me acalmo primeiro, depois converso', scores: { C: 1, E: -1 } },
    { text: 'Dou tratamento silencioso', scores: { C: -2, E: 1 } },
    { text: 'Finjo que nada aconteceu', scores: { C: -3, E: -1 } },
  ]},
  { id: 3, emoji: '👀', text: 'Seu par ri com alguém do sexo oposto. Você:', options: [
    { text: 'Cumprimento calorosamente e me junto', scores: { O: -2, E: -2 } },
    { text: 'Desconfortável mas observo de longe', scores: { O: 0, V: 0 } },
    { text: 'Depois pergunto "quem era?"', scores: { O: 1, V: 1 } },
    { text: 'Interrompo furioso/a', scores: { O: 3, V: 3, E: 2 } },
  ]},
  { id: 4, emoji: '📸', text: 'Quanto você checa as redes do seu par?', options: [
    { text: 'Não me importo nem um pouco', scores: { O: -3, V: -2 } },
    { text: 'Ocasionalmente', scores: { O: -1 } },
    { text: 'Verifico novos seguidores', scores: { O: 2, V: 1 } },
    { text: 'Sei cada seguidor, curtida e comentário', scores: { O: 3, V: 3 } },
  ]},
  { id: 5, emoji: '🎉', text: 'Seu par sugere passar o fim de semana separados. Você:', options: [
    { text: 'SIM! Preciso do meu tempo', scores: { O: -3, V: -2 } },
    { text: 'Tá ok, respeito mútuo', scores: { O: -1, V: -1 } },
    { text: 'Um pouco triste mas entendo', scores: { O: 1, E: 1 } },
    { text: 'Por quê? Não me ama mais?!', scores: { O: 3, E: 2, V: 2 } },
  ]},
  { id: 6, emoji: '🍷', text: 'Depois de uma briga, seu estilo:', options: [
    { text: 'Resolver com calma conversando', scores: { E: -2, C: 2 } },
    { text: 'Preciso de tempo mas reconcilio logo', scores: { E: 0 } },
    { text: 'Sumo por dias', scores: { E: 2, C: -2 } },
    { text: 'Exploto e digo "acabou!"', scores: { E: 3, V: 2, C: 1 } },
  ]},
  { id: 7, emoji: '💭', text: 'O tipo ideal do seu par é bem diferente de você:', options: [
    { text: 'Gostos são gostos, sem drama', scores: { O: -2, E: -1 } },
    { text: 'Ansioso/a mas deixo passar', scores: { O: 1, E: 1 } },
    { text: 'Continuo perguntando o porquê desse tipo', scores: { O: 2, V: 1 } },
    { text: 'Tento mudar para ser como esse tipo', scores: { O: 3, C: -1, E: 2 } },
  ]},
  { id: 8, emoji: '🕐', text: 'Sua frequência ideal de comunicação:', options: [
    { text: '1-2 vezes por dia basta', scores: { O: -3 } },
    { text: 'Manhã, tarde, noite', scores: { O: -1 } },
    { text: 'Frequente durante o dia', scores: { O: 2 } },
    { text: 'Constantemente enquanto estou acordado/a', scores: { O: 3, V: 2 } },
  ]},
  { id: 9, emoji: '💔', text: 'Seu par menciona o/a ex. Você:', options: [
    { text: 'Escuto tranquilo/a, passado é passado', scores: { O: -2, E: -2 } },
    { text: 'Desconfortável mas não demonstro', scores: { O: 0, E: 1 } },
    { text: 'Irrito: "por que falar disso?"', scores: { O: 2, E: 2 } },
    { text: 'Stalkeio o/a ex nas redes', scores: { O: 3, V: 2, E: 2 } },
  ]},
  { id: 10, emoji: '🎁', text: 'Seu par esqueceu o aniversário. Você:', options: [
    { text: 'Rio, acontece', scores: { E: -3, C: -1 } },
    { text: 'Expresso decepção e peço para lembrar', scores: { E: 0, C: 2 } },
    { text: 'Fico frio/a o dia todo', scores: { E: 2, C: -2 } },
    { text: 'Menciono terminar', scores: { E: 3, V: 2, C: 1 } },
  ]},
  { id: 11, emoji: '🌙', text: 'Você depois de um término:', options: [
    { text: 'Triste mas recupero, crescimento pessoal', scores: { E: -2, O: -2 } },
    { text: 'Deprimido/a um tempo, tempo cura', scores: { E: 0 } },
    { text: 'Sem dormir meses, stalkeando redes', scores: { E: 2, O: 3 } },
    { text: 'Tento reconciliar sem parar', scores: { E: 3, O: 3, V: 2 } },
  ]},
  { id: 12, emoji: '💍', text: 'Seu par quer viajar sem você. Você:', options: [
    { text: 'Divirta-se! Apoio total', scores: { O: -3, V: -3 } },
    { text: 'Triste mas entendo', scores: { O: 0, V: -1 } },
    { text: 'Pergunto em detalhes com quem vai', scores: { O: 2, V: 2 } },
    { text: 'De jeito nenhum. Vamos juntos ou nada', scores: { O: 3, V: 3, E: 2 } },
  ]}
]

export default questions
