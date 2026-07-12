import en from './en'
import ko from './ko'
import ja from './ja'
import es from './es'
import pt from './pt'
import ar from './ar'
import ru from './ru'
import zh from './zh'
import type { Locale, ResultType } from '@/types'

const results: Record<Locale, Record<string, ResultType>> = { en, ko, ja, es, pt, ar, ru, zh }

export default results
export { RESULT_CODES, RESULT_LEVELS } from './types'
