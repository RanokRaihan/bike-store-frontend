import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { videoData, VideoData } from "@/data/videoData";
import { Calendar, Clock, Eye, Play, Search } from "lucide-react";
import { useState } from "react";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  const categories = [
    { value: "all", label: "All Videos" },
    { value: "adventure", label: "Adventure" },
    { value: "maintenance", label: "Maintenance" },
    { value: "tutorial", label: "Tutorials" },
    { value: "review", label: "Reviews" },
    { value: "safety", label: "Safety" },
  ];

  const filteredVideos = videoData.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getYouTubeThumbnail = (youtubeId: string) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

  return (
    <main className="min-h-content bg-gray-50">
      <div className="container mx-auto p-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Video Gallery
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Bike Adventures & Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our collection of bike-related videos featuring adventures,
            tutorials, reviews, and expert tips to enhance your cycling
            experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Featured/Selected Video */}
        {selectedVideo && (
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className="capitalize">
                    {selectedVideo.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {selectedVideo.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {selectedVideo.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(selectedVideo.uploadDate)}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-2xl">
                  {selectedVideo.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {selectedVideo.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={getYouTubeThumbnail(video.youtubeId)}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              <CardHeader className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="capitalize text-xs">
                    {video.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Eye className="h-3 w-3" />
                    {video.views}
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {video.description}
                </CardDescription>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                  <Calendar className="h-3 w-3" />
                  {formatDate(video.uploadDate)}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No videos found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Want to See More?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for the latest bike reviews,
            tutorials, and adventure videos. Don't miss out on expert tips and
            exciting cycling content!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Subscribe to YouTube
            </Button>
            <Button variant="outline" size="lg">
              Follow on Social Media
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Videos;
