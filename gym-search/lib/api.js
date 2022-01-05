import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { marked } from 'marked';

const exercisesDirectory = join(process.cwd(), '../exercises')

export function getExerciseSlugs() {
  return fs.readdirSync(exercisesDirectory)
}

export function getExerciseBySlug(slug, fields = []) {
  const fullPath = join(exercisesDirectory, `${slug}/README.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  if (!content) {
    content = fileContents;
  }

  // Override function
  const renderer = {
    heading(text, level) {
      if (level === 1) {
        data.title = text;
      }
    },
    paragraph(text) {
      if (!text.startsWith('<a') && !data.excerpt) {
        data.excerpt = text;
      }
    }
  };

  marked.use({ renderer });
  marked.parse(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllExercises(fields = []) {
  const slugs = getExerciseSlugs().filter(s => !s.endsWith('.md'))

  const exercises = slugs
    .map((slug) => getExerciseBySlug(slug, fields))
    // sort exercises by date in descending order
    .sort((exercise1, exercise2) => (exercise1.title < exercise2.title ? -1 : 1))
  return exercises
}
