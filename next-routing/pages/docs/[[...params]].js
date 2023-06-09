import {useRouter} from 'next/router';

// Catch All Routes example
const Doc = () => {
    const router = useRouter();

    const {params = []} = router.query;   // url: localhost:3000/docs/feature1/concept1/example1
    console.log(params);            // output: ["feature1", "concept1", "example1"]

    if (params.length === 2) {
        return (
            <h1>Viewing docs for feature {params[0]} and concept {params[1]}</h1>
        )
    } else if (params.length === 1) {
        return <h1>Viewing docs for feature {params[0]}</h1>
    }

  return (
    <div>Docs Home Page</div>
  )
}

export default Doc