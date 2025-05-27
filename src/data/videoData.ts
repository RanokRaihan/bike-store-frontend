// Sample video data - replace with your actual YouTube videos
export interface VideoData {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  category: string;
  duration: string;
  views: string;
  uploadDate: string;
  thumbnail?: string;
}

export const videoData: VideoData[] = [
  {
    id: "1",
    title: "Himalayan Cinematic video| B-Roll",
    description:
      "Join us on an epic mountain biking adventure through scenic trails and challenging terrain.",
    youtubeId: "ZVLui4Gqi-4", // Replace with actual YouTube video IDs
    category: "adventure",
    duration: "1:07",
    views: "193k",
    uploadDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Cinematic B-Roll Bike Commercial | Transformation, Jess Braun",
    description:
      "This came as a result of my first try at automotive videos. Some of the shots took a couple of takes but most of it just shot in the flow. This Bike is one hell of a beauty. All in all the video looks sick. And I hope you liked it too.",
    youtubeId: "so7x9EbiFg8",
    category: "maintenance",
    duration: "1:38",
    views: "81.7K",
    uploadDate: "2024-01-10",
  },
  {
    id: "3",
    title: "Road Cycling Tips for Beginners",
    description:
      "Essential tips and techniques for new road cyclists to improve their riding experience.",
    youtubeId: "4ssLDk1eX9w",
    category: "tutorial",
    duration: "4:06",
    views: "1.3M",
    uploadDate: "2020-01-08",
  },
  {
    id: "4",
    title:
      "Kawasaki Ninja Bike Top Speed 400 km/h - Record Breaking Speed - Motorcycle Review",
    description:
      "awasaki Ninja Bike Top Speed 400 km/h - Record-Breaking Speed  - Kawasaki’s Ninja family has been a household name for over three decades now, and the factory aims to keep it that way with a couple of new-in-2019 models in the litre-bike range: the ZX-10R base model and its KRT variant. Toward that end, Kawi boosted power through a number of individual improvements in the engine. The engineers also added a few items that will certainly endear these siblings to the hearts of the race fa",
    youtubeId: "JA3o0bHOArY",
    category: "review",
    duration: "4:01",
    views: "1.2M",
    uploadDate: "2018-01-05",
  },
  {
    id: "5",
    title: "Superbike Real Top Speed | 429 KMPH",
    description:
      "Superbikes real top speed 2025, fastest motorcycle in the world 2025! Superbike gps top speed 2025. Fastest motorcycle 2025.Get ready to witness the real top speed of superbikes in this thrilling video! Watch as these powerful machines reach their maximum speeds on the road. Experience the thrill of speed like never before. All the bikes in the video are capable of reaching speeds of 350 KPH or kilometers per hour. In this video, you can",
    youtubeId: "44JX1VYFH1U",
    category: "review",
    duration: "6:27",
    views: "215K",
    uploadDate: "2025-01-03",
  },
  {
    id: "6",
    title: "MotoGP Bike v Rimac Nevera v Turbo Hayabusa: DRAG RACE",
    description:
      "Can the almighty Rimac Nevera take down two of the fastest motorbikes on the planet? Well, it’s time to find out! We’ve got Mat in the Rimac, and he’s lining up against MotoGP legend Dani Pedrosa on the Red Bull KTM and a supercharged Suzuki Hayabusa! So let’s see how the three stack up. Starting with the Rimac, it’s packing four electric motors, and they combine to produce 1,914hp and 2,360Nm of torque! It’s also housing a 120kWh battery, so naturally, it’s pretty heavy, weighing in at 2,300kg. It’s also super expensive, coming in at around £2,000,000! ",
    youtubeId: "dQw4w9WgXcQ",
    category: "review",
    duration: "15:39",
    views: "6.3M",
    uploadDate: "2023-12-28",
  },
];
