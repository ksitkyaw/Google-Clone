import { useRouter } from 'next/router'
import React from 'react'
import SresultBody from '../components/SresultBody'
import SresultHeader from '../components/SresultHeader'
import Response, {ImageObj} from '../Response'

export default function search({results}) {
  const router = useRouter()
  const { term } = router.query
  console.log(results)
  return (
    <div className='my-2'>
      <SresultHeader term={term}/>
      <SresultBody/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const MockData = true
  const results = MockData ? ImageObj : await fetch(
    `https://customsearch.googleapis.com/customsearch/v1?cx=${process.env.CONTEXT_PARAMETER}&q=${context.query.term}${context.query.searchType ? '&searchType=image' : ''}&key=${process.env.GOOGLE_API_KEY}`
  ).then(res => res.json())
  return {
    props: {
      results: {results}
    }
  }
}

