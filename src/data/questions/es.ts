import type { Question } from '@/types'

const questions: Question[] = [
  { id: 1, emoji: '📱', text: 'Tu pareja no ha leído tu mensaje en 3 horas. ¿Primera reacción?', options: [
    { text: 'Estará ocupado/a. Sigo con lo mío', scores: { O: -2, E: -1 } },
    { text: 'Me preocupa un poco pero me mantengo tranquilo/a', scores: { O: 0, C: -1 } },
    { text: 'Envío un "¿Todo bien?"', scores: { O: 1, C: 1 } },
    { text: 'PÁNICO. 5 llamadas seguidas', scores: { O: 3, E: 2, V: 1 } },
  ]},
  { id: 2, emoji: '💬', text: 'Tu pareja hizo algo que no te gustó. Tú:', options: [
    { text: 'Se lo digo directo y honesto', scores: { C: 2, V: 1 } },
    { text: 'Me calmo primero, luego hablo suave', scores: { C: 1, E: -1 } },
    { text: 'Le hago la ley del hielo', scores: { C: -2, E: 1 } },
    { text: 'Finjo que no pasó nada', scores: { C: -3, E: -1 } },
  ]},
  { id: 3, emoji: '👀', text: 'Tu pareja se ríe con alguien del sexo opuesto. Tú:', options: [
    { text: 'Saludo cordialmente y me uno', scores: { O: -2, E: -2 } },
    { text: 'Incómodo/a pero observo de lejos', scores: { O: 0, V: 0 } },
    { text: 'Después pregunto "¿quién era?"', scores: { O: 1, V: 1 } },
    { text: 'Voy furioso/a e interrumpo', scores: { O: 3, V: 3, E: 2 } },
  ]},
  { id: 4, emoji: '📸', text: '¿Cuánto revisas las redes de tu pareja?', options: [
    { text: 'No me importan para nada', scores: { O: -3, V: -2 } },
    { text: 'Ocasionalmente', scores: { O: -1 } },
    { text: 'Reviso seguidores nuevos', scores: { O: 2, V: 1 } },
    { text: 'Conozco cada seguidor, like y comentario', scores: { O: 3, V: 3 } },
  ]},
  { id: 5, emoji: '🎉', text: 'Tu pareja sugiere pasar el finde separados. Tú:', options: [
    { text: '¡SÍ! Necesito mi tiempo', scores: { O: -3, V: -2 } },
    { text: 'Está bien, respeto mutuo', scores: { O: -1, V: -1 } },
    { text: 'Un poco triste pero entiendo', scores: { O: 1, E: 1 } },
    { text: '¿Por qué? ¿Ya no me quieres?!', scores: { O: 3, E: 2, V: 2 } },
  ]},
  { id: 6, emoji: '🍷', text: 'Después de una pelea, tu estilo es:', options: [
    { text: 'Resolver con calma hablando', scores: { E: -2, C: 2 } },
    { text: 'Necesito tiempo pero reconcilio pronto', scores: { E: 0 } },
    { text: 'Ghosting durante días', scores: { E: 2, C: -2 } },
    { text: 'Explotar y decir "¡se acabó!"', scores: { E: 3, V: 2, C: 1 } },
  ]},
  { id: 7, emoji: '💭', text: 'El tipo ideal de tu pareja es muy diferente a ti. Tú:', options: [
    { text: 'Gustos son gustos, sin drama', scores: { O: -2, E: -1 } },
    { text: 'Ansioso/a pero lo dejo pasar', scores: { O: 1, E: 1 } },
    { text: 'Sigo preguntando por qué le gusta ese tipo', scores: { O: 2, V: 1 } },
    { text: 'Intento cambiar para ser como ese tipo', scores: { O: 3, C: -1, E: 2 } },
  ]},
  { id: 8, emoji: '🕐', text: 'Tu frecuencia ideal de comunicación:', options: [
    { text: '1-2 veces al día basta', scores: { O: -3 } },
    { text: 'Mañana, mediodía, noche', scores: { O: -1 } },
    { text: 'Frecuente durante todo el día', scores: { O: 2 } },
    { text: 'Constantemente mientras esté despierto/a', scores: { O: 3, V: 2 } },
  ]},
  { id: 9, emoji: '💔', text: 'Tu pareja menciona a su ex. Tú:', options: [
    { text: 'Escucho tranquilo/a, pasado pisado', scores: { O: -2, E: -2 } },
    { text: 'Incómodo/a pero no lo muestro', scores: { O: 0, E: 1 } },
    { text: 'Me molesto: "¿por qué hablas de eso?"', scores: { O: 2, E: 2 } },
    { text: 'Stalkeo el perfil del ex al instante', scores: { O: 3, V: 2, E: 2 } },
  ]},
  { id: 10, emoji: '🎁', text: 'Tu pareja olvidó su aniversario. Tú:', options: [
    { text: 'Me río, puede pasar', scores: { E: -3, C: -1 } },
    { text: 'Expreso decepción y pido recordar', scores: { E: 0, C: 2 } },
    { text: 'Ley del hielo todo el día', scores: { E: 2, C: -2 } },
    { text: 'Menciono romper', scores: { E: 3, V: 2, C: 1 } },
  ]},
  { id: 11, emoji: '🌙', text: 'Tú después de una ruptura:', options: [
    { text: 'Triste pero me recupero, crecimiento personal', scores: { E: -2, O: -2 } },
    { text: 'Deprimido/a un tiempo, el tiempo cura', scores: { E: 0 } },
    { text: 'Sin dormir meses, stalkeando sus redes', scores: { E: 2, O: 3 } },
    { text: 'Intento reconciliar sin parar', scores: { E: 3, O: 3, V: 2 } },
  ]},
  { id: 12, emoji: '💍', text: 'Tu pareja quiere viajar sin ti. Tú:', options: [
    { text: '¡Diviértete! Apoyo total', scores: { O: -3, V: -3 } },
    { text: 'Triste pero entiendo', scores: { O: 0, V: -1 } },
    { text: 'Pregunto en detalle con quién va', scores: { O: 2, V: 2 } },
    { text: 'Absolutamente no. Vamos juntos o nada', scores: { O: 3, V: 3, E: 2 } },
  ]}
]

export default questions
