import { useQuery, QueryClient, dehydrate } from "react-query"
import { useRouter } from "next/router"

function Character() {
    const router = useRouter()
    const characterId = router.query?.id

    const { isSuccess, data, isLoading, isError } = useQuery(
        ["getCharacter", characterId],
        () => searchCharacterById(characterId),
        {
            enabled: characterId.length > 0
        }
    )
    
    if(isSuccess)
        return <div>{JSON.stringify(data)}</div>

    if(isLoading)
        return <div>Loading...</div>

    if(isError)
        return <div>Something might be lost in the Multiverse! We couldn't find your character.</div>

    return <></>    
}

export default Character

export async function getStaticProps(context) {
    const id = context.params?.id
    const queryClient = new QueryClient

    await queryClient.prefetchQuery(["getCharacter", id],
        () => searchCharacterById(id)
    )

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking"
    }
}