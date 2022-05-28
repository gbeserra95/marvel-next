import React from "react"
import Image from "next/image"

import MiniCard from "../MiniCard"

import { Container, Grid, Typography } from "@mui/material"

import * as S from "./styles"

function CharacterContent({ character, comics, events, series }) {
    return(
        <Container maxWidth="lg">
            <Grid container minHeight="calc(100vh - 112px)" marginY={4} padding={4} spacing={4}>
                <Grid item container xs={12} sm={12} md={4} borderRight={{md: "1px solid white"}} rowSpacing={4}>
                    <Grid item container xs={12}>
                        <S.ImageWrapper>
                            <Image 
                                src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                                alt={character.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </S.ImageWrapper>
                    </Grid>
                    <Grid item container xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="h2" color="secondary">Series</Typography>
                            </Grid>
                            {React.Children.toArray(
                                series.slice(0, 6).map(item => 
                                    <Grid item xs={6}>
                                        <MiniCard data={item} />
                                    </Grid>    
                                )
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
                </Grid>
                <Grid item container xs={12} sm={12} md={8} alignItems="flex-start">
                    <Grid container item xs={12} rowSpacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h1" color="secondary">{character.name}</Typography>
                        </Grid>
                        {character.description != "" && <Grid item xs={12}>
                            <Typography variant="p" color="secondary">{character.description}</Typography>
                        </Grid>}

                        <Grid item container xs={12} rowSpacing={2} spacing={4}>
                            <Grid item xs={12}>
                                <Typography variant="h2" color="secondary">Events</Typography>
                            </Grid>
                            {React.Children.toArray(
                                events[0].urls.filter(url => url.type === "detail")
                                    .map(item =>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <a href={item.url} target="_blank" title={events[0].name}>
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
                                    )
                                )
                            }
                            <Grid item container xs={12} sm={12} md={8}>
                                <Grid item xs={12}>
                                    <Typography variant="p" color="secondary">{events[0].description}</Typography>
                                </Grid>
                                <Grid item container xs={12} spacing={2}>
                                    {events.length > 1 && React.Children.toArray(
                                        events.slice(1, 5).map(event => 
                                            <Grid item xs={6} sm={3} md={3}>
                                                <MiniCard data={event} height="112px" />
                                            </Grid>    
                                        )
                                    )}
                                    <Grid item xs={12}>
                                        <S.Anchor href="https://www.marvel.com/comics/events_crossovers" target="_blank">
                                            <div>
                                                <p>More events</p>
                                                <S.ArrowLink />    
                                            </div>
                                        </S.Anchor> 
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={12}>
                                <Typography variant="h2" color="secondary">Comics</Typography>
                            </Grid>
                            {React.Children.toArray(
                                comics.slice(0, 15).map(comic => 
                                    <Grid item xs={6} sm={2.4} md={2.4}>
                                        <MiniCard data={comic} />
                                    </Grid>    
                                )
                            )}
                            {React.Children.toArray(
                                character.urls.filter(url => url.type === "comiclink")
                                    .map(item =>
                                        <Grid item xs={12}>
                                            <S.Anchor href={item.url} target="_blank">
                                                <div>
                                                    <p>More {character.name} comics</p>
                                                    <S.ArrowLink />    
                                                </div>
                                            </S.Anchor> 
                                        </Grid>
                                    )
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CharacterContent