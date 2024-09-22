import fs from 'fs'
import path from 'path'
import { describe, expect, it, vi } from 'vitest'
import { cn, formatDate, frontMatter, getPosts, rt, s } from '../lib/utils'

// Mocking fs and path modules for getPosts function
vi.mock('fs')
vi.mock('path')

describe('Utils functions', () => {
  describe('getPosts', () => {
    it('should return an array of posts with metadata and content', () => {
      const dir = '@/app/blog/posts'
      const posts = getPosts()

      vi.spyOn(path, 'join').mockReturnValue(dir)
      vi.spyOn(fs, 'readFileSync').mockReturnValue(posts[0].content)

      expect(posts).toHaveLength(2)
      expect(posts[0].metadata.title).toBe(
        'Spaces vs. Tabs: The Indentation Debate Continues'
      )
      expect(posts[0].content).toBe('# Content')
    })
  })

  describe('cn', () => {
    it('should merge class names correctly', () => {
      const result = cn('class1', 'class2', 'class3')
      expect(result).toBe('class1 class2 class3')
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = '2023-01-01'
      const result = formatDate(date)
      expect(result).toBe('January 1, 2023')
    })

    it('should return relative date correctly', () => {
      const date = new Date()
      date.setFullYear(date.getFullYear() - 1)
      const result = formatDate(date.toISOString(), true)
      expect(result).toBe('1 year ago')
    })
  })

  describe('rt', () => {
    it('should return the correct reading time', () => {
      const content = 'This is a test content with a few words.'
      const result = rt(content)
      expect(result).toBe('1 min read')
    })
  })

  describe('s', () => {
    it('should return the correct file size', () => {
      const size = 1024
      const result = s(size)
      expect(result).toBe('1.02 KB')
    })

    it('should return "0 Bytes" for size 0', () => {
      const result = s(0)
      expect(result).toBe('0 Bytes')
    })

    it('should return "1 Byte" for size 1', () => {
      const result = s(1)
      expect(result).toBe('1 Byte')
    })
  })
  describe('frontMatter', () => {
    it('should parse frontmatter and return metadata and content', () => {
      const mockContent = `---
title: "Test Post"
publishedAt: "2023-01-01"
summary: "This is a test post."
---
# Content`

      const result = frontMatter(mockContent)
      expect(result.metadata.title).toBe('Test Post')
      expect(result.metadata.publishedAt).toBe('2023-01-01')
      expect(result.metadata.summary).toBe('This is a test post.')
      expect(result.content).toBe('# Content')
    })

    it('should handle optional fields in frontmatter', () => {
      const mockContent = `---
title: "Test Post"
publishedAt: "2023-01-01"
summary: "This is a test post."
image: "test-image.jpg"
---
# Content`

      const result = frontMatter(mockContent)
      expect(result.metadata.image).toBe('test-image.jpg')
    })
  })

  describe('cn', () => {
    it('should merge class names correctly', () => {
      const result = cn('class1', 'class2', 'class3')
      expect(result).toBe('class1 class2 class3')
    })

    it('should handle conditional class names', () => {
      const result = cn('class1', false && 'class2', 'class3')
      expect(result).toBe('class1 class3')
    })
  })

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = '2023-01-01'
      const result = formatDate(date)
      expect(result).toBe('January 1, 2023')
    })

    it('should return relative date correctly', () => {
      const date = new Date()
      date.setFullYear(date.getFullYear() - 1)
      const result = formatDate(date.toISOString(), true)
      expect(result).toBe('1 year ago')
    })

    it('should return "Today" for the current date', () => {
      const date = new Date().toISOString()
      const result = formatDate(date, true)
      expect(result).toBe('Today')
    })
  })

  describe('rt', () => {
    it('should return the correct reading time', () => {
      const content = 'This is a test content with a few words.'
      const result = rt(content)
      expect(result).toBe('1 min read')
    })

    it('should handle empty content', () => {
      const content = ''
      const result = rt(content)
      expect(result).toBe('1 min read')
    })
  })

  describe('s', () => {
    it('should return the correct file size', () => {
      const size = 1024
      const result = s(size)
      expect(result).toBe('1.02 KB')
    })

    it('should return "0 Bytes" for size 0', () => {
      const result = s(0)
      expect(result).toBe('0 Bytes')
    })

    it('should return "1 Byte" for size 1', () => {
      const result = s(1)
      expect(result).toBe('1 Byte')
    })

    it('should return correct size for large files', () => {
      const size = 1048576 // 1 MB
      const result = s(size)
      expect(result).toBe('1.05 MB')
    })
  })
})
