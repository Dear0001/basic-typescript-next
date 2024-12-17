'use client' // Error boundaries must be Client Components
 
export default function Error({
  error,
  reset,
}:{
  error: Error, reset: () => void
}) {
  return (  
    // global-error must include html and body tags
    <html>
      <body className="h-screen grid place-content-center text-5xl">
        <h3>Something went wrong!</h3>
        <button className="py-1.5 px-2.5 bg-red-500 text-2xl rounded my-5 text-white" onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}