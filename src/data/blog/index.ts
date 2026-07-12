import { BLOG_POSTS } from './posts'
import { BLOG_POSTS_PART_2 } from './posts2'
import type { BlogPost } from './posts'

export const ALL_POSTS: BlogPost[] = [...BLOG_POSTS, ...BLOG_POSTS_PART_2]

export const FEATURED_POSTS = ALL_POSTS.slice(0, 3)

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find(p => p.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return ALL_POSTS.slice(0, limit)
  // find posts sharing tags
  return ALL_POSTS
    .filter(p => p.slug !== currentSlug)
    .sort((a, b) => {
      const aScore = a.tags.filter(t => current.tags.includes(t)).length
      const bScore = b.tags.filter(t => current.tags.includes(t)).length
      return bScore - aScore
    })
    .slice(0, limit)
}

export function getAllSlugs(): string[] {
  return ALL_POSTS.map(p => p.slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return ALL_POSTS.filter(p => p.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(ALL_POSTS.map(p => p.category)))
}

export type { BlogPost } from './posts'
