import pkg from 'scroll-into-view-if-needed/package.json' assert { type: 'json' }
const {description} = pkg

export default function Head() {
  return (
    <>
      <title>{description}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
    </>
  )
}
