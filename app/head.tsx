import pkg from 'scroll-into-view-if-needed/package.json' assert { type: 'json' }

export default function Head() {
  return (
    <>
      <title>{pkg.description}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:description" content={pkg.description} />
      <meta name="description" content={pkg.description} />
    </>
  )
}
