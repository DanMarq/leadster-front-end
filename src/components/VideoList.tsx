import { useEffect, useState } from 'react';
import VideoCard from "./VideoCard";

interface VideoListProps {
  category: string;
  videoClick: (video: any) => void;
  currentPage: number;
  videosPerPage: number;
}

export default function VideoList({ category, videoClick, currentPage, videosPerPage }: VideoListProps) {
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/staticdata');
      const data = await response.json();
      setVideos(data);
    };
    fetchData();
  }, []);

  const filteredVideos = category
    ? videos.filter(video => video.categoria === category)
    : videos;

  const offset = currentPage * videosPerPage;
  const currentVideos = filteredVideos.slice(offset, offset + videosPerPage);

  return (
    <>
      {currentVideos.map((video, i) => (
        <VideoCard key={i} video={video} onClick={() => videoClick(video)} />
      ))}
    </>
  );
}
