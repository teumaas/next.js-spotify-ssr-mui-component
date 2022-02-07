import * as React from "react";
import { useTheme } from "@mui/material/styles";

import useSWR from "swr";
import { NowPlayingSong } from "../lib/types";
import fetcher from "../lib/fetcher";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import LinearProgress from "@mui/material/LinearProgress";

const MsToMinSec = (ms: any) => {
  const minutes: any = Math.floor(ms / 60000);
  const seconds: any = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          {data?.isPlaying ? (
            <Typography component="div" variant="h5">
              <Link
                target="_blank"
                underline="none"
                color="#000"
                href={data?.isPlaying ? data.songUrl : ""}
                draggable="false"
              >
                {data.title}
              </Link>
            </Typography>
          ) : (
            <Typography component="div" variant="h5">
              No music playing
            </Typography>
          )}
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data?.isPlaying ? data?.artist : "User not active"}
          </Typography>
        </CardContent>
        <Typography align="right" component="div" paddingRight="10px">
          {data?.isPlaying
            ? `${MsToMinSec(data.songDurationProgress)} / ${MsToMinSec(
                data.songDuration
              )}`
            : "00:00 / 00:00"}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={
            data?.isPlaying
              ? (data?.songDurationProgress / data?.songDuration) * 100
              : 0
          }
        />
      </Box>
      <CardMedia
        draggable="false"
        component="img"
        sx={{ width: 151 }}
        image={data?.isPlaying ? data?.albumImageUrl : "/spotify.svg"}
        alt={data?.isPlaying ? data?.album : "No music playing"}
      />
    </Card>
  );
}
