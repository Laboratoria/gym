import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  difficulties,
  projects,
  OAs,
}) {
  return (
    <div>
      {coverImage && (
        <div className="mb-5">
          <CoverImage
            slug={slug}
            title={title}
            src={coverImage}
            height={278}
            width={556}
          />
        </div>
      )}
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/exercises/${slug}`} href="/exercises/[slug]">
          <a className="hover:underline" dangerouslySetInnerHTML={{__html: title}} />
        </Link>
      </h3>
      {date && (
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
      )}
      <p className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{__html: excerpt}} />
      {author && <Avatar name={author.name} picture={author.picture} />}
      {(difficulties?.length || projects?.length || OAs?.length) && (
        <dl class="mt-6 max-w-2xl mx-auto grid grid-cols-2 gap-x-6 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {difficulties?.length && (
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Dificultad</dt>
              <dd class="mt-2 text-sm text-gray-500">{difficulties.map((it) => (
                <span
                  class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  {it}
                </span>
              ))}</dd>
            </div>
          )}
          {OAs?.length && (
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">OAs</dt>
              <dd class="mt-2 text-sm text-gray-500">{OAs.map((it) => (
                <span
                  class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  {it}
                </span>
              ))}</dd>
            </div>
          )}
          {projects?.length && (
            <div class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">Proyectos</dt>
              <dd class="mt-2 text-sm text-gray-500">{projects.map((it) => (
                <span
                  class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                  {it}
                </span>
              ))}</dd>
            </div>
          )}
        </dl>
      )}
    </div>
  )
}
