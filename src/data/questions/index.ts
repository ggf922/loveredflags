import en from './en'
import ko from './ko'
import ja from './ja'
import es from './es'
import pt from './pt'
import ar from './ar'
import ru from './ru'
import zh from './zh'
import type { Locale, Question } from '@/types'

const questions: Record<Locale, Question[]> = { en, ko, ja, es, pt, ar, ru, zh }

export default questions
