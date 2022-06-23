import PostPreview from '../components/post-preview'

export default function MoreStories({ exercises }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-10 mb-26">
        {exercises.map((post) => (
          <PostPreview
            key={post.slug}
            {...post}
          />
        ))}
      </div>
    </section>
  )
}
