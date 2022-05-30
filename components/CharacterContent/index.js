import Image from "next/image"

import MiniCard from "../MiniCard"

import { Container, Grid, Typography, useMediaQuery } from "@mui/material"

import * as S from "./styles"

function CharacterContent({ character, comics, events, series }) {
    const lowerThanMd = useMediaQuery(theme => theme.breakpoints.down('md'))
    
    return(
        <Container maxWidth="lg">
            <Grid container minHeight="calc(100vh - 112px)" paddingY={{xs: 0, sm: 0, md: 4}} spacing={4} >
                <Grid item container xs={12} sm={12} md={4} marginY={{xs: 0, sm: 0, md: 4}} borderRight={{md: "1px solid white"}} rowSpacing={4}>
                    {lowerThanMd && 
                        <Grid item xs={12}>
                            <Typography variant="h1" color="secondary">{character.name}</Typography>
                        </Grid>
                    }
                    {lowerThanMd && character.description.length > 0 && 
                        <Grid item xs={12}>
                            <Typography variant="p" color="secondary">{character.description}</Typography>
                        </Grid>
                    }
                    {lowerThanMd && character.description.length == 0 &&
                        <Grid item xs={12}>
                            <Typography variant="p" color="secondary">Sorry, we don&apos;t have too much information about this character. 😕 <br/>Try again in another universe.</Typography>
                        </Grid>
                    }
                    <Grid item container xs={12} justifyContent={{xs: "center", sm: "center", md: "flex-start"}}>
                        <S.ImageWrapper>
                            <Image 
                                src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                                alt={character.name}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </S.ImageWrapper>
                    </Grid>
                    {series.length > 0 &&
                        <Grid item container xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="h2" color="secondary">Series</Typography>
                            </Grid>
                            {series.slice(0, 6).map(item => 
                                <Grid item xs={6} key={"series-grid-item-" + item.id}>
                                    <MiniCard data={item} key={"series-item-" + item.id}/>
                                </Grid>    
                            )}
                            <Grid item xs={12}>
                                <S.Anchor href="https://www.marvel.com/comics/series" target="_blank" reverse>
                                    <div>
                                        <p>More series</p>
                                        <S.ArrowLink />    
                                    </div>
                                </S.Anchor> 
                            </Grid>
                        </Grid>
                    }
                </Grid>
                <Grid item container xs={12} sm={12} md={8} alignItems="flex-start">
                    <Grid container item xs={12} rowSpacing={2}>
                        {!lowerThanMd && 
                            <Grid item xs={12}>
                                <Typography variant="h1" color="secondary">{character.name}</Typography>
                            </Grid>
                        }
                        {!lowerThanMd && character.description.length > 0 && 
                            <Grid item xs={12}>
                                <Typography variant="p" color="secondary">{character.description}</Typography>
                            </Grid>
                        }
                        {!lowerThanMd && character.description.length == 0 &&
                            <Grid item xs={12}>
                                <Typography variant="p" color="secondary">Sorry, we don&apos;t have too much information about this character. 😕 <br/>Try again in another universe.</Typography>
                            </Grid>
                        }
                        {events.length > 0 &&
                            <Grid item container xs={12} rowSpacing={2} spacing={4}>
                                <Grid item xs={12}>
                                    <Typography variant="h2" color="secondary">Events</Typography>
                                </Grid>
                                {events[0].urls.filter(url => url.type === "detail")
                                    .map(item =>
                                        <Grid item xs={12} sm={12} md={4} key={"event-grid-item-" + item.id}>
                                            <a href={item.url} target="_blank" rel="noreferrer" title={events[0].name}>
                                                <S.MainEvent>
                                                        <Image 
                                                            src={`${events[0].thumbnail.path}.${events[0].thumbnail.extension}`}
                                                            alt={events[0].name}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            title={events[0].name}
                                                        />
                                                </S.MainEvent>
                                            </a>
                                        </Grid>
                                )}
                                <Grid item container xs={12} sm={12} md={8}>
                                    <Grid item xs={12}>
                                        <Typography variant="p" color="secondary">{events[0].description}</Typography>
                                    </Grid>
                                    <Grid item container xs={12} spacing={2}>
                                        {events.length > 1 && 
                                            events.slice(1, 5).map(event => 
                                                <Grid item xs={6} sm={3} md={3} key={"main-event-grid-item-" + event.id}>
                                                    <MiniCard data={event} height="112px" />
                                                </Grid>    
                                            )
                                        }
                                        <Grid item xs={12}>
                                            <S.Anchor href="https://www.marvel.com/comics/events_crossovers" target="_blank" rel="noreferrer">
                                                <div>
                                                    <p>More events</p>
                                                    <S.ArrowLink />    
                                                </div>
                                            </S.Anchor> 
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                        {comics.length > 0 &&
                            <Grid item container xs={12}>
                                <Grid item xs={12}>
                                    <Typography variant="h2" color="secondary">Comics</Typography>
                                </Grid>
                                {comics.slice(0, 15).map(comic => 
                                    <Grid item xs={6} sm={2.4} md={2.4} key={"comic-grid-item-" + comic.id}>
                                        <MiniCard data={comic} />
                                    </Grid>    
                                )}
                                {character.urls.filter(url => url.type === "comiclink").map(item =>
                                    <Grid item xs={12} key={"character-url-grid-item-" + item.id}>
                                        <S.Anchor href={item.url} target="_blank" rel="noreferrer">
                                            <div>
                                                <p>More {character.name} comics</p>
                                                <S.ArrowLink />    
                                            </div>
                                        </S.Anchor> 
                                    </Grid>
                                )}
                            </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CharacterContent