import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { Box } from "shared/elements/box/common"
import { Word } from "shared/elements/text/common"
import { COZY_ISDEVELOP } from "shared/utils/variable"
import { SpotifyPlaylist } from "spotify/elements/spotify-playlist"
import { useSpotifyPlayer } from "spotify/hooks/useSpotifyPlayer"

export default () => {
    const player = useSpotifyPlayer()
    const router = useRouter()
    const [isOpen, setOpenState] = useState(false)

    useEffect(() => {
        if (!COZY_ISDEVELOP && router.isReady) {
            router.push('/')
        }
    }, [router])

    if (!COZY_ISDEVELOP) {
        return <></>
    }

    return (
        <>
            <Box padding={'1em 2em'} background={"#212121"} radius={'30px'}>
                <Word color={"#FFFFFF"} weight={'600'} onClick={() => setOpenState(true)}>open playlist</Word>
            </Box>
            <SpotifyPlaylist isOpen={isOpen} onClose={() =>  setOpenState(false)} />
        </>
    )
}