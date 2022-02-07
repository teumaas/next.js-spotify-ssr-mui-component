import useSWR from "swr";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import fetcher from "../lib/fetcher";
import { NowPlayingSong } from "../lib/types";
import { LinearProgress } from "@mui/material";

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  const MsToMinSec = (ms: any) => {
    const minutes: any = Math.floor(ms / 60000);
    const seconds: any = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          flex: "1 0 auto",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            <Link
              sx={{
                color: "#000",
              }}
              target="_blank"
              underline="none"
              href={data?.isPlaying ? data.songUrl : ""}
            >
              {data?.isPlaying ? data.title : "No music playing"}
            </Link>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data?.isPlaying ? data?.artist : ""}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              paddingTop: "55px",
            }}
          >
            <Typography align="right" component="div">
              {data?.isPlaying
                ? `${MsToMinSec(data.songDurationProgress)} / ${MsToMinSec(
                    data.songDuration
                  )}`
                : ""}
            </Typography>
            {data?.isPlaying ? (
              <LinearProgress
                variant="determinate"
                value={(data?.songDurationProgress / data?.songDuration) * 100}
              />
            ) : (
              ""
            )}
          </Box>
        </CardContent>
        <CardMedia
          draggable="false"
          component="img"
          sx={{ width: 150 }}
          image={
            data?.isPlaying
              ? data?.albumImageUrl
              : "//logo.clearbit.com/spotify.com?size=150"
          }
          alt={data?.isPlaying ? data?.album : "No music playing"}
        />
      </Card>
    </Box>
  );
}
